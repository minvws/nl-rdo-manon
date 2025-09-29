---
title: Image background
breadcrumb: Image background
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Achtergrond-afbeelding die de volledige breedte en hoogte van het uitgekozen object vult.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/image-background";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: div

<div >
  <h2>Lorem ipsum</h2>
  <img src="$img/strand.jpg" alt="Foto van een strand" class="image-background">
</div>

```html
<div class="image-background">
  <h2>Lorem ipsum</h2>
  <img src="$img/strand.jpg" alt="Foto van een strand" class="image-background" />
</div>
```
