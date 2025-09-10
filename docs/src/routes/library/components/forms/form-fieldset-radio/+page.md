---
title: Fieldset Radio-selecteerknop - radio
breadcrumb: Fieldset Radio-selecteerknop - radio
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Fieldset Radio-selecteerknop - radio

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form-fieldset-radio";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="radio">
      <input type="radio" id="radio-example-base" name="standaard-radio" />
      <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="radio">
      <input type="radio" id="radio-example-base" name="standaard-radio" />
      <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

### Voorbeeld: Verplicht

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="required">
      <span class="nota-bene">Dit veld is verplicht</span>
      <div class="radio">
        <input type="radio" id="radio-example-required-1" name="voorwaarden" required />
        <label for="radio-example-required-1">verplicht Radio-selecteerknop</label>
      </div>
    </div>
  </fieldset>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="required">
      <span class="nota-bene">Dit veld is verplicht</span>
      <div class="radio">
        <input type="radio" id="radio-example-required-1" name="voorwaarden" required />
        <label for="radio-example-required-1">verplicht Radio-selecteerknop</label>
      </div>
    </div>
  </fieldset>
</form>
```

### Voorbeeld: Uitgeschakeld

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="radio">
      <input type="radio" id="radio-example-disabled" name="disabled-radio" disabled />
      <label for="radio-example-disabled">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="radio">
      <input type="radio" id="radio-example-disabled" name="disabled-radio" disabled />
      <label for="radio-example-disabled">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

### Voorbeeld: Lijst

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="radio">
      <input type="radio" id="radio-example-list-1" name="standaard-radio" />
      <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-list-2" name="standaard-radio" />
      <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-list-3" name="standaard-radio" />
      <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-list-4" name="standaard-radio" />
      <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
    </div>

  </fieldset>
</form>

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="radio">
      <input type="radio" id="radio-example-list-1" name="standaard-radio" />
      <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-list-2" name="standaard-radio" />
      <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-list-3" name="standaard-radio" />
      <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-list-4" name="standaard-radio" />
      <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

### Voorbeeld: Lijst met "label"

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <fieldset>
      <legend>List label</legend>
      <div class="radio">
        <input type="radio" id="radio-example-list-label-1" name="standaard-radio" />
        <label for="radio-example-list-label-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-label-2" name="standaard-radio" />
        <label for="radio-example-list-label-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-label-3" name="standaard-radio" />
        <label for="radio-example-list-label-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-label-4" name="standaard-radio" />
        <label for="radio-example-list-label-4">Lorem ipsum dolor sit amet</label>
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
      <div class="radio">
        <input type="radio" id="radio-example-list-label-1" name="standaard-radio" />
        <label for="radio-example-list-label-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-label-2" name="standaard-radio" />
        <label for="radio-example-list-label-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-label-3" name="standaard-radio" />
        <label for="radio-example-list-label-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-label-4" name="standaard-radio" />
        <label for="radio-example-list-label-4">Lorem ipsum dolor sit amet</label>
      </div>
    </fieldset>
  </fieldset>
</form>
```
