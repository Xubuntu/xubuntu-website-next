---
title:       "Xubuntu 14.04 Alpha 1"
date:        2013-12-19 19:48:50
slug:        xubuntu-14-04-alpha-1
release:     "14.04"
serie:       
category:    
author:      flocculant
author_nick: flocculant
---

The Xubuntu team is happy to announce the immediate release of Xubuntu 14.04 Alpha 1!

As often expected with very early cycle releases, this release has some major issues which we will be working to resolve before the final release. The main issues center around the various User Session bugs seen.

To boot successfully to a Xubuntu Desktop on the Live DVD you need to set the session to Xubuntu at the Gear Icon, Language at the Flag Icon and use username xubuntu. You may notice that the Settings Manager is joined with it's applications in the menu we used to see. It is also impossible to successfully use the Alpha1 to set up an auto-resized system automatically. You will not be able to set the partition sizes.

Thanks to the 8 people who tested and reported their results on the Alpha1 image for us:

- paulw2u
- noskcaj
- samuelgabbay1
- jjfrv8
- irihapeti
- slickymaster
- j-bardales
- elfy

We always need more testers so please consider contributing to our daily builds or to the next milestone! Learn more about testing here: [Help us test Xubuntu 14.04 LTS](http://xubuntu.org/news/help-us-test-xubuntu-14-04-lts/)

Known Issues
------------

- Resize bar missing when running autoresize install option: [1260473](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1260473)
- Various user session issues during install: [1259525](https://bugs.launchpad.net/ubuntu-manual-tests/+bug/1259525), [1259662](https://bugs.launchpad.net/ubuntu/+source/xubuntu-default-settings/+bug/1259662), [1261660](https://bugs.launchpad.net/ubuntu/+source/xubuntu-default-settings/+bug/1261660) and [1245585](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1245585)
- Keyboard Input Method closing unexpectedly: [1258751](https://bugs.launchpad.net/ubuntu/+source/ibus/+bug/1258751)
- Ubiquity window spans monitor width: [1260396](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1260396)
- Top ruler missing from Abiword: [1261203](https://bugs.launchpad.net/ubuntu/+source/abiword/+bug/1261203)
- Thunar not always automounting USB drives: [1210898](https://bugs.launchpad.net/ubuntu/+source/thunar/+bug/1210898)
- Pressing the power button does not wait for user input before shutting down: [1222021](https://bugs.launchpad.net/ubuntu/+source/xfce4-power-manager/+bug/1222021)
