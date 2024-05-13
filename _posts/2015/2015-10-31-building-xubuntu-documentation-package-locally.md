---
title:       "Building the Xubuntu documentation package locally"
date:        2015-10-31 20:36:46
slug:        building-xubuntu-documentation-package-locally
release:     ""
serie:       getting-started-development
category:    articles
author:      David Pires
author_nick: slickymaster
---

The Xubuntu documentation, shipped with every release of Xubuntu, is in fact a package that can be built locally, on your computer.

By default, Xubuntu does not come with the tools required to build the documentation package, so there is the need to prepare your system to be able to do it, by installing the required prerequisite packages. To do this, run the following command:

`sudo apt-get build-dep xubuntu-docs`

Additionally, if you are running a release *earlier than 15.10*, you will need to install the package `fop` manually, because it's not yet a dependency of the package in your release. To do this, simply run:

`sudo apt-get install fop`

Once that's done, all you have to do is to get the latest main branch and build the package. Again in a terminal window, run the following commands, one at a time:

`bzr branch lp:xubuntu-docs``cd xubuntu-docs``make` (running this command will take some time as it builds both HTML and PDF versions of the documentation in various languages) `exo-open --launch WebBrowser build/index.html`

Now that you have the source on your system, you have the ability to edit it and ultimately, suggest improvements to the documentation. If you have any doubts about how you can contribute, just have a read on how you can assist with the Xubuntu documentation, [here](http://xubuntu.org/contribute/documentation/).
