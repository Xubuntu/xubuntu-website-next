---
title:       "Introducing Xubuntu core"
date:        2015-05-06 07:08:23
slug:        introducing-xubuntu-core
release:     ""
serie:       
category:    
author:      Simon Steinbeiß
author_nick: ochosi
---

Xubuntu core is a slimmed down version of Xubuntu that doesn’t come with all the additional features of a full and modern desktop. We essentially only ship Xfce and the basic look and feel of Xubuntu, so there will be no office suite, media players, et cetera.

The obvious benefit is that this ISO (about 600MB) will be faster to download – especially interesting for those with limited connectivity – and fit on a CD.

We have been working on this for a while, which is why you can already install it starting with Utopic. There are community ISOs for Vivid (see below), and starting with Wily, our plan is to produce official release ISOs!

### Is this related to Snappy, Ubuntu Core, or Convergence?

Nope, sorry for the confusion in the name!

### OK, so how do I install it now?

The recommended way is to download the [mini.iso](https://help.ubuntu.com/community/Installation/MinimalCD), install, and when prompted, install the *Xubuntu minimal installation* task. If you’d prefer to wait until after the installer finishes to install the Xubuntu core task, you can simply type `sudo apt-get install xubuntu-core^` (don’t forget the caret!) and away it’ll go.

Optionally for Vivid, if you don’t want to use the mini ISO or won’t have internet during install, you can install from the [community ISOs](https://unit193.net/xubuntu/core/), made available by a Xubuntu developer.
