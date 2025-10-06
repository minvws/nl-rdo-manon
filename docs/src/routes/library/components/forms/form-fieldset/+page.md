---
title: Fieldset
breadcrumb: Fieldset
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Met een fieldset kun je in HTML velden groeperen die bij elkaar horen. Daar hoort meestal een legend (titel) bij, die belangrijk is voor de toegankelijkheid.

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

Horizontaal uitgelijnd

<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Titel</legend>
    <div>
      <label for="example-input-base">Voorbeeld invoerveld</label>
      <input id="example-input-base" name="example-input-base" type="text" />
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Titel</legend>
    <div>
      <label for="example-input-base">Voorbeeld invoerveld</label>
      <input id="example-input-base" name="example-input-base" type="text" />
    </div>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```
