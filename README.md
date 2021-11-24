# Server-Controller

Server controller is an application written in JS and Python for backend and HTML,CSS and JS for fronted, the purpose is monitor a PC or VPS or NAS... and view CPU usage,Ram, Log and many more. The target of this project is be an alternative to other console and add maybe some function 


## Build

Install nodejs, npm and Python3 first, then install python requirements and use the build.sh script file to build all project

## Run

Download or compile and then run the script run.sh then load folder in server root of webserver(apache,nginx...) for index.html(IMPORTANT: KEEP DIRECTORY STRUCTURE)

## Bugs and problem
The project is currently in alpha/beta, some function missing, please report all bugs in issues section.
Know problem:

System info page is terrible(fix soon), too many port used, in future i will include an webserver so will no longer need Apach,Nginx... and some function missing(file manager, net graph...)


## Contributing and usage of this project

If you want to contribute you're welcome, do the pull request and i check it. If you want to use this project mention me please.

## Thank to
Billchurch for the fantastic implementetion of ssh via web
**[webssh2](https://github.com/billchurch/webssh2)**

SunilWang for node-os-utils library for system info part
**[node-os-utils](https://github.com/SunilWang/node-os-utils)**

Matplotlib python library used to plotting data of CPU and RAM usage

## License

[MIT](https://choosealicense.com/licenses/mit/)


