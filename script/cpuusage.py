import psutil
import matplotlib.pyplot as plt
import time

timeusage=[]
n=0
usage=[]
x=0
t=0
ram=[]
while n==0:
    usage.append(psutil.cpu_percent(1))
    timeusage.append(t)
    x=x+1
    t=t+1
    if t>20:
        del timeusage[0]
        del usage[0]
    plt.plot(timeusage,usage)
    plt.ylabel('CPU usage')
    plt.xlabel('Time')
    plt.savefig('graph.png')
    time.sleep(3)


