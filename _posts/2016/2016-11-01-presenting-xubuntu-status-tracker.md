---
title:       "Presenting the Xubuntu status tracker"
date:        2016-11-01 10:43:21
slug:        presenting-xubuntu-status-tracker
release:     ""
serie:       
category:    articles
author:      Pasi Lallinaho
author_nick: knome
---

Status tracking is useful for all kinds of projects, including Xubuntu. Amongst other things, it allows contributors to quickly see what's left to do and what others are working on. When the tracking data is kept up to date, the resulting data can be immensely helpful.

Until 2015, the Xubuntu team had been using the common status tracker for Ubuntu teams. For a reason or another, it suddenly stopped working as tracking data from Launchpad didn't make it into the tracker database. That was unfortunate, but on the other hand, it helped the team make an important decision which had been floating around for quite some time already; we need our own status tracker that is ideally better than the common one used this far.

Today, we want to present you the Xubuntu status tracker. For the impatient, head down to [dev.xubuntu.org](http://dev.xubuntu.org/) to see what it looks like.

For the rest of us (and the impatient when they come back), continue reading to get an idea what the tracker can do and how it can help the Xubuntu team – and potentially, motivate people to start contributing to Xubuntu.

The views and the benefits
--------------------------

In the current state, the status tracker has four main views. The first one of them is [the overview](http://dev.xubuntu.org/#tab-overview), which lets contributors see how different specifications are coming along. This view also allows the visitor to look at the whiteboards of each specification easily and quickly without visiting Launchpad.

The other view is all about the [work items and their details](http://dev.xubuntu.org/#tab-details). In this view, you can filter the work items with various filters, as well as sort them by assignee, work item status or specification. The filtering is a new feature specifically built for the Xubuntu status tracker and has already proven useful for the team members.

For example, if you wanted to see all work items related to GTK, you could simply type *gtk* in the Text filter – the results are shown to you immediately. If you further wanted to filter the results, you could select any assignees, specifications and statuses. Yes, that's right, you can select multiple values for all of the filters.

As another example that has a more useful real world use case, you could show only all of the open work items by selecting *To Do*, *In Progress* and *Blocked* from the *Status* dropdown. Finally, you can create a handy shortcut for this view by dragging the *Permalink* into your bookmarks. Following this link you can always get to the same filter state.

The third view is the [burndown chart](http://dev.xubuntu.org/#tab-burndown). This view shows the history for the work item statuses. In the Xubuntu status tracker, the burndown chart also shows *events* that the team considers important during the cycle, mostly different freezes.

In addition to showing the team whether we are in good pace to finish all work items in time, it can also point out useful and interesting information for the testers and end users; for example, the amount of work items closed between Beta 1 and 2 is huge. While this means that the quality of the product should have gone up, it also means that tests ran against Beta 1 do not have any validity during the Beta 2 testing – it all needs to be ran again to make sure the fixes are actually working and that there are no regressions.

The final view – the [timeline](http://dev.xubuntu.org/#tab-timeline) – simply shows which work items have been completed and when. This is also a new feature for the new tracker. The timeline is useful for the testers – when they can see what has been changed and when, they'll know what they need to test. It also helps the contributors to gather the release notes for the releases, especially the milestones, which has previously been laborious work digging through changelogs and much more.

Finally, it serves as an automatic team updates chart for the team itself as well as other teams. This way we can let everybody know what we have been working on without actively needing to take extra effort.

In addition to the main views, the tracker has an menu that is integrated with the Xubuntu wiki and additionally links to the team calendar, IRC channel, mailing list and the new contributor documentation.

The future
----------

As the common Ubuntu status tracker, the Xubuntu status tracker gets most of the data from Launchpad blueprints. While this means we don't have to take on some of the maintaining burden, it has it's problems. It's possible that we start storing the work items internally to avoid a lot of API calls and the caching issues related with them.

There are also some plans for the future to start digging more information to the tracker from other tools like the QA trackers and Jenkins to get an overview of how the quality assurance is running.

If you are interested in contributing to the tracker, be in touch with us via the developer IRC channel (#xubuntu-devel on Freenode) or the [Xubuntu developer mailing list](https://lists.ubuntu.com/mailman/listinfo/xubuntu-devel).
