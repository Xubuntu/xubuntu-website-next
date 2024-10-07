---
layout:    page
release:   "22.04"
link_name: "Upgrading"
title:     "Upgrading to Xubuntu 22.04"
---

You can easily upgrade over the network with the following procedure. Upgrades from Xubuntu 20.04 or 21.10 are supported. For all other Ubuntu systems, please read [JammyUpgrades](https://help.ubuntu.com/community/JammyUpgrades) on ubuntu.com.

- Run the **update-manager** application;
- In Update Manager, click the **Settings...** button, and enter your password to start the Software Sources application.
- Select the sub menu **Updates** from the Software Sources application.
- Confirm the "Notify me of a new Ubuntu version:" option is set to "For any new version" if you are using 21.10 or to "For long-term support versions" if you are using 20.04 LTS. If it is not set properly modify it to the appropriate option.
- Close the Software Sources application and return to Update Manager.
- In Update Manager, click the **Check** button to check for new updates.
- If there are any updates to install, use the **Install Updates** button to install them, then exit.
- In a terminal run ''update-manager -c -d''.
- A message will appear informing you of the availability of the new release.
- Click **Upgrade**.
- Follow the on-screen instructions.
