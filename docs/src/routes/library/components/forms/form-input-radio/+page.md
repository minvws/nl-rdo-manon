---
title: Radio-selecteerknop - radio
breadcrumb: Radio-selecteerknop - radio
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Radio selecteerknop voor het selecteren van een optie binnen een set

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/radio";
@use "@minvws/manon/form-radio";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio" />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

```html
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio" />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Voorbeeld: Verplicht

<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="radio">
      <input
        type="radio"
        id="radio-button-example-required-1"
        name="voorwaarden"
        required
      />
      <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
    </div>
  </div>
</form>

```html
<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="required">
      <input type="radio" id="radio-button-example-required-1" name="voorwaarden" required />
      <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
    </div>
  </div>
</form>
```

### Voorbeeld: Uitgeschakeld

<form action="" method="post">
  <div class="radio">
    <input
      type="radio"
      id="radio-button-example-disabled"
      name="disabled-radio-button"
      disabled
    />
    <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>

```html
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-button-example-disabled" name="disabled-radio-button" disabled />
    <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```
