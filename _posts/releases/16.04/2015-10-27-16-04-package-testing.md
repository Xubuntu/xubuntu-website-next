---
title:       "16.04 Package Testing"
date:        2015-10-27 22:14:32
slug:        16-04-package-testing
release:     "16.04"
serie:       
category:    articles
author:      flocculant
author_nick: flocculant
---

It is early for a post on the website from the Quality Assurance team, but we're just about to start testing a release that will be supported for more than the regular 9 months...

General testing outlook for Xenial
----------------------------------

During the next 26 weeks, we are going to be concentrating on the applications that we have in Xubuntu. This is a change from the last couple of cycles, where the emphasis has been more on the ISOs than the applications.

We will still be testing the ISOs, but mostly only during the milestones we are participating in. At the moment, these milestones are Alpha 2, and both Betas.

A quote from Sean Davis, the technical lead, from one of the recent Xubuntu meetings sums up what Xenial will be about:

> From a development perspective, we're targeting bug fixes to make 16.04 super stable. Don't expect a lot of new features, so testing done at all parts of the cycle will be incredibly relevant.

Package tracker
---------------

If you visit our section of the [Package Tracker](http://packages.qa.ubuntu.com/qatracker/milestones/350/builds/105268/testcases) you will see that we have 3 sections:

- **Priority.** These packages will be called for testing by the QA team many times during the cycle as usual. In addition you might see calls directly from developers to test a version of an application or package prior to bug fixes landing.
- **Mandatory.** These will also see many calls for testing, though likely less so than the Priority group. Again, calls could come from either the QA team or directly from developers.
- **Run-once/optional.** These are scheduled to be called for testing only once during the cycle. If bug fixes are needed, we will additionally ask testers to check that the bug fixes actually fix the bugs and do not cause regressions.

From time to time we will disable applications or packages from testing when we know a fix is due to land in the near future. This has two benefits: First, testers do not need to test applications that are known to have issues. Second, a pause in the testing allows the developers to have some time to look at the issues and prepare fixes.

When something has been disabled we will list it on the *Disabled Tests* list of our [QA trello site](https://trello.com/b/IV66JCHl/xubuntu-qa).

Why should I test?
------------------

You could be the one person who gains enough momentum to report that *thing* which annoys you and possibly other people – and gain their unworded thanks.

As much as Xubuntu Team would love to be able to test every scenario for you – the simple truth is we can't. That's why we **all** need you.

How do I know what to test?
---------------------------

There are several ways you can help. We will cover some of the most common ways below.

### Running Wily (15.10) without PPAs

If you have installed or upgraded to 15.10 Wily Werewolf, you can help to ensure that the next release gets as much testing as possible. Practically, you are already testing for the community – you just don't realise it.

Found a bug? Don't ignore it – report it, it is in this scenario as simple as opening a terminal and running `ubuntu-bug <em>packagename</em>` and letting the reporting get taken care off for you. All we ask in addition to that is you adding a specific tag to your report **xubuntu-exp**.

### Running Wily (15.10) with PPAs

If you wish, you can add the development PPAs to 15.10. If you do that, we would also advise installing *ppa-purge* to help remove the PPAs cleanly. This is the situation closely mimicking our developers' workflow. You can test the newest version of applications or packages this way.

Reporting bugs with PPAs becomes a little harder to accomplish...

### Running Xenial with or without PPAs

If you've upgraded or clean installed Xenial, then running that at this stage *with* PPAs shouldn't be any braver than without. The bug reporting process is the same in Xenial as in Wily.

What do you want me to look for?
--------------------------------

Obviously all those things that people would normally refer to as bugs need to be reported. For example, crashes when using an application. In addition, during the LTS cycle, the developers are particularly keen for you to be looking for non-critical bugs as well. For instance:

- Missing icons
- Inconsistent functionality
- Usability bugs (see a specific example of a usability bug for [Catfish](https://bugs.launchpad.net/ubuntu/+source/catfish/+bug/1508918))

These things will not only improve us as downstream Xubuntu but also the upstreams of Xfce and Ubuntu.

You have convinced me – what should I do now?
---------------------------------------------

There are a few things you can do to make it easier for you to pass on and receive information.

- If you haven't got one, [register a Launchpad account](https://launchpad.net/+login)
- Join the [Xubuntu Testers](https://launchpad.net/~xubuntu-testers) team; we will send testing related information through this team
- Join the [Xubuntu developer mailing list](https://lists.ubuntu.com/mailman/listinfo/xubuntu-devel) in order to talk to us easily about issues you might have while testing
- Check what we have going on during the cycle at the [Xubuntu status tracker](http://tracker.xubuntu.org/) and use the *IRC* tab to talk to us about helping with testing

More detailed information on what is discussed above and more can be found on the current QA [contribution page](http://xubuntu.org/contribute/qa).
