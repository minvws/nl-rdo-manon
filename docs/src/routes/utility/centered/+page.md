---
title: Layout gecentreerd
breadcrumb: "Layout gecentreerd"
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Layout gecentreerd</h1>

Centreerd de inhoud van het element op zowel de horizontale als de verticale as.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout-base";
@use "@minvws/manon/layout-centered";
```

<h2 id="examples">Voorbeelden</h2>

<div class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</div>

```html
<div class="centered">
  <h1>Lorem ipsum</h1>
  <p>Dolor sit amet.</p>
</div>
```

<p class="explanation">
  <span>Toelichting:</span> de inhoud van het blok wordt
  gecenteerd. Als de inhoud 100% breed is kan het lijken alsof deze helper niet
  werkt. Pas in dat geval de breedte van de onderliggende elementen aan of kies
  een andere geschikte layout. Tekst binnen de elementen wordt niet gecentreerd.
</p>
