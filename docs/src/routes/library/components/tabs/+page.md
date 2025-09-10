---
title: Tabbladen
breadcrumb: Tabbladen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Tabbladen worden gebruikt om verschillende inhoudssecties op één pagina overzichtelijk te organiseren, waarbij de gebruiker tussen de tabs kan wisselen zonder van pagina te hoeven gaan.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/tabs";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Tabbladen

Voeg de class `tabs` toe aan de gewenste elementen.

<div class="tabs" id="tabs">
  <ul>
    <li><span aria-current="page">Optie 1</span></li>
    <li><a href="tabs">Optie 2</a></li>
    <li><a href="tabs">Optie 3</a></li>
    <li><a href="tabs">Optie 4</a></li>
  </ul>
</div>

```html
<div class="tabs">
  <ul>
    <li><span aria-current="page">Optie 1</span></li>
    <li><a href="#0">Optie 2</a></li>
    <li><a href="#0">Optie 3</a></li>
    <li><a href="#0">Optie 4</a></li>
  </ul>
</div>
```

### Voorbeeld: `aria-current` op `li`

<div class="tabs" id="li">
  <ul>
    <li aria-current="page"><span>Optie 1</span></li>
    <li><a href="#li">Optie 2</a></li>
    <li><a href="#li">Optie 3</a></li>
    <li><a href="#li">Optie 4</a></li>
  </ul>
</div>

```html
<div class="tabs">
  <ul>
    <li aria-current="page"><span>Optie 1</span></li>
    <li><a href="#0">Optie 2</a></li>
    <li><a href="#0">Optie 3</a></li>
    <li><a href="#0">Optie 4</a></li>
  </ul>
</div>
```
