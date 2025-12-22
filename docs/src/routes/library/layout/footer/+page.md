---
title: Footer
breadcrumb: Footer
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de
gebruiker dat het einde van de pagina bereikt is.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/footer";
```

<h2 id="examples">Voorbeelden:</h2>

<div class="resize icore-open">
  <iframe src="/snippets/footer/icore-open" title="Voorbeeld"></iframe>
</div>

<div class="resize rijkshuisstijl-2008">
  <iframe src="/snippets/footer/rijkshuisstijl-2008" title="Voorbeeld"></iframe>
</div>

<div class="resize kat">
  <iframe src="/snippets/footer/kat" title="Voorbeeld"></iframe>
</div>


<div class="icore-open">
  <pre>
    <code>
&lt;footer class="icore-open">
  &lt;span class="slogan">Manon - iCore Open thema&lt;/span>
  &lt;nav aria-label="main navigation">
    &lt;ul>
      &lt;li>&lt;a href="#" aria-current="page">Dolor&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Sit&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Amet&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/nav>
&lt;/footer>
    </code>
  </pre>
</div>

<div class="rijkshuisstijl-2008">
  <pre>
    <code>
&lt;footer>
  &lt;span class="slogan">Manon - Rijksoverheid 2008 thema&lt;/span>
  &lt;nav aria-labelledby="footer-nav-1-heading">
    &lt;h3 id="footer-nav-1-heading">Lorem ipsum&lt;/h3>
    &lt;ul>
      &lt;li>&lt;a href="#" aria-current="page">Dolor&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Sit&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#">Amet&lt;/a>&lt;/li>
    &lt;/ul>
  &lt;/nav>
&lt;/footer>
    </code>
  </pre>
</div>

<div class="kat">
  <pre>
    <code>
&lt;footer>
  &lt;div class="content-wrapper">
    &lt;span class="slogan">Manon - KAT thema&lt;/span>
    &lt;nav aria-label="Main navigation">
      &lt;ul>
        &lt;li>&lt;a href="#" aria-current="page">Dolor&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Sit&lt;/a>&lt;/li>
        &lt;li>&lt;a href="#">Amet&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/nav>
  &lt;/div>
&lt;/footer>
    </code>
  </pre>
</div>
