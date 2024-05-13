---
title:       "Using inxi to detect hardware information"
date:        2014-08-28 16:01:14
slug:        inxi
release:     "14.10"
serie:       faq
category:    articles
author:      David Pires
author_nick: slickymaster
---

inxi is a full featured system information script that will detect information about hardware specifications, including but not limited to vendor details, CPU info, graphic and sound cards. Most importantly, it will output everything in a easy to read format and it can also be used on irc clients like irssi, weechat or xchat.

How to use inxi?
----------------

The general use of inxi is `inxi -<color> -<option>`. inxi output is colored and to change the color for better visibility use the **c** option followed by a number between 0-32.

### System information
`inxi -b` and `inxi -F`
The **b** option output basic system information, while the **F** option will output full system information.

### Hard drive details
`inxi -D`
Outputs information on your hard drives, like make, model and size

### Hard drive partitions
`inxi -p`
Outputs information about all mounted partitions, mount points and space usage

### Networking
`inxi -n` and `inxi -ni`
Outputs information about the details of the network interfaces and configuration. When the **i** option is used with **n**, Inxi will output IP address details (for both WAN and LAN).

### Hardware
`inxi -AG` and `inxi -h`
The **A** and **G** options output information about the audio and graphics hardware respectively. You usually want to use them together. The **h** option outputs you the full list of options you can use to get even more information about your hardware.

Using inxi in IRC clients
-------------------------

### Xchat, irssi and most other clients
`/exec -o inxi -<option> | pastebinit`
The -o option shows the output to the channel. Without it, only the user will see the output.

### Weechat
`/shell -o inxi -<option> | pastebinit`
*Note: For weechat to run external scripts like inxi, shell.py has to be installed.*

Using `inxi -c0` within a IRC client environment is highly advisable because colored output doesn't work in pastebins.
