---
title: Navigatie
breadcrumb: Navigatie
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Navigatie verwijst naar de onderdelen van een website of app waarmee gebruikers zich door de inhoud kunnen bewegen, zoals menu’s, knoppen en links. Het zorgt voor een overzichtelijke en efficiënte gebruikerservaring.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/navigation";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: nav ul

<nav>
  <ul>
    <li><a href="#">Voorbeeld-link 1</a></li>
    <li><a href="#">Voorbeeld-link 2</a></li>
    <li><a href="#">Voorbeeld-link 3</a></li>
  </ul>
</nav>

```html
<nav>
  <ul>
    <li><a href="#">Voorbeeld-link 1</a></li>
    <li><a href="#">Voorbeeld-link 2</a></li>
    <li><a href="#">Voorbeeld-link 3</a></li>
  </ul>
</nav>
```

### Voorbeeld: nav ul horizontaal uitgelijnd

<nav>
    <ul class="horizontal">
        <li><a href="#">Voorbeeld-link 1</li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
    </ul>
</nav>

```html
<nav>
    <ul class="horizontal">
        <li><a href="#">Voorbeeld-link 1/a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
    </ul>
</nav>
```
