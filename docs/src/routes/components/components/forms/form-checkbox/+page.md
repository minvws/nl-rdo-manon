---
title: Selectievak - checkbox
breadcrumb: Selectievak - checkbox
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Selectievak - `checkbox`</h1>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/checkbox";
@use "@minvws/manon/form-checkbox";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
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

### Voorbeeld: Verplicht

<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-required-1" name="voorwaarden" required />
      <label for="checkbox-example-required-1">verplicht selectievak</label>
    </div>
  </div>
</form>

```html
<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-required-1" name="voorwaarden" required />
      <label for="checkbox-example-required-1">verplicht selectievak</label>
    </div>
  </div>
</form>
```

### Voorbeeld: Uitgeschakeld

<form action="" method="post">
  <div class="checkbox">
    <input
      type="checkbox"
      id="checkbox-example-disabled"
      name="disabled-checkbox"
      disabled
    />
    <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>

```html
<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-disabled" name="disabled-checkbox" disabled />
    <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Voorbeeld: Lijst

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-1" name="standaard-checkbox" />
      <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-2" name="standaard-checkbox" />
      <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-3" name="standaard-checkbox" />
      <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-4" name="standaard-checkbox" />
      <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
    </div>

  </fieldset>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-1" name="standaard-checkbox" />
      <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-2" name="standaard-checkbox" />
      <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-3" name="standaard-checkbox" />
      <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-4" name="standaard-checkbox" />
      <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

#### Lijst met "label"

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <fieldset>
      <legend>List label</legend>
      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-1"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-2"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-3"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-4"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-4">Lorem ipsum dolor sit amet</label>
      </div>
    </fieldset>

  </fieldset>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <fieldset>
      <legend>List label</legend>
      <div class="checkbox">
        <input type="checkbox" id="checkbox-example-list-label-1" name="standaard-checkbox" />
        <label for="checkbox-example-list-label-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input type="checkbox" id="checkbox-example-list-label-2" name="standaard-checkbox" />
        <label for="checkbox-example-list-label-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input type="checkbox" id="checkbox-example-list-label-3" name="standaard-checkbox" />
        <label for="checkbox-example-list-label-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input type="checkbox" id="checkbox-example-list-label-4" name="standaard-checkbox" />
        <label for="checkbox-example-list-label-4">Lorem ipsum dolor sit amet</label>
      </div>
    </fieldset>
  </fieldset>
</form>
```
