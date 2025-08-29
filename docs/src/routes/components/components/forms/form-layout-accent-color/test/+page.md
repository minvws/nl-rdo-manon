---
title: Accentkleur op formulierelementen testpagina
breadcrumb: Accentkleur op formulierelementen testpagina
---

<h1 id="introduction">Accentkleur op formulierelementen testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked />
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" checked />
    <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

#### Radioselectieknop - `radio`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-base" name="standaard-radio" checked />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-base" name="standaard-radio" checked />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

#### Voortgangsbalk

#### Visueel voorbeeld:

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

#### HTML-voorbeeld:

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

#### Bereik - `range`

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="horizontal">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100" />
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="horizontal">
    <label for="range-example">Range</label>
    <input type="range" id="range-example" name="range-example" min="0" max="100" />
  </div>
</form>
```
