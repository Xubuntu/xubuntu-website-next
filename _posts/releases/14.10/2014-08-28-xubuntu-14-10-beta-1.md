---
title:       "Xubuntu 14.10 Beta 1 is released!"
date:        2014-08-28 21:16:53
slug:        xubuntu-14-10-beta-1
release:     "14.10"
serie:       
category:    
author:      Pasi Lallinaho
author_nick: knome
---

The Xubuntu team is pleased to announce the immediate release of Xubuntu 14.10 Beta 1. This is the first beta towards the final release in October. Before this beta we have landed various of enhancements and some new features. Now it's time to start polishing the last edges and improve the stability.

The first beta release also marks the end of the period to land new features in the form of Ubuntu Feature Freeze. This means any new updates to packages should be bug fixes only, the Xubuntu team is committed to fixing as many of the bugs as possible before the final release.

**The beta 1 release is available for download by torrents and direct downloads from**<http://cdimage.ubuntu.com/xubuntu/releases/utopic/beta-1/>

Highlights and known issues
---------------------------

### New features and enhancements

- [Inxi](http://xubuntu.org/news/inxi/), a tool to gather system information, is now included
- To allow users to use pkexec for selected applications instead of gksu(do), appropriate profiles are now included for Thunar and Mousepad
- The display dialog has been updated, multiple dispays can now be arranged by drag and drop
- The power manager can now control the keyboard-backlight and features a new panel plugin, which shows the battery's status, other connected devices with batteries and controls the display's backlight brightness
- The themes now support Gtk3.12
- The alt-tab dialog can now be clicked with the mouse to select a window
- Xubuntu minimal install available - information on installation and testing will follow shortly.

### Bug fixes

- Setting-related menu items earlier available only under Settings manager are now shown and searchable in Whiskermenu ([1310264](https://bugs.launchpad.net/ubuntu/+source/xubuntu-default-settings/+bug/1310264))
- Presentation mode in Xfce4 power manager is now working ([1193716](https://bugs.launchpad.net/ubuntu/+source/xfce4-power-manager/+bug/1193716))
- apt-offline is now functional, previously "Something is wrong with the apt system" ([1357217)](https://bugs.launchpad.net/ubuntu/+source/apt-offline/+bug/1357217)

### Known Issues

- Video corruption when booting a virtual livesession ([1357702](https://bugs.launchpad.net/ubuntu/+source/syslinux/+bug/1357702))
- Failure to configure wifi in live-session ([1351590](https://bugs.launchpad.net/ubuntu/+source/network-manager/+bug/1351590))
- com32r error on boot with usb ([1325801](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1325801))

### New application versions in the Xubuntu packageset

- Catfish 1.2.1
- Xfwm4 4.11.2
- Updates to xfdesktop4 (4.11.7), xfce4-panel (4.11.1), login screen (lightdm-gtk-greeter 1.9.0)
- xfce4-appfinder (4.11.0)
- xfce4-notifyd (0.2.4-3)
- xfce4-settings (4.11.3)
- xfce4-power-manager (1.3.2)
- xfce4-whiskermenu-plugin (1.4.0)
- Light-locker-settings (1.4.0)
- Menulibre (2.0.5)
- Mugshot (0.2.4)

### Other changes

XChat is removed from the default installation; we recommend trying the Pidgin IRC feature if you need to connect sporadically. Otherwise, if you prefer XChat, it's still available for installation in the repositories.
