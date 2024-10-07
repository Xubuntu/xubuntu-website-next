---
title:       "Booting the Xubuntu USB image from a CD"
date:        2013-05-03 09:55:28
slug:        booting-the-xubuntu-usb-image-from-a-cd
release:     ""
serie:       faq
category:    articles
author:      Unit 193
author_nick: unit193
---

Due to the size of the Xubuntu ISOs starting from Raring (13.04), they no longer fit on a standard CD. This guide will help you if your BIOS doesn't support booting off of USB drives by showing you how to use [Plop](http://www.plop.at/) boot manager.

### Getting Plop

You can download the most recent version [here](http://www.plop.at/en/bootmanager/download.html) (plpbt-\*).

### Executing Plop

The burning process is similar as documented on the [Ubuntu wiki](https://help.ubuntu.com/community/BurningIsoHowto).

Main contents of the downloaded archive should be:

> ```
> 1README.TXT  Instructional Readme.
> plpbt.bin    Boot manager binary
> plpbt.img    Boot manager floppy disk image
> plpbt.iso    Boot manager CD ISO
> plpbtrom.bin Boot manager ROM file for the BIOS
>
> doc/          Documentation
> experimental/ Experimental versions
> pcmcia/       PCMCIA version of the boot manager
> Linux/        Linux related programs
> Windows/      Windows related programs
> ```

You will then have to create your bootable USB device (flash drive) as documented in the [installation section](https://help.ubuntu.com/community/Installation/FromUSBStick) of the Ubuntu wiki.

After you create both the bootable USB device and Plop CD, place the CD in the CD drive, and power off the computer. After you power off, place the USB device in the computer and turn the computer on, you may need to go into the BIOS settings and configure it to boot from CD first.![]({{ site.baseurl }}/assets/articles/2013/plop-menu.png)

After you boot into Plop from the CD, you should see a “USB” item on the menu that will appear (as pictured to the right), select it with the Down arrow key, then hit Enter to boot.

If everything has gone as expected, Xubuntu live desktop should boot from USB. Enjoy!
