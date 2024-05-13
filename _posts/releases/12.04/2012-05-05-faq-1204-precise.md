---
title:       "FAQ for Xubuntu 12.04 Precise Pangolin"
date:        2012-05-05 17:29:40
slug:        faq-1204-precise
release:     "12.04"
serie:       faq
category:    articles
author:      Pasi Lallinaho
author_nick: knome
---

### 1. Is there a way to use folders shared from Windows?

Yes, using Gigolo. If you are not able to see the network check if `gvfs-backends` is installed.

### 2. Thunar loads very slowly on first launch, how do I fix that?

Unfortunately, this is a [known bug](https://bugs.launchpad.net/ubuntu/+source/thunar/+bug/775117). There are two possible solutions:

- Edit the file `/usr/share/gvfs/mounts/network.mount` (as root) and change `AutoMount` to `false`. This disables the Network browsing when Thunar starts up, but still lets you mount network storage such as Samba shares on demand. Please note that this solution leaves you with a broken "Network" link in Thunar.
- If you don't use Samba (Windows shares), remove `gvfs-backends`

### 3. I can't resize windows because the window borders are too tiny!

The suggested way to resize windows is to hold the Alt key, right-click somewhere inside the window and drag to resize. See [Window resizing in Xubuntu (and Xfce)](http://xubuntu.org/news/window-resizing-in-xubuntu-and-xfce/ "Window resizing in Xubuntu (and Xfce)") for all the different methods.

### 4. Is there a way to use Dropbox with Thunar?

There is an unofficial and unsupported [plugin for Dropbox on Thunar](http://softwarebakery.com/maato/thunar-dropbox.html).

To compile the package, you need to install `libthunarx-2-dev`. In addition, you need to install [Dropbox](https://www.dropbox.com/install?os=lnx) as well as start the daemon installation with `dropbox start -i`. Please note that this will install the propietary Dropbox daemon. Running this command will also start a wizard to set up your Dropbox account, including a possibility to create one.

### 5. How do I configure multiple monitors?

To set up and configure multiple monitors and/or other output devices you can use arandr, which is a simple drag-and-drop front-end for xrandr.

If you are using the propietary Nvidia driver, you can use the `nvidia-settings` tool.

### 6. Installing package X installs a lot of other packages!

There is a way to stop installing the so-called "recommends" packages automatically. For single packages, you should use the `--no-install-recommends` switch with `apt-get`. To turn off installing recommends for all packages, do one of the following:

- In Synaptic, go to Settings **»** Preferences **»** tab General and uncheck "Consider recommended packages as dependencies"
- Create the file `/usr/apt/apt.conf.d/05norecommends` and add the following line in the file: `APT::Install-Recommends "false";`

### 7. How do I disable guest login? How do I enable autologin?

Edit the file `/etc/lightdm/lightdm.conf;`

- To disable guest login, set `allow-guest` to `false`
- To enable autologin, edit the file to look like this: \[SeatDefaults\] autologin-user=&lt;USERNAME&gt; autologin-user-timeout=0 user-session=xubuntu greeter-session=lightdm-gtk-greeter

### 8. How can I edit the applications menu?

Xubuntu 12.04 has the Alacarte menu editor installed by default. You can launch it from Applications menu **»** Settings **»** Main menu.

### 9. My theme shows white text on light background. Help!

You are most probably using the [Albatross](http://shimmerproject.org/project/albatross/) theme. Unfortunately, this theme is not updated yet to fully support GTK3. There is a bug about this ([LP #989814](https://bugs.launchpad.net/ubuntu/+source/shimmer-themes/+bug/989814)) with an attached patch which provides a quick workaround, too.

For the best GTK3 support, we advise to use the [Greybird](http://shimmerproject.org/project/greybird/) theme, which is the default for Xubuntu 12.04.

Still having issues?
--------------------

Please see the earlier [FAQ articles](http://xubuntu.org/news/category/faq/) on our website. While some of the questions are release-specific, most of them are still applicable to 12.04. Topics include changing and installing themes, Compiz on Xubuntu and much more. If you are still having issues, refer to the [Help &amp; Support section](http://xubuntu.org/help/) for a list of available support methods.

Thanks
------

[Joshua O'Leary](https://launchpad.net/~jmoleary) for the AutoMount workaround for question 2. Everybody contributing to the top FAQ creation and proof-reading.
