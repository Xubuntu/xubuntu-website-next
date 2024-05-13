---
title:       "Xubuntu 14.10 Beta 2 is released!"
date:        2014-09-26 03:44:40
slug:        xubuntu-14-10-beta-2-is-released
release:     "14.10"
serie:       
category:    
author:      flocculant
author_nick: flocculant
---

The Xubuntu team is pleased to announce the immediate release of Xubuntu 14.10 Beta 2. This is the final beta towards the release in October. Before this beta we have landed various of enhancements and some new features. Now it's time to start polishing the last edges and improve the stability. **The Beta 2 release is available for download by torrents and direct downloads from**<http://cdimage.ubuntu.com/xubuntu/releases/utopic/beta-2/>

Highlights and known issues
---------------------------

To celebrate the 14.10 codename "Utopic Unicorn" and to demonstrate the easy customisability of Xubuntu, highlight colors have been turned pink for this release. You can easily revert this change by using the theme configuration application (gtk-theme-config) under the Settings Manager; simply turn Custom Highlight Colors "Off" and click "Apply". Of course, if you wish, you can change the highlight color to something you like better than the default blue!

### Known Issues

- com32r error on boot with usb ([1325801](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1325801))
- Installation into some virtual machines fails to boot ([1371651](https://bugs.launchpad.net/ubuntu/+source/lightdm/+bug/1371651))
- Failure to configure wifi in live-session ([1351590](https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/1351590))
- Black background to Try/Install dialogue ([1365815](https://bugs.launchpad.net/ubuntu/+source/xubuntu-default-settings/+bug/1365815))

### Workarounds for issues in virtual machines

- Move to TTY1 (with VirtualBox, Right-Ctrl+F1), login and then start lightdm with "sudo service lightdm start"
- Some people have been able to boot successfully after editing grub and removing the "quiet" and "splash" options
- Install appears to start OK when systemd is enabled; append "init=/lib/systemd/systemd" to the "linux" line in grub
