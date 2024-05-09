---
title:       "Window resizing in Xubuntu (and Xfce)"
date:        2012-04-13 14:18:19
release:     "12.04"
serie:       faq
category:    articles
author:      Simon Steinbeiß
author_nick: simon-steinbeiss
---

For quite a while now there has been questions about resizing windows in Xfce, especially with theme with narrow window-borders. Usually people would ask for wider window-borders, but there are several methods of resizing a window and the thin borders in Xubuntu's current default theme Greybird are not as much of a usability issue as some suggest.

The five methods
----------------

### Method 1: Using the resize grip

Resize grips (usually small triangles) are positioned in the bottom right corner of a window, often as part of a statusbar. Before 12.04 (Precise Pangolin), Ubuntu had patched Gtk2 to add these resize grips to *all* applications. This would allow people to easily grab each window and resize it, even with theme with thin borders.

Unfortunately, this patch had some regressions; for example, clicking OpenOffice's resize grip would open the file menu. The regressions made Ubuntu developers drop the feature from 12.04. Starting from 12.04, Gtk2 applications will have to use one of the other resizing methods for applications that don't have a built-in resize grip. All the Gtk3 applications will have a resize grip in Greybird (Xubuntu's default theme).

### Method 2: Alt + right-click + drag

This is maybe the easiest and most useful way of resizing windows. I'm tempted to say that once you got accustomed to this it's hard to go back. Simply hold the Alt key, right-click somewhere inside the window and drag to resize. It works intriguingly well and is a very nice complement to the easiest way of moving windows: holding Alt and left-click drag.

### Method 3: Keyboard shortcut

Xfwm4, Xfce's window manager, supports a number of keyboard shortcuts (which can be edited by going to the Settings Manager &gt; Window Manager &gt; Keyboard). One of them is for resizing windows with your keyboard. There is currently no keyboard shortcut set by default, but you can set one in the Window Manager dialog.

As soon as your keyboard-shortcut (in Xfce upstream its Alt+F8) is hit, you can then resize the window by either moving your mouse (no need to click or drag) or use your keyboard arrow keys.

### Method 4: Using the top corners of a window

While the resize grip has been removed from Gtk2 in Ubuntu and isn't present in every application, you can always resize windows by using the two top corners with the mouse. In most Xfwm4 themes the area of the top corners is large enough to easily grab and drag it with the mouse.

### Method 5: Using the window-menu

You can also initiate the same action as proposed in **Method 3** above via the window-menu. Accessing the window-menu works either by clicking the menu-button in your window-titlebar (if your Xfwm4 theme has one), or by simply right-clicking the titlebar. There's also a keyboard-shortcut to access the window-menu, but if you only want to resize the window, it's easier to use the direct shortcut for that (again, see **Method 3**).

Example images
--------------

\[gallery link="file" columns="2" orderby="title"\]

*The author of this post is Simon Steinbeiß, who is the Xubuntu Artwork Lead. In addition to Xubuntu, he works extensively on the [Shimmer Project](http://www.shimmerproject.org "Shimmer Project") and the [Xfce Design SIG](http://wiki.xfce.org/design/start "Xfce Design SIG").*
