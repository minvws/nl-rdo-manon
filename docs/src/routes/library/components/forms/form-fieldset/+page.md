---
title: Fieldset
breadcrumb: Fieldset
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Fieldset</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/fieldset";
```

<h2 id="examples">Voorbeelden</h2>

#### Voorbeeld: Basis

<form action="" method="post">
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input id="example-input-base" name="example-input-base" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input id="example-input-base" name="example-input-base" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```
