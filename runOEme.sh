#!/bin/sh
clear
currentPath=${PWD}
materialPath="/Volumes/Data/Projects/material2"
TXT_GREEN='\033[1;32m'
TXT_NC='\033[0m' # No Color
echo "${TXT_GREEN}"
clear
read -p "Material 2 repository path ($materialPath):" input
materialPath=${input:-$materialPath}
echo ==============================
echo "==> 1. entering material repository and pull the latest ($materialPath) ${TXT_NC}"
cd $materialPath
git reset
git fetch origin
git checkout .
#git clean -fdx
git pull -f
#npm install
#npm upgrade
echo "${TXT_GREEN}==> 2. apply theme patch file from ${TXT_NC}./src/app/style/material-theme.template.txt"
cp -f $currentPath/src/app/style/material-theme.template.txt $materialPath/src/core/style/_default-theme.scss
echo "${TXT_GREEN}==> 3. building angular2/material${TXT_NC}"
sh scripts/release/stage-release.sh
echo "${TXT_GREEN}==> 4. entering original working directory${TXT_NC}"
cd $currentPath
echo "${TXT_GREEN}==> 5. copying files to node_modules${TXT_NC}"
echo "----SKIPPED----"
cp -rf $materialPath/deploy/* node_modules/@angular2-material/.
echo "${TXT_GREEN}==> 6. copying files to dist${TXT_NC}"
cp -rf $materialPath/deploy/* dist/vendor/@angular2-material/.
echo "${TXT_GREEN}==> 7. Hooray!${TXT_NC}"
echo
ng build
npm start
