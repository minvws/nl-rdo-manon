---
title: overlay
breadcrumb: overlay
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voegt een overlay toe. Bijvoorbeeld bovenop de achtergrondafbeelding om de leesbaarheid van de tekst te vergroten.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/utility/overlay";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: div

<section id="introduction">
  <div class="content-wrapper">
    <h1 class="page-title heading-xxl">Lorem ipsum dolor set</h1>
    <h2>Consectetur adepicing elit</h2>
    <button>Aan de slag</button>
  </div>
  <div class="overlay horizontal-scroll">
    <img src="$img/strand.jpg" alt="Foto van een strand" class="image-background">
  </div>
</section>

```html
<div class="overlay">
  <img src="$img/strand.jpg" alt="Foto van een strand" class="image-background" />
</div>
```
