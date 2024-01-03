
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/1696817236000hdj7ix.png)
![gh](https://cdn.jsdelivr.net/gh/Dean-chen-c/obsidian@main/main/images/16968172740001of90x.png)

```xml
<!--

WARNING: THIS IS AN AUTO-GENERATED FILE. CHANGES TO IT ARE LIKELY TO BE

OVERWRITTEN AND LOST. Changes to this xml configuration should be made using:

virsh edit node1

or other application using the libvirt API.

-->

  

<!--

以下两项可有可无，所以在此注释。

-->

  

<!--

<seclabel>......</seclabel> 驱动安全标签，可删除

<resource>......</resource> 资源设置，可删除

-->

  

<domain type='kvm'>

<name>node1</name> <!--虚拟机名称-->

<uuid>8908d03b-0329-4105-851f-c93fd091e9e9</uuid> <!--个性化设置，也可以自行修改，做虚拟机模板时可以删除-->

<memory unit='KiB'>2097152</memory> <!--虚拟机能使用的最大内存，此处为2G，即：2*1024*1024-->

<currentMemory unit='KiB'>2097152</currentMemory> <!--在虚拟机中用 free -m 命令可以看见的内存大小，一般与上面的最大内存值设为一样-->

<vcpu placement='static'>2</vcpu> <!--CPU的数量-->

<os> <!--系统引导设备配置，无需手动修改-->

<type arch='x86_64' machine='pc-i440fx-rhel7.0.0'>hvm</type>

<boot dev='hd'/>

</os>

<features> <!--高级电源管理，无需手动修改-->

<acpi/>

<apic/>

</features>

<cpu mode='custom' match='exact' check='partial'> <!--CUP配置，cpu mode可以写成'host-passthrough',意思是使用真机的CPU-->

<model fallback='allow'>Westmere</model>

</cpu>

<clock offset='utc'> <!--时钟设置，可以设置为localtime-->

<timer name='rtc' tickpolicy='catchup'/>

<timer name='pit' tickpolicy='delay'/>

<timer name='hpet' present='no'/>

</clock>

<on_poweroff>destroy</on_poweroff> <!--虚拟机关机命令-->

<on_reboot>restart</on_reboot> <!--虚拟机重启命令-->

<on_crash>destroy</on_crash> <!--虚拟机强制重启命令-->

<pm> <!--内存及硬盘休眠设置，可删除-->

<suspend-to-mem enabled='no'/>

<suspend-to-disk enabled='no'/>

</pm>

<devices> <!--系统仿真设备，主板驱动类-->

<emulator>/usr/libexec/qemu-kvm</emulator> <!--仿真设备使用哪个程序来仿真，这里使用qemu-kvm来仿真-->

<disk type='file' device='disk'> <!--硬盘配置，需要手动修改，可以通过复制本段来创建新的磁盘-->

<driver name='qemu' type='qcow2'/> <!--磁盘驱动类型-->

<source file='/var/lib/libvirt/images/node1.img'/> <!--磁盘路径设置-->

<target dev='vda' bus='virtio'/> <!--磁盘盘符设置-->

<address type='pci' domain='0x0000' bus='0x00' slot='0x07' function='0x0'/> <!--总线地址，下同，可删除-->

</disk>

<controller type='usb' index='0' model='ich9-ehci1'> <!--USB相关配置，可删除，下同-->

<address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x7'/>

</controller>

<controller type='usb' index='0' model='ich9-uhci1'>

<master startport='0'/>

<address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x0' multifunction='on'/>

</controller>

<controller type='usb' index='0' model='ich9-uhci2'>

<master startport='2'/>

<address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x1'/>

</controller>

<controller type='usb' index='0' model='ich9-uhci3'>

<master startport='4'/>

<address type='pci' domain='0x0000' bus='0x00' slot='0x05' function='0x2'/>

</controller>

<controller type='pci' index='0' model='pci-root'/> <!--PCI设备配置，可删除-->

<controller type='virtio-serial' index='0'>

<address type='pci' domain='0x0000' bus='0x00' slot='0x06' function='0x0'/>

</controller>

<interface type='network'> <!--网卡设置，可复制本段来添加新的网卡-->

<mac address='52:54:00:74:1c:9e'/> <!--网卡MAC地址，可删除-->

<source network='default'/> <!--指定网卡连接的交换机-->

<model type='virtio'/>

<address type='pci' domain='0x0000' bus='0x00' slot='0x03' function='0x0'/> <!--总线地址，可删除-->

</interface>

<serial type='pty'> <!--串口终端，需要保留，下同-->

<target type='isa-serial' port='0'>

<model name='isa-serial'/>

</target>

</serial>

<console type='pty'>

<target type='serial' port='0'/>

</console>

<channel type='unix'> <!--虚拟机通讯控制接口-->

<target type='virtio' name='org.qemu.guest_agent.0'/>

<address type='virtio-serial' controller='0' bus='0' port='1'/>

</channel>

<channel type='spicevmc'> <!--图形图像相关配置，可以删除-->

<target type='virtio' name='com.redhat.spice.0'/>

<address type='virtio-serial' controller='0' bus='0' port='2'/> <!--串口设备，需要保留串口终端-->

</channel>

<input type='tablet' bus='usb'> <!--数位板，如笔记本电脑的触摸板等，可删除-->

<address type='usb' bus='0' port='1'/>

</input>

<input type='mouse' bus='ps2'/> <!--鼠标-->

<input type='keyboard' bus='ps2'/> <!--键盘-->

<graphics type='spice' autoport='yes'> <!--图形图像显卡相关配置，可以删除-->

<listen type='address'/>

<image compression='off'/>

</graphics>

<sound model='ich6'> <!--声卡相关设置，可以删除-->

<address type='pci' domain='0x0000' bus='0x00' slot='0x04' function='0x0'/>

</sound>

<video> <!--图形图像显卡相关配置，可以删除-->

<model type='qxl' ram='65536' vram='65536' vgamem='16384' heads='1' primary='yes'/>

<address type='pci' domain='0x0000' bus='0x00' slot='0x02' function='0x0'/>

</video>

<redirdev bus='usb' type='spicevmc'> <!--设备重定向，可以删除，下同-->

<address type='usb' bus='0' port='2'/>

</redirdev>

<redirdev bus='usb' type='spicevmc'>

<address type='usb' bus='0' port='3'/>

</redirdev>

<memballoon model='virtio'> <!--内存气泡，可以动态调整内存-->

<address type='pci' domain='0x0000' bus='0x00' slot='0x08' function='0x0'/>

</memballoon>

</devices>

</domain>
```