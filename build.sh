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
cp $(pwd)/script/dist/cpuusage $(pwd)/webssh2/app
cp $(pwd)/script/dist/ramusage $(pwd)/webssh2/app
cp $(pwd)/script/log.js $(pwd)/webssh2/app
cp $(pwd)/script/sysinfo.js $(pwd)/webssh2/app


