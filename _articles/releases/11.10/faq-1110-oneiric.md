---
title:       "FAQ for Xubuntu 11.10 Oneiric Ocelot"
date:        2011-11-19 22:14:39
release:     "11.10"
serie:       faq
category:    articles
author:      Pasi Lallinaho
author_nick: knome
---

### 1. I can’t hear a sound. How can I get my sound back?

There are many reasons why sound can be lost on a system, most of them if you try to use different audio protocols. The usual way to get sound back is to run `sudo /etc/init.d/alsa-utils restart`.

If this doesn’t work you can try running `sudo alsa force-unload` and `sudo alsa force-reload`.

Pulseaudio can sometimes cause conflicts with ALSA. If you are sure you don’t need one or the other, you could try purging pulseaudio with `sudo apt-get purge pulseaudio`.

If you still have problems please join the forums or IRC channels and feel free to ask all the questions you need.

### 2. I need a program (to do thing) X, how do I install it?

Xubuntu uses the same software sources (package repositories) than the rest of the Ubuntu family, that means you can install any software in Ubuntu in Xubuntu as well. To do this, use one of the following:

- **Ubuntu Software Center** in ![](/assets/articles/releases/2011/menu_16.png "Applications menu") Applications menu **»** ![](/assets/articles/releases/2011/softwarecenter_synaptic_16.png "Ubuntu Software Center") Ubuntu Software Center
- **Synaptic Package Manager** in ![](/assets/articles/releases/2011/menu_16.png "Applications menu") Applications menu **»** ![](/assets/articles/releases/2011/system_16.png "System") System **»** ![](/assets/articles/releases/2011/softwarecenter_synaptic_16.png "Synaptic Package Manager") Synaptic Package Manager
- **apt-get**

### 3. How do I configure my network connection?

You can configure networking with the Network manager from the main panel or by running it with Alt+F2 and running `nm-connection-editor`. For PPPoE connections, you should use `pppoeconf`.

### 4. Gnome Keyring keeps asking me for the correct password, how do I remove the prompt?

You have to delete `~/.gnome2/keyrings` and start over.

### 5. My window decorations/panels are gone! How do I get them back?

You can restore window decorations by pressing Alt+F2 and running `xfwm4`. To restore panels, press Alt+F2 and run `xfce4-panel`.

If the window decorations and/or panels don’t start automatically on login, add the respective commands to your session from ![](/assets/articles/releases/2011/menu_16.png "Applications menu") Applications Menu **»** Settings » Settings Manager in Session and Startup on the Application Autostart tab.

### 6. How can I edit the Start Menu?

#### In Xfce 4.8 (Xubuntu 11.04 and newer):

- Install Alacarte from terminal, `sudo apt-get install alacarte --no-install-recommends`
- Run Alacarte and edit the menu

#### In Xfce 4.6 (Xubuntu 10.10 and older):

- Copy `/etc/xdg/menus/xfce-applications.menu` to `~/.config/xdg/menus` and customize it
- You can also create desktop entries in `~/.local/share/applications` to override the existing applications (change or hide) or add new ones.

See <http://wiki.xfce.org/howto/customize-menu> for more information.

### 7. How can I add custom themes or new themes to Xubuntu

Yes, you can use themes for GTK and install themes directly to `~/.themes` or `/usr/share/themes`. You can obtain more themes from various sites, like [xfce-look.org](http://xfce-look.org/).

### 8. My mouse pointer/cursor doesn't change on demand, how do I fix that?

If the cursor doesn't follow the theme set for 11.04 and above, try `chmod +x ~/.Xdefaults`. `.Xdefaults` also must be executable for Xfce 4.8, this is a change from Xfce 4.6.

### 9. Can I install Compiz on Xubuntu?

Yes, yes you can, but keep in mind that Xubuntu doesn’t package Compiz and does not provide any support for it. You can install Compiz by running `sudo apt-get install compiz`

Once Compiz is installed you need to replace xfwm with Compiz. Do this by pressing Alt+F2 and running `compiz --replace`.

Also see ["How do I enable Compiz in Xubuntu?" at askubuntu.com](http://askubuntu.com/questions/58002/how-do-i-enable-compiz-in-xubuntu). If you still have problems please join the forums or IRC channels and feel free to ask all the questions you need.

### My question is not covered here, how can I get more help?

Visit the [Help &amp; Support](/help) page to learn about the available help resources.
