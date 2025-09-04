---
title: centered
breadcrumb: "centered"
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

Centreerd de inhoud van het element op zowel de horizontale als de verticale as.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/layout";
@use "@minvws/manon/layout-centered";
```

<h2 id="examples">Voorbeelden</h2>

<div class="centered">
  <h2>Lorem ipsum</h2>
  <p>Dolor sit amet.</p>
</div>

```html
<div class="centered">
  <h2>Lorem ipsum</h2>
  <p>Dolor sit amet.</p>
</div>
```

<p class="warning">
  <span>Waarschuwing:</span> de inhoud van het blok wordt
  gecenteerd. Als de inhoud de volle breedte inneemt kan het lijken alsof het centreren niet
  werkt. Pas in dat geval de breedte van de onderliggende elementen aan of kies
  een andere geschikte layout. Tekst genest binnen de elementen wordt niet gecentreerd.
</p>
