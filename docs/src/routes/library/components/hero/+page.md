---
title: Hero
breadcrumb: Hero
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een hero-sectie kan gebruikt worden als visuele introducti of eye cather op een pagina.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/hero";
```

<h2 id="examples">Voorbeelden:</h2>

<div class="resize">
  <iframe src="/snippets/hero" title="Voorbeeld" height="400px"></iframe>
</div>

```html
<section class="hero">
  <div class="image-background">
    <img src="$img/strand.jpg" alt="Foto van een strand" />
  </div>
  <div class="content-wrapper">
    <h1>Hero title</h1>
  </div>
</section>
```
