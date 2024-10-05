# jdownloader-installed/scripts

## update

update the `master` branch

```sh
git clone --depth=1 https://github.com/milahu/jdownloader-installed
cd jdownloader-installed
git fetch --depth=1 origin scripts:scripts
git worktree add ../jdownloader-installed-scripts scripts
../jdownloader-installed-scripts/update.sh
git push
```
