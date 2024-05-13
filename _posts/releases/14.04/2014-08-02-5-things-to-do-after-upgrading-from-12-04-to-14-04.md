---
title:       "5 Things to Do After Upgrading from 12.04 to 14.04"
date:        2014-08-02 13:43:10
slug:        5-things-to-do-after-upgrading-from-12-04-to-14-04
release:     "14.04"
serie:       
category:    articles
author:      David Pires
author_nick: slickymaster
---

The first point release of 14.04 just came out a few days ago and many LTS users waited for this to upgrade from 12.04 – in fact `do-release-upgrade` only offers the LTS to LTS upgrade after the first point release for stability reasons. So we thought this would be the perfect time to do a quick writeup of a few things to do after upgrading your system. User configuration isn't updated and installed applications aren't removed when upgrading and that's a good thing: Upgraders will not have to restore their customizations and their system will mostly look as before. However, for those of you who want to get closer to the default setup of Xubuntu 14.04 Trusty Tahr, here go five easy steps you can quickly follow to that end.

1. ![screenlocker](/assets/articles/2014/preferences-desktop-screensaver.png)**Light Locker** has replaced XScreenSaver. Light Locker uses LightDM to lock the screen, merging the functionality of the login screen and the lock screen. Having both applications installed at the same time may produce bugs or regressions, so it is recommended to remove XScreenSaver. To remove it just run the following command in a terminal window: `sudo apt-get remove xscreensaver`If you would rather see a screensaver instead of an improved screen locker, you can alternatively remove Light Locker and keep XScreenSaver.
2. ![menulibre](/assets/articles/2014/menulibre.png)**MenuLibre**, an advanced menu editor that provides modern features in a clean, easy-to-use interface, with full Xfce support, replaces Alacarte for menu editing. To remove Alacarte open a terminal window and run the following command: `sudo apt-get remove alacarte`
3. ![ristretto](/assets/articles/2014/ristretto.png)Due to a duplication of functionalities, the Xubuntu Team decided to favor **Ristretto** for photo viewing, and drop gThumb. To remove gThumb from your system run in a terminal window: `sudo apt-get remove gthumb`
4. ![xfce4-whiskermenu](/assets/articles/2014/xfce4-whiskermenu.png)As **Whiskermenu** is now the default menu in Xubuntu, swap out the old application menu with it. Just right click the top panel and navigate to **Panel &gt; Add New Items**, then select "Whisker Menu" and click "Add". After that, and to remove the old application menu, just right click on its icon and choose the "Remove" option.
5. ![software-properties](/assets/articles/2014/software-properties.png)All **PPAs are automatically disabled** when you upgrade, so you'll have to re-enable release-independent PPAs manually, taking in consideration that you'll have to check if the old PPAs work with the new Xubuntu version.
