---
title: Gecombineerde velden
breadcrumb: Gecombineerde velden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Gecombineerde velden zijn invoervelden die samen met een knop of icoon worden
weergegeven.</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-combined-field";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld; Invoerveld met icoonknop

<form action="" method="post">
  <div>
    <label for="voorbeeld-1-date-1-start">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-1-date-1-start">Ipsum</label>
    <div class="combined-field">
      <input
        id="voorbeeld-1-date-1-start"
        name="voorbeeld-1-date-1-start"
        type="text"
      />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
