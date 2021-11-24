import psutil
import matplotlib.pyplot as plt
import time
timeusage=[]
n=0
t=0
usage=[]
x=0
ram=[]
while n==0:
    usage.append(psutil.virtual_memory()[2])
    timeusage.append(t)
    x=x+1
    t=t+1
    if t>20:
        timeusage.pop(1)
    plt.plot(timeusage,usage)
    plt.ylabel('Ram usage')
    plt.xlabel('Time')
    plt.savefig('ram.png')
    time.sleep(3)


