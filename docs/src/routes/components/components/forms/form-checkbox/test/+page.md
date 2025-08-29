---
title: Selectievak testpagina
breadcrumb: Selectievak testpagina
---

<h1 id="introduction">Selectievak testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

#### Basis

<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-1" name="standaard-checkbox" />
    <label for="checkbox-example-1">Lorem ipsum dolor sit amet</label>
  </div>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-1" name="standaard-checkbox" />
    <label for="checkbox-example-1">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

#### Verplicht

<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-required-1" name="voorwaarden" required />
      <label for="checkbox-example-required-1">verplicht selectievak</label>
    </div>
  </div>
</form>

### HTML-voorbeeld:

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

#### Uitgeschakeld

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

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="checkbox">
    <input type="checkbox" id="checkbox-example-disabled" name="disabled-checkbox" disabled />
    <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

#### Lijst

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

### HTML-voorbeeld:

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

### HTML-voorbeeld:

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

#### Met nota-bene

<form action="" method="post">
  <div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-2" name="standaard-checkbox" />
      <label for="checkbox-example-2">Lorem ipsum dolor sit amet</label>
    </div>
    <span class="nota-bene">Lorem ipsum dolor sit amet.</span>
  </div>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-2" name="standaard-checkbox" />
      <label for="checkbox-example-2">Lorem ipsum dolor sit amet</label>
    </div>
    <span class="nota-bene">Lorem ipsum dolor sit amet.</span>
  </div>
</form>
```
