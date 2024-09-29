#!/usr/bin/env bash

# repack jar files extracted by extract-jars.sh

set -e
set -u

# check dependencies
command -v find
command -v jar

# walk down: get the maximum depth
for ((level=0;;level++)); do
  echo "down level: $level"
  path_glob='*'
  for i in $(seq $level); do path_glob+='.jar.extracted/*'; done
  not_path_glob="$path_glob.jar.extracted/*"
  res="$(find . -name '*.jar.extracted' -path "$path_glob" -not -path "$not_path_glob" | head -n1)"
  if [ -z "$res" ]; then
    # no files on this level
    : $((level--))
    break
  fi
done

echo "max level: $level"

# walk up
for ((;level>=0;level--)); do
  echo "up level: $level"
  path_glob='*'
  for i in $(seq $level); do path_glob+='.jar.extracted/*'; done
  not_path_glob="$path_glob.jar.extracted/*"
  find . -name '*.jar.extracted' -path "$path_glob" -not -path "$not_path_glob" |
  while read dir; do
    jar="${dir%.extracted}"
    echo "creating $jar"
    # delete existing jar file
    if [ -e "$jar" ]; then rm "$jar"; fi
    a=(jar -c -f "$jar")
    if [ -e "$dir/META-INF/MANIFEST.MF" ]; then
      a+=(-m "$dir/META-INF/MANIFEST.MF")
    fi
    a+=(-C "$dir" .)
    "${a[@]}"
  done
done
