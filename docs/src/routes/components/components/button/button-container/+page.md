---
title: Knoppen groeperen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Knoppen groeperen</h1>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/button-container";
```

<div class="warning" role="group" aria-label="Waarschuwing">
  <span>Let op:</span>
  <p>
    De volgorde waarin de componenten geïmporteerd worden is belangrijk. Dit
    component moet <strong>na</strong> de overige
    <code>button-</code>componenten geïmporteerd worden.
  </p>
</div>

<h2 id="examples">Voorbeelden</h2>

<div class="button-container">
  <button>Eerste knop</button>
  <button>Tweede knop</button>
</div>

```html
<div class="button-container">
  <button>Eerste knop</button>
  <button>Tweede knop</button>
</div>
```
