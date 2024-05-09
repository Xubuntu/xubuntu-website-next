---
title:       "Xubuntu's default theme gets a refresh for Quantal"
date:        2012-06-18 11:40:56
release:     "12.10"
serie:       
category:    articles
author:      Simon Steinbeiß
author_nick: ochosi
---

While we've been using "Greybird" as our default theme for a few releases now, I've continuously worked on it. The goal was not only to ensure the quality of the theme in terms of a flawless Xfce4 and Gtk3 performance and extras like supporting Unity or Compiz, but also to visually keep it up-to-date.

### More contrast

After having had a tendency to soften colors and contrasts, I've decided to take a (bold?) step and counter this tendency. This is why the changes for the upcoming Quantal release might seem more drastic then between the releases before. After playing with it for a while, I realized that going this direction half-way wouldn't work well, so while I'm aware that there might be quite a bit of whining (partly because people may miss the "old Greybird", partly because change always provokes whining) I really hope that many and most of you will fall in love with the changes the way I did while working on it.

### Built around Gtk2

Since the Xfce developer community decided a while ago not to port their (and consequently: our) desktop to Gtk3 in the next release (4.12) and instead to postpone that until performance and memory issues with Gtk3 would be fixed (keeping my fingers crossed), I built the refresh of Greybird around Gtk2. As this will be the main platform for our users' desktop experience, I'll try my best to port all the changes to Gtk3 as perfectly as possible, so that hopefully no-one will notice whether an app is Gtk2 or Gtk3 (because I firmly believe that users *shouldn't* have to care about things like that).

So, without much further ado and blathering, here goes a representational compilation for our Greybird refresh.

[![Screenshot compilation of Greybird's refresh](/assets/articles/releases/2012/greybird_refresh.png "Greybird refresh")](http://xubuntu.org/news/xubuntus-default-theme-gets-a-refresh-for-quantal/greybird_refresh/)

### Testing

If any of you feel like testing this, feel free to [download the tarball @github](https://github.com/shimmerproject/Greybird/tarball/bright-menus "bright-menus branch tarball") or git-clone the repository to easily stay up to date.

### Feedback

Constructive **feedback** – either via the Mailing list or on IRC – **is always appreciated!**

*The author of this post is Simon Steinbeiß, who is the Xubuntu Artwork Lead. In addition to Xubuntu, he works extensively on the [Shimmer Project](http://www.shimmerproject.org "Shimmer Project") and the [Xfce Design SIG](http://wiki.xfce.org/design/start "Xfce Design SIG").*
