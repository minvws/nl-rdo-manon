---
title: Accentkleur op formulierelementen
breadcrumb: Accentkleur op formulierelementen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het toevoegen van een accentknop op formulier-elementen zoals checkboxes, radio buttons, ranges etc.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form-accent-color";
```

<p class="warning" role="group" aria-label="waarschuwing">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing
  </span>
  Dit element maakt gebruik van een nieuw CSS component. Moderne
  browsers geven aan dit element te ondersteunen. Het kan zijn dat de weergave in oude
  browsers anders zal zijn. Voor meer informatie zie:
  <a href="https://caniuse.com/?search=accent-color" rel="external">caniuse.com</a>.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Selectievak - `checkbox`

<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked />
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

```html
<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Voorbeeld: Radioselectieknop - `radio`

<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio" checked />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

```html
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio" checked />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Voorbeeld: Voortgangsbalk

<form action="" method="post">
  <div class="horizontal">
    <label
      for="progress-example"
      role="progressbar"
      aria-busy="true"
      aria-labelledby="progess-example">Progress:</label
    >
    <progress id="progress-example" value="42" max="100">42%</progress>
  </div>
</form>

```html
<form action="" method="post">
  <div class="horizontal">
    <label
      for="progress-example"
      role="progressbar"
      aria-busy="true"
      aria-labelledby="progess-example"
      >Progress:</label
    >
    <progress id="progress-example" value="42" max="100">42%</progress>
  </div>
</form>
```

### Voorbeeld: Bereik - `range`

<form action="" method="post">
  <div class="horizontal">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100" />
  </div>
</form>

```html
<form action="" method="post">
  <div class="horizontal">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100" />
  </div>
</form>
```
