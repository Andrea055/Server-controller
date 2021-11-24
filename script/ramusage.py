import psutil
import matplotlib.pyplot as plt
import time
timeusage=[]
n=0
t=0
usage=[]
x=0
p=0
ram=[]
while n==0:
    usage.append(psutil.virtual_memory()[2])
    timeusage.append(t)
    x=x+1
    t=t+1
    p=p+1
    if p>150:
        p=0
        usage.clear()
        timeusage.clear()
        plt.clf()
        plt.title("RAM Usage")
        plt.plot(timeusage,usage)
        plt.ylabel('RAM usage%')
        plt.xlabel('Time')
        plt.savefig('ram.png')
        time.sleep(3)
    else:
        plt.title("RAM Usage")
        plt.plot(timeusage,usage)
        plt.ylabel('RAM usage%')
        plt.xlabel('Time')
        plt.savefig('ram.png')
        time.sleep(3)


