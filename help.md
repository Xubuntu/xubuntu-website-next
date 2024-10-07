---
layout:     page
title:      Help & Support
menu_title: Support
---

<section class="columns-2">
   <div>
      <h3>Documentation</h3>
      <p>Documentation is shipped with every release of Xubuntu and is available through the <em>Help</em> enty in the application menu or by <a href="file:///usr/share/xubuntu-docs/index.html">clicking here</a> if you are running Xubuntu.</p>
      <p><a href="https://xubuntu.github.io/xubuntu-docs/" class="button"><span>Online Documentation</span></a></p>
   </div>
   <div>
      <h3>Release Notes</h3>
      <p>If you are installing or using Xubuntu and have run into a problem, please read the <strong>release documents</strong> for your release to learn about common bugs and known fixes to them.</p>
      <p>
         {%- assign today = site.time | date: '%Y-%m-%d' -%}
         {%- assign releases = site.releases | sort: 'date_rel' | reverse -%}
         {%- for release in releases -%}
            {%- assign release_eol = release.date_eol | date: '%Y-%m-%d' -%}
            {%- if release_eol > today -%}
               <a href="{{ release.url | relative_url }}" class="button"><span>{{ release.title }}</span></a>
            {%- endif -%}
         {%- endfor -%}
      </p>
      <p><a class="quo" href="{{ "/releases" | relative_url }}">Browse All Releases</a></p>
   </div>
</section>

<section class="wide alternative-bg">
   <section>
      <h3>Internet Relay Chat</h3>
      <section class="columns-2">
         <div>
            <p>Due to the real-time nature of IRC, it is often the fastest way to get help.</p>
            <p><em>Please be patient: while there may appear to be lots of people in the channel, they may not be available at the time. While you are waiting, it is a good idea to look for an answer via other support methods.</em></p>
            <p><a href="https://web.libera.chat/?nick=xu-help?w#xubuntu" class="button"><span>Join <strong>#xubuntu</strong></span></a></p>
         </div>
         <div>
            <p>Additional help can be found in the <a href="https://wiki.ubuntu.com/IRC/ChannelList#IRC.2FChannelList.2FLocal.Local_Ubuntu_channels">localized Ubuntu IRC channels</a>, for those who prefer to chat in their native language, as well as the official <a href="https://web.libera.chat/?nick=xu-help?w#xfce">#xfce</a> community support.</p>
            <p>If you prefer a desktop application to use IRC, then you can use the pre-installed Pidgin instant messenger or your favorite IRC client to join the channels on the Libera Chat IRC network (irc.libera.chat).</p>
         </div>
      </section>
   </section>
</section>

<section class="columns-2">
   <div>
      <h3>Mailing Lists</h3>
      <p>Mailing lists are discussion groups that use mass distribution of email to reach all subscribers. Mailing lists are ideal when you have limited connectivity and are not able to use real-time discussion methods.</p>
      <p>The <a href="https://lists.ubuntu.com/mailman/listinfo/xubuntu-users">Xubuntu-users mailing list</a> can be used for community support and discussions.</p>
      <p>For more Ubuntu-related mailing lists, including localized ones, see the complete list on the <a href="https://lists.ubuntu.com/">Ubuntu Mailing Lists</a> page.</p>
   </div>
   <div>
      <h3>Forums</h3>
      <p>On the official <strong>Ubuntu forums</strong> you can find help with Xubuntu related topics in the <a href="https://ubuntuforums.org/forumdisplay.php?f=329&amp;pp=20&amp;prefixid=xubuntu&amp;sort=lastpost&amp;order=desc&amp;daysprune=-1">Desktop Environments</a> category.</p>
      <p>The official <strong><a href="https://discourse.ubuntu.com/">Ubuntu Discourse</a></strong> has a <a href="https://discourse.ubuntu.com/c/flavors/xubuntu/196">Xubuntu</a> subcategory.</p>
      <p>You can also find help at the official <strong><a href="https://forum.xfce.org/">Xfce forum</a></strong>.</p>
   </div>
</section>
<br />
<section class="columns-2">
   <div>
      <h3>Q&amp;A Sites</h3>
      <p>You can also add your support question and search through answered questions in <strong><a href="https://answers.launchpad.net/ubuntu/+questions">Launchpad Answers</a></strong>.</p>
      <p>You may also ask questions and search for answers on <strong><a href="https://askubuntu.com/questions/tagged/xubuntu">Ask Ubuntu</a></strong>, as well as follow Xubuntu tagged questions by <a href="https://askubuntu.com/feeds/tag/xubuntu">RSS feed</a>.<br></p>
   </div>
   <div>
      <h3>Other Platforms</h3>
      <p>Questions and answers, as well as general discussions, can be found on the <a href="https://www.reddit.com/r/xubuntu/">Xubuntu Reddit</a>.</p>
      <p><strong>Telegram</strong> users can find support help in the <a href="https://t.me/ubuntusupport">Ubuntu Support</a> and <a href="https://t.me/XubuntuSupport">Xubuntu Support</a> groups.</p>
   </div>
</section>
