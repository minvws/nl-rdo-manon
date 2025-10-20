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
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-combined-field";
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
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
