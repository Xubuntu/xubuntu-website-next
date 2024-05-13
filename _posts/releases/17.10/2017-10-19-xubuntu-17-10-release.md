---
title:       "Xubuntu 17.10 released!"
date:        2017-10-19 16:54:41
slug:        xubuntu-17-10-release
release:     "17.10"
serie:       
category:    
author:      Pasi Lallinaho
author_nick: knome
---

The Xubuntu team is happy to announce the immediate release of Xubuntu 17.10.

Xubuntu 17.10 is a regular release and will be supported for 9 months, until July 2018. If you need a stable environment with longer support time, we recommend that you use [Xubuntu 16.04 LTS](https://xubuntu.org/release/16-04/) instead, or wait for 18.04, the next LTS version to be released in April 2018.

The **final release images** are available as torrents and direct downloads from [xubuntu.org/getxubuntu/](https://xubuntu.org/getxubuntu/)

As the main server might be busy in the first few days after the release, we recommend using the torrents if possible.

We’d like to thank everybody who contributed to this release of Xubuntu!

Support
-------

**For support** with the release, navigate to [Help &amp; Support](https://xubuntu.org/help/) for a complete list of methods to get help.

Highlights and Known Issues
---------------------------

### Highlights

- The GNOME Font Viewer is now included by default. This application simplifies viewing and installing fonts.
- Client side decorations (CSD) now consume much less space with the Greybird GTK+ theme.
- New device, mimetype, and monochrome panel icons have been included with the elementary-xfce icon theme.

We usually link directly to the Ubuntu release notes, but there are several significant improvements that affect all flavors and our users:

- **Accelerated video playback with Intel hardware** should now work more reliably out of the box. The changes might also bring some performance improvements for Parole and Chromium users. [More information here](https://wiki.ubuntu.com/IntelQuickSyncVideo).
- **Bluetooth and USB audio devices** should now work better by default due to changes in BlueZ and PulseAudio.
- **Driverless printing** has been added to Ubuntu. This provides support for most modern printers: IPP Everywhere, Apple AirPrint, Mopria, PCLm, and Wifi Direct as supported. Other printers can still be added from the Printers dialog.

### Known Issues

System encryption password set before setting keyboard locale ([1047384](https://launchpad.net/bugs/1047384)). Workaround: Start the installation with the correct keymap. [Use F3](https://help.ubuntu.com/community/BootOptions#Changing_the_CD.27s_Default_Boot_Options) to set your keymap before booting to Try or Install Xubuntu from that menu.

Currently at times the panel can show 2 network icons, this appears to be a race condition which we have not been able to rectify in time for release. While this is an appearance issue only as far as we know, you can if you wish restart networking, the affected plugin or the panel. This fixes the issue in your running session but does not prevent the issue from re-appearing.

For more information on affecting bugs, bug fixes and a list of new package versions, please refer to the [Release Notes](http://wiki.xubuntu.org/releases/17.10/release-notes "Xubuntu 16.04 Release Notes").
