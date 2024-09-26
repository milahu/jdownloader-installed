#!/usr/bin/env bash

# update jdownloader installation

# license: MIT License

set -eu
#set -x # debug

dst="$PWD"

jar="$dst/JDownloader.jar"

if ! [ -e "$jar" ]; then
  echo "error: no such file: $jar"
  exit 1
fi

remove_old=true
remove_old=false

if [ -n "$(git status --porcelain)" ]; then
  echo "error: git repo is dirty. todo:"
  echo "  git reset --hard master"
  exit 1
fi

rev1=0
if [ -e build.json ]; then
  rev1=$(cat build.json | jq .JDownloaderRevision)
fi

if $remove_old; then

  ln -f JDownloader.jar JDownloader.jar.bak

  git rm -rf . || true

  rm -rf JDownloader.jar Core.jar logs/ cfg/ JD2.lock JDownloader.pid update/ translations/ themes/ tmp/ licenses/ libs/ license_german.txt jd/ build.json extensions/ license.txt

  mv JDownloader.jar.bak JDownloader.jar

fi

jre=$(nix-build --no-out-link '<nixpkgs>' -A jre)

bubblewrap=$(nix-build --no-out-link '<nixpkgs>' -A bubblewrap)

a=($bubblewrap/bin/bwrap)

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

a+=($jre/bin/java)

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
    sleep 1
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
  rm $hardcopy_path
done

rm -rf jd/ tmp/ logs/ JD2.lock JDownloader.pid cfg/downloadList*.zip cfg/linkcollector*.zip

git add .

rev2=$(cat build.json | jq .JDownloaderRevision)

if [ "$rev1" = "$rev2" ]; then
  echo "already up to date at rev $rev1"
else

  echo "committing update from rev $rev1 to $rev2"

  m="$(
    echo "up to rev$rev2"
    echo
    echo '$ sha256sum *.jar'
    sha256sum *.jar
  )"

  buildDate="$(cat build.json | jq -r .buildDate)"
  if [ -z "$buildDate" ]; then buildDate="$(date -R)"; fi

  git commit -m "$m" --date="$buildDate"

fi
