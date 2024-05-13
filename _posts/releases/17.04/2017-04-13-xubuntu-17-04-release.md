---
title:       "Xubuntu 17.04 released!"
date:        2017-04-13 16:15:17
slug:        xubuntu-17-04-release
release:     "17.04"
serie:       
category:    announcements
author:      Pasi Lallinaho
author_nick: knome
---

The Xubuntu team is happy to announce the immediate release of Xubuntu 17.04.

Xubuntu 17.04 is a regular release and will be supported for 9 months, until January 2018. If you need a stable environment with longer support time, we recommend that you use [Xubuntu 16.04 LTS](https://xubuntu.org/release/16-04/) instead.

The **final release images** are available as torrents and direct downloads from <http://xubuntu.org/getxubuntu/>

As the main server might be busy in the first few days after the release, we recommend using the torrents if possible.

We'd like to thank everybody who contributed to this release of Xubuntu!

Support
-------

**For support** with the release, navigate to [Help &amp; Support](https://xubuntu.org/help/) for a complete list of methods to get help.

Highlights, Notes and Known Issues
----------------------------------

### Highlights

Several Xfce panel plugins and applications have been ported to GTK+ 3, paving the way for improved theming and further development. Core Xfce libraries exo and libxfce4ui have also been updated with full GTK+ 3 support, the latter adding support for Glade development in Xubuntu with the installation of `libxfce4ui-glade`. The Greybird and Numix themes have also been refreshed with improved support for the toolkit.

Camera functionality has been restored in Mugshot, Parole introduced a new mini mode and improvements for network streams, and a number of welcome fixes have made their way into Thunar and Ristretto. *Simon Tatham's Portable Puzzle Collection* ([sgt-puzzles](https://launchpad.net/ubuntu/+source/sgt-puzzles)), an addicting collection of logic games, has been included along with the new *SGT Puzzles Collection* ([sgt-launcher](https://launchpad.net/ubuntu/+source/sgt-launcher)).

### Notes

For new installs a swap file will be used instead of a swap partition. Upgrades from earlier versions are not affected.

### Known Issues

- System encryption password is set before setting the keyboard layout ([bug 1047384](https://launchpad.net/bugs/1047384)), giving users errors about the wrong password when decrypting in some cases. The **workaround** for this is to start the installation with the correct keyboard layout; **press F3** to set your keyboard layout *before* booting either installation option.
- While recent patches for Thunar fixed problems for many, it still has some unresolved issues.
- Parole has some issues as well and can crash in certain situations.

For more information on affecting bugs, bug fixes and a list of new package versions, please refer to the [Release Notes](http://wiki.xubuntu.org/releases/17.04/release-notes "Xubuntu 16.04 Release Notes").
