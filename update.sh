#!/usr/bin/env bash

# update jdownloader installation

# FIXME "existing jD instance found!"
# FIXME "org.appwork.utils.singleapp.AnotherInstanceRunningException: JD2 is already running!"

set -e
set -u
#set -x # debug

script_dir="$(dirname "$0")"

dst="$PWD"

jar="$dst/JDownloader.jar"

remove_old=true
remove_old=false # TODO remove

if [ -n "$(git status --porcelain)" ]; then
  echo "error: git repo is dirty. todo:"
  echo "  git reset --hard master"
  exit 1
fi

rev1=0
if [ -e build.json ]; then
  rev1=$(cat build.json | jq .JDownloaderRevision)
  v1=$(date -d"$(jq -r .buildDate <build.json)" +"%Y.%m.%d")
fi

if $remove_old; then

  git rm -rf . || true

  rm -rf logs/ cfg/ JD2.lock JDownloader.pid update/ translations/ themes/ tmp/ licenses/ libs/ license_german.txt build.json extensions/ license.txt

fi

# java, jar
jre=$(nix-build --no-out-link '<nixpkgs>' -A jre)
export PATH="$jre/bin:$PATH"

# bwrap
bubblewrap=$(nix-build --no-out-link '<nixpkgs>' -A bubblewrap)
export PATH="$bubblewrap/bin:$PATH"

# repack jar files
echo "repacking jar files"
"$script_dir/repack-jars.sh"

a=(bwrap)

# FIXME add only required /nix/store paths
a+=(--ro-bind /nix /nix)

a+=(--proc /proc)
a+=(--dev /dev)
a+=(--unshare-pid) # ?
a+=(--new-session) # ?
a+=(--unshare-all)
a+=(--share-net)
a+=(--ro-bind /etc/resolv.conf /etc/resolv.conf)
a+=(--die-with-parent)
#a+=(--dir /run/user/$UID) # tmpfs
#a+=(--dir "$dst") # give access to JDownloader.jar etc
a+=(--bind "$dst" "$dst") # give access to JDownloader.jar etc
a+=(--bind "$HOME/Downloads/jdownloader" "/output") # give access to JDownloader.jar etc
#a+=()

a+=(java)

# see also
# https://aur.archlinux.org/cgit/aur.git/tree/JDownloaderHeadless?h=jdownloader2
# headless mode requires username and password in
# $dst/cfg/org.jdownloader.api.myjdownloader.MyJDownloaderSettings.json
a+=(-Djava.awt.headless=true)

a+=(-jar "$jar")

# no. with "-norestart" jd does not restart after update
#a+=(-norestart)

#a+=()

# run 2:
# |---------------------------Headless Information-------------------------------
# |       MyJDownloader
# |       Your 'My JDownloader' logins are not correct.
# |       Please check username/email and password!
# |       Enter y -> Enter Logins
# |       Enter n -> Exit JDownloader

set -x

keep_running=true

#for ((run=1;run<=2;run++)); do
while $keep_running; do
  #echo "run $run"
  printf ">"; printf " %q" "${a[@]}"; printf "\n"
  #"${a[@]}"
  screen_id=$(mktemp -u jdownloader.XXXXXXX)
  #screen -S $screen_id -d -m java -Djava.awt.headless=true -jar JDownloader.jar
  screen -S $screen_id -d -m "${a[@]}"
  hardcopy_path=$(mktemp -u -p /run/user/$UID jdownloader-hardcopy.XXXXXXX)
  echo "waiting for console dialog"
  # FIXME handle run 1 versus run 2
  # normally this happens only on run 2
  for ((step=1;;step++)); do
    sleep 2
    # also copy history (scrollback buffer)
    #screen -S $screen_id -X hardcopy -h $hardcopy_path

    if ! screen -S $screen_id -X hardcopy $hardcopy_path; then
      echo "screen-hardcopy failed -> stopping wait loop"
      # No screen session found.
      #keep_running=false # no! this would stop after run 1
      break
    fi

    if
      grep -q '^|---------------------------Headless Information-------------------------------' $hardcopy_path &&
      grep -q "^|       Your 'My JDownloader' logins are not correct." $hardcopy_path &&
      grep -q "^|       Enter n -> Exit JDownloader" $hardcopy_path
    then
      echo "found console dialog. answering no"
      screen -S $screen_id -X stuff $'n\n'
      keep_running=false
      break
    fi
    echo "not found console dialog. retrying"
    echo "last 10 lines of console output:"
    tail -n10 $hardcopy_path | grep -n .
  done
  rm $hardcopy_path || true
done

rev2=$(cat build.json | jq .JDownloaderRevision)
v2=$(date -d"$(jq -r .buildDate <build.json)" +"%Y.%m.%d")

# different versions can have the same revision
#if [ "$rev1" = "$rev2" ]; then
if [ "$v1" = "$v2" ]; then
  echo "already up to date at version $v2"
  exit
fi



# extract and remove jar files
# jar files create diff noise
# so we store only the contents of the jar files

# extract jar files
echo "extracting jar files"
"$script_dir/extract-jars.sh"

# remove jar files
find . -name '*.jar' |
while read jar; do
  git rm "$jar" || rm "$jar"
done

# remove garbage files
rm -rf tmp/ logs/ JD2.lock JDownloader.pid cfg/downloadList*.zip cfg/linkcollector*.zip

git add .

# add new top-level dirs
find . -name '*.jar.extracted' -not -path '*.jar.extracted/*' |
while read dir; do
  git add "$dir"
done

echo "committing update from version $v1 to $v2"

m="$(
  echo "up to v$v2 rev$rev2"
  # we could store the checksums of the original jar files
  # but these are mostly useless
  # because we cannot reproduce the original jar archive from unpacked java files
  # https://old.reddit.com/r/AskReverseEngineering/comments/1ahd36y/reverse_engineer_the_exact_lowlevel_compression/
  #echo
  #echo '$ sha256sum *.jar'
  #sha256sum *.jar
)"

buildDate="$(cat build.json | jq -r .buildDate)"
if [ -z "$buildDate" ]; then buildDate="$(date -R)"; fi

git commit -m "$m" --date="$buildDate"

git tag "v$v2"
