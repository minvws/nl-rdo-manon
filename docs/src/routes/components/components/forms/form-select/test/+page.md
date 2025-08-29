---
title: Selectielijst testpagina
breadcrumb: Selectielijst testpagina
---

<h1 id="introduction">Selectielijst - `select` testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
```

### Selectielijst gegroepeerd binnen `div`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="select-div">Selectielijst</label>
    <select id="select-div" name="select-div">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="select-div">Selectielijst</label>
    <select id="select-div" name="select-div">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Selectielijst gegroepeerd binnen `div` horizontaal uitgelijnd

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="horizontal">
    <label for="select-div-horizontal">Selectielijst</label>
    <select id="select-div-horizontal" name="select-div-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="horizontal">
    <label for="select-div-horizontal">Selectielijst</label>
    <select id="select-div-horizontal" name="select-div-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Selectielijst binnen `section`

#### Visueel voorbeeld:

<form action="" method="post">
  <section>
    <label for="select-section">Selectielijst</label>
    <select id="select-section" name="select-section">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </section>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <section>
    <label for="select-section">Selectielijst</label>
    <select id="select-section" name="select-section">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </section>

  <button type="submit">Verzend</button>
</form>
```

### Selectielijst gegroepeerd binnen `section` horizontaal uitgelijnd

#### Visueel voorbeeld:

<form action="" method="post">
  <section class="horizontal">
    <label for="select-section-horizontal">Selectielijst</label>
    <select id="select-section-horizontal" name="select-section-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </section>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <section class="horizontal">
    <label for="select-section-horizontal">Selectielijst</label>
    <input
      type="range"
      id="range-example-section-horizontal"
      name="range-example-section-horizontal"
      min="0"
      max="100"
    />
  </section>

  <button type="submit">Verzend</button>
</form>
```

### Selectielijst binnen `fieldset`

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Selectielijst binnen een fieldset voorbeeld</legend>
    <label for="select-fieldset">Selectielijst</label>
    <select id="select-fieldset" name="select-fieldset">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </fieldset>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Selectielijst binnen een fieldset voorbeeld</legend>
    <label for="select-fieldset">Selectielijst</label>
    <select id="select-fieldset" name="select-fieldset">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
```

### Selectielijst gegroepeerd binnen `fieldset` horizontaal uitgelijnd

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Selectielijst binnen een fieldset voorbeeld</legend>
    <div class="horizontal">
      <label for="select-fieldset-horizontal">Selectielijst</label>
      <select id="select-fieldset-horizontal" name="select-fieldset-horizontal">
        <option value="1">Optie 1</option>
        <option value="2">Optie 2</option>
        <option value="3">Optie 3</option>
      </select>
    </div>
  </fieldset>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Selectielijst binnen een fieldset voorbeeld</legend>
    <div class="horizontal">
      <label for="select-fieldset-horizontal">Selectielijst</label>
      <select id="select-fieldset-horizontal" name="select-fieldset-horizontal">
        <option value="1">Optie 1</option>
        <option value="2">Optie 2</option>
        <option value="3">Optie 3</option>
      </select>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
```

<h3 id="form-dropdown-required">Verplicht</h3>

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-required">Verplichte selectielijst</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <select id="select-required" name="select-required" required>
    <option value="">--Please choose an option--</option>
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

<button type="submit">Verzend</button>

</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-required">Verplichte selectielijst</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <select id="select-required" name="select-required" required>
    <option value="">--Please choose an option--</option>
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
```

<h3 id="form-dropdown-disabled">Uitgeschakeld</h3>

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-disabled-1">Uitgeschakelde selectielijst</label>
  <select disabled id="select-disabled-1" name="select-disabled-1">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

<button type="submit">Verzend</button>

</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-disabled">Uitgeschakelde selectielijst</label>
  <select disabled id="select-disabled" name="select-disabled">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
```

<h3 id="form-dropdown-selected">Voorgeselecteerde optie</h3>

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-selected-1">Selectielijst met voorgeselecteerde optie</label>
  <select id="select-selected-1" name="select-selected-1">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="Voorgeselecteerd" selected>Voorgeselecteerd</option>
  </select>

<button type="submit">Verzend</button>

</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-selected">Selectielijst met voorgeselecteerde optie</label>
  <select id="select-selected" name="select-selected">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="Voorgeselecteerd" selected>Voorgeselecteerd</option>
  </select>

  <button type="submit">Verzend</button>
</form>
```

<h3 id="form-dropdown-optgroup">Gegroepeerde opties</h3>

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-optgroup-1">Gegroepeerde opties</label>
  <select id="select-optgroup-1" name="select-optgroup-1">
    <optgroup label="Rollende objecten">
      <option value="Bal">Bal</option>
      <option value="Wiel">Wiel</option>
      <option value="Knikker">Knikker</option>
    </optgroup>

    <optgroup label="Slecht rollende objecten">
      <option value="Aambeeld">Aambeeld</option>
      <option value="Eiffeltoren">Eiffeltoren</option>
      <option value="Dinosaurus">Dinosaurus</option>
    </optgroup>

  </select>

<button type="submit">Verzend</button>

</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-optgroup">Gegroepeerde opties</label>
  <select id="select-optgroup" name="select-optgroup">
    <optgroup label="Rollende objecten">
      <option value="Bal">Bal</option>
      <option value="Wiel">Wiel</option>
      <option value="Knikker">Knikker</option>
    </optgroup>

    <optgroup label="Slecht rollende objecten">
      <option value="Aambeeld">Aambeeld</option>
      <option value="Eiffeltoren">Eiffeltoren</option>
      <option value="Dinosaurus">Dinosaurus</option>
    </optgroup>
  </select>

  <button type="submit">Verzend</button>
</form>
```
