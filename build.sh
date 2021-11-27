git clone https://github.com/billchurch/webssh2.git
pip install psutil matplotlib pyinstaller
python3 -m PyInstaller -F $(pwd)/script/cpuusage.py
python3 -m PyInstaller -F $(pwd)/script/ramusage.py
curl -q0- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install 16.13.0
npm install -g pkg
cd $(pwd)/script/
npm install node-os-utils
pkg log.js
pkg sysinfo.js
cd ..
cd webssh2
cd app
npm install --production
cd ..
cd ..
cp dist/cpuusage $(pwd)/webssh2/app
cp dist/ramusage $(pwd)/webssh2/app
cp log-linux $(pwd)/webssh2/app
cp sysinfo-linux $(pwd)/webssh2/app


