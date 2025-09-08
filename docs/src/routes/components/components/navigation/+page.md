---
title: Navigatie
breadcrumb: Navigatie
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Navigatie</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/navigation";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: Navigatie-component met een lijst met links

<div class="resize">
  <iframe
    src="{base}/snippets/navigation-with-list-of-links"
    title="Voorbeeld"
    height="240px"
  ></iframe>
</div>

```html
<nav>
  <ul>
    <li><a href="#">Voorbeeld-link 1</a></li>
    <li><a href="#">Voorbeeld-link 2</a></li>
    <li><a href="#">Voorbeeld-link 3</a></li>
  </ul>
</nav>
```

### Voorbeeld: Navigatie-component met een horizontaal uitgelijnde lijst met links

<div class="resize">
  <iframe src="{base}/snippets/navigation-with-horizontal" title="Voorbeeld" height="240px"
  ></iframe>
</div>

```html
<nav>
    <ul class="horizontal">
        <li><a href="#">Voorbeeld-link 1/a></li>
        <li><a href="#">Voorbeeld-link 2</a></li>
        <li><a href="#">Voorbeeld-link 3</a></li>
    </ul>
</nav>
```
