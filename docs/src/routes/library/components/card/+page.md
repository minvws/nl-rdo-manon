---
title: Kaart
breadcrumb: Kaart
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een kaart groepeert gerelateerde informatie in één duidelijk visueel blok, zodat de inhoud overzichtelijk en herkenbaar is.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/card";
```

<h2 id="examples">Voorbeelden</h2>

<div class="card" role="group" aria-label="Voorbeeldkaart">
  <h2 class="heading-xs">Title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Dolor sit</li>
  </ul>
  <button>Lorem ipsum</button>
</div>

```html
<div class="card" role="group" aria-label="Voorbeeldkaart">
  <h2 class="heading-xs">Title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Dolor sit</li>
  </ul>
  <button>Lorem ipsum</button>
</div>
```

<div class="column-3">
  <div class="card" role="group" aria-label="Voorbeeldkaart">
    <h2 class="heading-xs">Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Lees meer</a>
  </div>

  <div class="card" role="group" aria-label="Voorbeeldkaart">
    <h2 class="heading-xs">Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Lees meer</a>
  </div>

  <div class="card" role="group" aria-label="Voorbeeldkaart">
    <h2 class="heading-xs">Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Lees meer</a>
  </div>
</div>

```html
<div class="column-3">
  <div class="card" role="group" aria-label="Voorbeeldkaart">
    <h2 class="heading-xs">Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Lees meer</a>
  </div>

  <div class="card" role="group" aria-label="Voorbeeldkaart">
    <h2 class="heading-xs">Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Lees meer</a>
  </div>

  <div class="card" role="group" aria-label="Voorbeeldkaart">
    <h2 class="heading-xs">Title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Lees meer</a>
  </div>
</div>
```
