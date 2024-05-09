---
title:       "Xubuntu 14.10 released!"
date:        2014-10-23 12:39:54
release:     "14.10"
serie:       
category:    announcements
author:      flocculant
author_nick: flocculant
---

\[caption id="attachment\_2787" align="alignright" width="288"\][![Xubuntu 14.10 Utopic Unicorn](/wp-content/uploads/2014/10/unicorn-artwork.png)](/wp-content/uploads/2014/10/unicorn-artwork.png) Xubuntu 14.10 Utopic Unicorn\[/caption\]

The Xubuntu team is pleased to announce the immediate release of Xubuntu 14.10!

The **release is available for download** by torrents and direct downloads from <http://xubuntu.org/getxubuntu/>

As the main server will be very busy in the first days after the release, we recommend using the Torrents wherever possible.

**For support** with the release, navigate to [Help &amp; Support](http://xubuntu.org/help/ "Help & Support") for a complete list of methods to get help.

Highlights and Known Issues
---------------------------

To celebrate the 14.10 codename "Utopic Unicorn" and to demonstrate the easy customisability of Xubuntu, highlight colors have been turned pink for this release. You can easily revert this change by using the theme configuration application (gtk-theme-config) under the Settings Manager; simply turn Custom Highlight Colors "Off" and click "Apply". Of course, if you wish, you can change the highlight color to something you like better than the default blue!

Starting with Xubuntu 14.10, you should use pkexec instead of gksudo for running graphical applications with root access from the terminal for improved security. The Xubuntu team has prepared and shipped the necessary pkexec policy files for all default applications in the Xubuntu installation that we deemed necessary.

Please note that changes in the default configuration affect all users who haven't changed the default configuration. Read more about the default configuration changes in the [release notes](https://wiki.ubuntu.com/UtopicUnicorn/ReleaseNotes/Xubuntu#Changes_to_Xubuntu_Default_Settings).

#### Highlights

- New Xfce Power Manager plugin is added to the panel *Note: Upgraders from Trusty will not see the new xfce4-power-manager panel plugin by default, but instead stick to indicator-power. This can easily be resolved by uninstalling indicator-power and adding the "Power Manager Plugin" to the panel.*
- Items in the newly themed alt-tab dialog can now be clicked with the mouse

#### Known Issues

- com32r error on boot with usb ([1325801](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1325801))
- Virtualbox can start with a black screen ([1378423](https://bugs.launchpad.net/ubuntu/+source/xorg/+bug/1378423))
- Black background to Try/Install dialogue ([1365815](https://bugs.launchpad.net/ubuntu/+source/xubuntu-default-settings/+bug/1365815))
- Qt apps don't use the Gtk+ style by default, workaround is to install qt4-qtconfig and set the style there

#### Workarounds for issue in virtual machines

- Move to TTY1 (with VirtualBox, RightCtrl+F1), then back to TTY7 (with VirtualBox, RightCtrl+F7) and proceed

For a more complete changelog between Xubuntu 14.04 and 14.10, please refer to the [release notes](https://wiki.ubuntu.com/UtopicUnicorn/ReleaseNotes/Xubuntu).
