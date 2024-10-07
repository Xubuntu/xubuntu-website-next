---
layout: default
---

<section class="columns-3">
   <div>
      <h3>Smooth experience</h3>
      <p>Xubuntu delivers a smooth and unified user experience with an elegant look from the boot to the shutdown with all aspects integrated to one.</p>
   </div>
   <div>
      <h3>Lightweight</h3>
      <p>Perfect for those who want to make the most of their machines with enough features for efficient, daily usage.</p>
   </div>
   <div>
      <h3>Configurable</h3>
      <p>Helps you accomplish tasks rather than being in your way. Modular and highly configurable to suit various needs.</p>
   </div>
</section>
<hr />
<section class="columns-2">
   {%- capture help -%}
      <h3>Need help?</h3>
      <p>User documentation is shipped with each version of Xubuntu. For further assistance, check all available support methods.</p>
      <p><a class="quo" href="{{ "/help" | relative_url }}">Support</a></p>
   {%- endcapture -%}
   {%- include icon-content.html icon="help" content=help -%}

   {%- capture community -%}
      <h3>Join our community</h3>
      <p>Xubuntu is created by volunteers.<br />Read more on how you can get involved and help us make Xubuntu even better!</p>
      <p><a class="quo" href="{{ "/contribute" | relative_url }}">Get Involved</a></p>
   {%- endcapture -%}
   {%- include icon-content.html icon="community" content=community -%}
</section>

<section class="wide alternative-bg">
   <section class="columns-1-2">
      <h3>Latest Release</h3>
      <h3>Latest News</h3>
   </section>
   <section class="columns-1-2">
      {%- assign latest_release = site.releases | sort_natural: 'version' | reverse | first -%}
      <div class="latest-release featured">
         <h4>{{ latest_release.title }}</h4>
         <p>
            Released on {{ latest_release.date_rel | date: site.date_format }}<br />
            Supported until {{ latest_release.date_eol | date: site.date_format }}
         </p>
         <p>
            <a class="quo" href="{{ latest_release.url | relative_url }}">Read more</a><br />
            <a class="quo" href="{{ "/releases" | relative_url }}">All releases</a><br />
         </p>
      </div>
      <section class="article-list columns-2">
         {%- assign latest_news = site.posts -%}
         {%- for news in latest_news limit:2 -%}
            <div class="featured">
               <h4>{{ news.title }}</h4>
               <p>{{ news.excerpt }}</p>
               <p><a class="quo" href="{{ news.url | relative_url }}">Read more</a></p>
            </div>
         {%- endfor -%}
      </section>
   </section>
</section>
