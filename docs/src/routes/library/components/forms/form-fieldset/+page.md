---
title: Fieldset
breadcrumb: Fieldset
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een fieldset gebruik je in HTML om gerelateerde velden in een formulier te groeperen. Vaak wordt dit gecombineerd met een legend (titel).

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
