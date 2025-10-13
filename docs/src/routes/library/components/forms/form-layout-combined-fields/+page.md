---
title: Gecombineerde velden
breadcrumb: Gecombineerde velden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Gecombineerde velden zijn invoervelden die samen met een knop of icoon worden
weergegeven.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-combined-field";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld; Invoerveld met icoonknop

<form action="">
  <div>
    <label for="voorbeeld-1-date-1-start">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
      <button><span class="icon icon-search"></span>Search</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="">
  <div>
    <label for="voorbeeld-1-date-1-start">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
      <button><span class="icon icon-search"></span>Search</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
