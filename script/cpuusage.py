import psutil
import matplotlib.pyplot as plt
import time

timeusage=[]
n=0
usage=[]
x=0
t=0
p=0
ram=[]
while n==0:
    usage.append(psutil.cpu_percent(1))
    timeusage.append(t)
    x=x+1
    t=t+1
    p=p+1
    if p>150:
        usage.clear()
        timeusage.clear()
        p=0
        plt.clf()
        plt.title("Cpu Usage")
        plt.plot(timeusage,usage)
        plt.ylabel('CPU usage')
        plt.xlabel('Time')
        plt.savefig('graph.png')
        time.sleep(3)
    else:
        plt.title("Cpu Usage")
        plt.plot(timeusage,usage)
        plt.ylabel('CPU usage')
        plt.xlabel('Time')
        plt.savefig('graph.png')
        time.sleep(3)


