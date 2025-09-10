---
title: Dropdown button
breadcrumb:
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Knop met openklapbaar menu.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/dropdown";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/collapsible.js";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `button`

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible dropdown"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="/library/components/collapsible">Item 1</a></li>
      <li><a href="/library/components/collapsible">Huidige selectie</a></li>
      <li><a href="/library/components/collapsible">a</a></li>
    </ul>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible dropdown"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="/library/components/collapsible">Item 1</a></li>
      <li>
        <a href="/library/components/collapsible">Huidige selectie</a>
      </li>
      <li><a href="/library/components/collapsible">a</a></li>
    </ul>
  </div>
</div>
```

### Voorbeeld: Meerdere openklapbare knoppen

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="/library/components/collapsible">Item 1</a></li>
          <li><a href="/library/components/collapsible">Huidige selectie</a></li>
          <li><a href="/library/components/collapsible">Item 3</a></li>
      </ul>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="#0">Item 1</a></li>
      <li><a href="#0">Huidige selectie</a></li>
      <li><a href="#0">Item 3</a></li>
    </ul>
  </div>
</div>
```
