git clone https://github.com/billchurch/webssh2.git
cd webssh2
cd app
npm install --production
cd ..
cd ..
cd script
pyinstaller -F cpuusage.py
pyinstaller -F ramusage.py
 
