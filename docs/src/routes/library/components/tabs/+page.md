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

SCSS importeren:

```scss
@use "@minvws/manon/tabs";
```

JavaScript importeren:

```javascript
@use "@minvws/manon/js/tabs.js";
```

<h2 id="examples">Voorbeelden</h2>

<h3 id="interactive-component">Interactief component</h3>

Plaats de `<manon-tabs>` tags rondom een lijst met links en de bijbehorende inhoud. Gebruik `#fragment`-URLs om naar de inhoud te verwijzen, en geef de inhoud de corresponderende `id`'s.

<manon-tabs>
  <ul>
    <li><a href="#tabpanel-a">Tab A</a></li>
    <li><a href="#tabpanel-b">Tab B</a></li>
    <li><a href="#tabpanel-c">Tab C</a></li>
  </ul>

  <div id="tabpanel-a">
    Inhoud van Tab-paneel A.
  </div>

  <div id="tabpanel-b">
    Inhoud van Tab-paneel B.
  </div>

  <div id="tabpanel-c">
    Inhoud van Tab-paneel C.
  </div>
</manon-tabs>

```html
<manon-tabs>
  <ul>
    <li><a href="#tabpanel-a">Tab A</a></li>
    <li><a href="#tabpanel-b">Tab B</a></li>
    <li><a href="#tabpanel-c">Tab C</a></li>
  </ul>

  <div id="tabpanel-a">Inhoud van Tab-paneel A.</div>

  <div id="tabpanel-b">Inhoud van Tab-paneel B.</div>

  <div id="tabpanel-c">Inhoud van Tab-paneel C.</div>
</manon-tabs>
```

<h3 id="static-navigation">Statische navigatie</h3>

Voor deze aanpak hoeft de JavaScript-module niet geladen te worden. Voeg de class `tabs` toe aan een `<ul>`, of een element met een `<ul>` erin. Gebruik `aria-current="page"` op de link naar de huidige pagina.

<div class="tabs">
  <ul>
    <li><a href="tabs" aria-current="page">Optie 1</a></li>
    <li><a href="#">Optie 2</a></li>
    <li><a href="#">Optie 3</a></li>
    <li><a href="#">Optie 4</a></li>
  </ul>
</div>

```html
<div class="tabs">
  <ul>
    <li><a href="tabs" aria-current="page">Optie 1</a></li>
    <li><a href="#">Optie 2</a></li>
    <li><a href="#">Optie 3</a></li>
    <li><a href="#">Optie 4</a></li>
  </ul>
</div>
```
