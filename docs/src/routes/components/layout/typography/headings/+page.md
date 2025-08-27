---
title: Titel
breadcrumb: Titel
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Titels</h1>

Gebruik titels om structuur binnen de pagina aan te geven.

<h2 id="quickstart">Snelstart</h2>

```scss
/* Headings set */
@use "@minvws/manon/headings-base-set";

/* Headings */
@use "@minvws/manon/headings";
```

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Gebruik altijd een `h1` per pagina.
    </li>
    <li>
      Kies altijd het juiste titel-element uit `h1` &gt; `h6` op basis van de structuur in de HTML. Niet op basis van de visuele weergave.
    </li>
    <li>
      HTML-elementen h1 > h6 kunnen via de css voorzien worden van stijl. Voor meer informatie zie: [voorbeelden](#examples).
    </li>
    <li>
      Als niet ieder gelijkwaardig titel-element, bijvoorbeeld een h1, dezelfde visuele stijling gebruikt kan de stijl gezet worden door middel van een voorgedefineerde set. Binnen deze set worden de beschikbare "heading-styles" vastgelegd. Denk bijvoorbeeld aan een "heading-large" of een "heading-small". Voor meer informatie hierover zie: [Titel basisset](heading-base-set).
    </li>
  </ul>
</div>

<p class="warning">
  <strong>Let op:</strong> Eerder was het gebruik van meerdere `h1`'s per pagina toegestaan. Dit is
  gewijzigd in de HTML-specs van whatwg. Voor meer informatie hierover zie:
  <a href="https://github.com/whatwg/html/commit/6682bdeee6fb08f5972bea92064fe250f1b4ec9c">Commit van whatwg</a>.
</p>

<h2 id="examples">Voorbeelden:</h2>

<div class="visual-example">
  <h1>Dit is een h1</h1>
  <h2>Dit is een h2</h2>
  <h3>Dit is een h3</h3>
  <h4>Dit is een h4</h4>
  <h5>Dit is een h5</h5>
  <h6>Dit is een h6</h6>
</div>

```html
<h1>Dit is een h1</h1>
<h2>Dit is een h2</h2>
<h3>Dit is een h3</h3>
<h4>Dit is een h4</h4>
<h5>Dit is een h5</h5>
<h6>Dit is een h6</h6>
```
