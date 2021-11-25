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
NETWORK_INTERFACE = 'enp0s3'

netio = psutil.net_io_counters(pernic=True)
net_usage = netio[NETWORK_INTERFACE].bytes_sent + netio[NETWORK_INTERFACE].bytes_recv

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
        plt.title("Net Usage")
        plt.plot(timeusage,usage)
        plt.ylabel('Byte')
        plt.xlabel('Time')
        plt.savefig('net.png')
        time.sleep(3)
    else:
        plt.title("Net Usage")
        plt.plot(timeusage,usage)
        plt.ylabel('Byte')
        plt.xlabel('Time')
        plt.savefig('net.png')
        time.sleep(3)


