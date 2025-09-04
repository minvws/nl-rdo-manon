---
title: Titel basisset
breadcrumb: Titel basisset
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Basisset voor het stylen van titels.</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/heading-base-set";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: HTML-element stijling ingesteld via CSS voorbeeld

<div class="visual-example">
  <h1>h1 met weergave heading XXL</h1>
  <h2>h2 met weergave heading XL</h2>
  <h3>h3 met weergave heading Large</h3>
  <h4>h4 met weergave heading Normal</h4>
  <h5>h5 met weergave heading Small</h5>
  <h6>h6 met weergave heading XS</h6>
</div>

```html
<h1>h1 met weergave heading XXL</h1>
<h2>h2 met weergave heading XL</h2>
<h3>h3 met weergave heading Large</h3>
<h4>h4 met weergave heading Normal</h4>
<h5>h5 met weergave heading Small</h5>
<h6>h6 met weergave heading XS</h6>
```

### Voorbeeld: Class gebruiken binnen de HTML

Dit voorbeeld maakt gebruik van de classes uit deze set direct op de
HTML-elementen. Dit is een geschikte manier voor uitzonderingen.

Beschikbare opties:

- heading-xxl
- heading-xl
- heading-large
- heading-normal
- heading-small
- heading-xs

<p class="warning">
  <span>Waarschuwing:</span> Waar mogelijk is het altijd aan te raden zo min mogelijk classes
  te gebruiken maar om gebruik te maken van het overerven van CSS. Maar omdat een uitzondering
  soms nodig is, is het mogelijk om de titelweergaven ook direct in de html te kunnen definiëren
  door middel van een classes.
</p>

<div class="visual-example">
  <h3 class="heading-xxl">Heading XXL</h3>
  <h3 class="heading-xl">Heading XL</h3>
  <h3 class="heading-large">Heading Large</h3>
  <h3 class="heading-normal">Heading Normal</h3>
  <h3 class="heading-small">Heading Small</h3>
  <h3 class="heading-xs">Heading XS</h3>
</div>

```html
<h3 class="heading-xxl">Heading XXL</h3>
<h3 class="heading-xl">Heading XL</h3>
<h3 class="heading-large">Heading Large</h3>
<h3 class="heading-normal">Heading Normal</h3>
<h3 class="heading-small">Heading Small</h3>
<h3 class="heading-xs">Heading XS</h3>
```
