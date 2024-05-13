---
title:       "Xubuntu Oneiric Ocelot beta1 released"
date:        2011-09-01 13:57:36
slug:        oneiricbeta1
release:     "11.10"
serie:       
category:    
author:      Elizabeth K. Joseph
author_nick: pleia2
---

The first beta release of Xubuntu 11.10 "Oneiric Ocelot" has arrived. The developers are working hard to make Xubuntu 11.10 one of the best Linux distributions yet. They are striving to ensure that everything will work for all users, and instead of many changes, are working to ensure the release is very stable and secure.

This is still a testing build designed for developers and is not suggested for anyone looking for a stable system. Please do not install Oneiric Ocelot on your production system.

*Changes (since Alpha 1 - Xubuntu specific):*

- Xubuntu has replaced gdm with lightdm as the application that manages logins. Automatic logins will not work with lightdm at the present time. We are sure lightdm is going to provide a much better experience for the users than gdm.
- Pastebinit is now included in Xubuntu intallations by default. If you need to use http://paste.ubuntu.com/, you can use pastebinit to paste directly without copying and pasting the data.
- The developers have replaced mousepad with leafpad as the text editor. leafpad now includes the ability to print, and is better maintained than mousepad.
- The onscreen keyboard, Onboard, is now included in the default Xubuntu menus, under Accessories. For those who require an onscreen keyboard, this will be much easier to access using only a mouse or touchpad.
- Astute users will observe a new plymouth splash screen in use. Unfortunately, we have found that occasionally, when using the desktop cd to install, the message "hit any key to continue" will not appear. Should you get a black screen with text and the sliding throbber, when the throbber stops moving and the cd ejects, remove the cd and hit enter on the keyboard to continue.
- Bluetooth does not work at the present time in Xubuntu. Please see the bug below. A workaround is to install 'blueman' to manage bluetooth.
- The Xubuntu developers and contributors had a discussion about replacing the Gimp with an application to assist with digital photos. As a result, gThumb has been added to the default installation. This application is designed to help with image transformations and viewing.
- (Users must select a session when logging in the first time. If no session is selected, the user will see the Ubuntu wallpaper, and nothing else. In this case, go to a tty using Ctrl+Alt+F2, login, and type: sudo service lightdm restart Now the user can login again, and select the session.)

Visit [the download page](http://cdimage.ubuntu.com/xubuntu/releases/11.10/beta-1/) to give it a try. Be sure to report your testing results to help the Xubuntu developers - xubuntu-devel@lists.ubuntu.com. Bugs can be [reported in Launchpad](https://launchpad.net/ubuntu/+filebug/). If you are looking for see [support](/help)), please see the #ubuntu+1 or #xubuntu IRC channels on irc.freenode.net. Before testing this release, make sure to review the [release notes](https://wiki.ubuntu.com/OneiricOcelot/TechnicalOverview).
