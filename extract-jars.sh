#!/bin/sh

# extract jar files created by update.sh

# remove old dirs
echo "removing old .jar.extracted dirs"
find . -name '*.jar.extracted' |
while read dir; do
  git rm -rf "$dir" || rm -rf "$dir"
done

# recursion loop: also extract nested jar files
while true; do
  _done=true
  while read jar; do
    dir="$jar.extracted"
    if [ -e "$dir" ]; then continue; fi
    _done=false
    echo "creating $dir"
    mkdir -p "$dir"
    # extract jar file
    unzip -q "$jar" -d "$dir"
  done < <(find . -name '*.jar')
  if $_done; then break; fi
done
