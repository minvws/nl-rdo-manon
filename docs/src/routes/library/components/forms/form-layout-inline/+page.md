---
title: "inline-formulier"
breadcrumb: "inline-formulier"
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

In sommige gevallen is er om technische redenen een formulier nodig rondom een
knop maar is het niet nodig om deze visueel binnen een formulier te plaatsen.
Voor die situaties is dit voorbeeld geschikt.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-inline";
```

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Voorbeeld: Basis

<form>
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input id="example-input-base" name="example-input-base" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

```html
<form>
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input id="example-input-base" name="example-input-base" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: inline formulier

<form class="inline">
  <button type="submit">Verzend</button>
</form>

```html
<form class="inline">
  <button type="submit">Verzend</button>
</form>
```