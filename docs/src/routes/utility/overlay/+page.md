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

### Voorbeeld: Hero

<div class="resize">
  <iframe src="/snippets/hero-overlay" title="Voorbeeld"></iframe>
</div>

```html
<main>
  <section class="hero">
    <span class="overlay"></span>
    <div class="image-background">
      <img src="$img/strand.jpg" alt="Foto van een strand" />
    </div>
    <div class="content-wrapper">
      <h1 class="page-title heading-l">Lorem ipsum dolor sit</h1>
      <p>Consectetur adepicing elit</p>
      <button>Aan de slag</button>
    </div>
  </section>
</main>
```
