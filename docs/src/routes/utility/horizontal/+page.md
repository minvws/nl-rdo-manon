---
title: horizontal
breadcrumb: horizontal
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Het horizontaal uitlijnen van elementen binnen een container. Dit kan handig
zijn voor het uitlijnen van knoppen, formulieren of andere elementen die naast
elkaar moeten staan.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/horizontal";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Horizontaal uitgelijnd

<div class="horizontal">
  <button class="ghost">Terug</button>
  <button>Verder</button>
</div>

```html
<div class="horizontal">
  <!-- horizontaal uit te lijnen content -->
  <button class="ghost">Terug</button>
  <button>Verder</button>
</div>
```

Voeg de class `horizontal` toe op het horizontaal uit te lijnen element.

### Voorbeeld: Object met horizontaal uitgelijnde elementen

<div class="horizontal-group" id="horizontal-group">
  <div>
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>

  <div>
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>
</div>

```html
<div class="horizontal-group">
  <div>
    <!-- horizontaal uit te lijnen content -->
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>

  <div>
    <!-- horizontaal uit te lijnen content -->
    <button class="ghost">Terug</button>
    <button>Verder</button>
  </div>
</div>
```

Voor het horizontaal uitlijnen van meerdere objecten binnen een element voeg de
class `horizontal-group` toe.
