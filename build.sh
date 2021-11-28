npm install node-os-utils
git clone https://github.com/billchurch/webssh2.git
pip install psutil matplotlib pyinstaller
python3 -m PyInstaller -F $(pwd)/script/cpuusage.py
python3 -m PyInstaller -F $(pwd)/script/ramusage.py
python3 -m PyInstaller -F $(pwd)/script/net.py
npm install -g pkg
cd $(pwd)/script/
npm install node-os-utils
pkg log.js
pkg sysinfo.js
cp log-linux $(pwd)/..
cp sysinfo-linux $(pwd)/..
cd ..
cd webssh2
cd app
npm install --production
cd ..
cd ..
cp dist/cpuusage $(pwd)/webssh2/app
cp dist/ramusage $(pwd)/webssh2/app
cp dist/net $(pwd)/webssh2/app


