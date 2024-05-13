---
title:       "Xubuntu 20.04 Testing Week"
date:        2020-03-26 06:00:30
slug:        xubuntu-20-04-testing-week
release:     "20.04"
serie:       qa, testing-week
category:    articles
author:      Yousuf Philips
author_nick: philipz85
---

We're delighted to announce that we're participating in an ‘Ubuntu Testing Week’ from April 2nd to April 8th with other flavors in the Ubuntu family. On April 2nd, we’ll be releasing the beta release of Xubuntu 20.04 LTS, after halting all new changes to its features, user interface and documentation. And between April 2nd and the final release on April 23rd, all efforts by the Xubuntu team and community are focused on ISO testing, bug reporting, and fixing bugs.

So, we highly encourage you to join the community by downloading the [daily ISO image](http://cdimage.ubuntu.com/xubuntu/daily-live/current/) and trying it out, though you are welcome to start from today. There are a variety of ways that you can help test the release, including trying out the various testcases for live sessions and installations on the [ISO tracker](http://iso.qa.ubuntu.com/qatracker/milestones/408/builds) (Xubuntu is found at the bottom of the page), which take less than 30 minutes to complete ([example 1](https://www.youtube.com/watch?v=hXLiqjOkSmg&t=242), [example 2](https://www.youtube.com/watch?v=4Ou1-zRSo-8), example 3 below).

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/lOCWwLwN7xE?start=106" width="560"></iframe>

You can test without changing your system by running it in a VM (Virtual Machine) with software like [VMWare Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html), [VirtualBox](https://www.virtualbox.org/wiki/Downloads) ([apt-install](apt://virtualbox-qt)), and [Gnome Boxes](https://wiki.gnome.org/Apps/Boxes) ([apt-install](apt://gnome-boxes)), or running it in the live session from a USB, SD Card, or DVD, so you can also test if your hardware works correctly. There are a number of software like [etcher](https://www.balena.io/etcher/) and [Gnome Disks](https://wiki.gnome.org/Apps/Disks) that can copy the ISO to a USB Drive and SD Card. We encourage those that are willing, to install it either in a VM or on physical hardware (it requires at least 6GB of harddisk space) and use it continuously for a few days, as more bugs can be reported this way.

<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" height="315" src="https://www.youtube.com/embed/CjTyzyY9RHw" width="560"></iframe>

If you find a bug in the installer, you can file it against [ubiquity](https://bugs.launchpad.net/ubuntu/+source/ubiquity), or if you find a bug not in an application but in the live session from the booting to the shutdown, you can file it against [casper](https://bugs.launchpad.net/ubuntu/+source/casper). If you can’t figure out which package to file a bug against after watching the video above, then please file it with the [Xubuntu Bugs Team](https://bugs.launchpad.net/~xubuntu-bugs).

Please test apps that you regularly use, so you can identify bugs and regressions that should be reported. New ISO files are built everyday, and you should always test with the most up-to-date ISO. It is easier and faster to update an existing daily ISO file on Linux by running the command below in the folder containing the ISO, after right-click on the folder and select ‘Open in Terminal’ from the context menu ([example](https://www.youtube.com/watch?v=Kf0CC2fPxoU)).

`$ zsync http://cdimage.ubuntu.com/xubuntu/daily-live/current/focal-desktop-amd64.iso.zsync`

In order to assist you in your testing efforts, we encourage you to read our [Quality Assurance (QA) guide](https://xubuntu.org/contribute/qa) and our [new testers wiki](https://wiki.xubuntu.org/qa/new_tester_start). You can also chat with us live in our dedicated IRC channel ( [\#ubuntu-quality](https://webchat.freenode.net/#ubuntu-quality?nick=xubuntu-tester?w) on freenode ) or telegram group ( [Ubuntu Testers](https://t.me/UbuntuTesters) ). In order to submit reports to us, you’ll need an [Launchpad account](https://login.launchpad.net/) and once you have one, you can also join the [Xubuntu Testers team](https://launchpad.net/~xubuntu-testers).

We hope that you will join the community in making Xubuntu 20.04 a success, and hope that you will also take time to also test out the other Ubuntu flavors (Kubuntu, Lubuntu, Ubuntu, Ubuntu Budgie, Ubuntu Kylin, Ubuntu MATE, and Ubuntu Studio), as we will all benefit from that. We look forward to your contributions, your live chatting and for your return to future testing sessions. Happy bug hunting.
