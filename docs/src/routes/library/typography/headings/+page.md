---
title: Titel
breadcrumb: Titel
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Gebruik titels om structuur binnen de pagina aan te geven.

<h2 id="quickstart">Snelstart</h2>

```scss
/* Headings set */
@use "@minvws/manon/components/headings-base-set";

/* Headings */
@use "@minvws/manon/components/headings";
```

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

Kies altijd het juiste titel-element uit `h1` > `h6` op basis van de structuur in de HTML. De visuele weergaven van de headers kan waar nodig aangepast worden met een heading-class.

Voeg heading-base-set toe aan je applicatie om gebruik te maken van deze uitzonderingen.

Beschikbare opties:

- heading-xxl
- heading-xl
- heading-large
- heading-normal
- heading-xs

```scss
@use "@minvws/manon/components/headings-base-set";
```

<div class="visual-example">
  <h2>Dit is een h2</h2>
  <h2 class="heading-xs">Dit is ook een h2 maar visueel kleiner weergegeven.</h2>
</div>

```html
<h2>Dit is een h2</h2>
<h2 class="heading-xs">Dit is ook een h2 maar visueel kleiner weergegeven.</h2>
```
