---
title: Datum
breadcrumb: Datum
---

<h1 id="introduction">Datum</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="color-input-base">Selecteer de gewenste kleur</label>
  <input id="color-input-base" name="color-input-base" type="color" value="#ffffff" />

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="color-input-base">Selecteer de gewenste kleur</label>
  <input id="color-input-base" name="color-input-base" type="color" value="#ffffff">

  <button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `div`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="color-input-div">Selecteer de gewenste kleur</label>
    <input id="color-input-div" name="color-input-div" type="color" value="#ffffff" />
  </div>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="color-input-div">Selecteer de gewenste kleur</label>
    <input id="color-input-div" name="color-input-div" type="color" value="#ffffff">
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `section`

#### Visueel voorbeeld:

<form action="" method="post">
  <section>
    <label for="color-input-section">Selecteer de gewenste kleur</label>
    <input
      id="color-input-section"
      name="color-input-section"
      type="color"
      value="#ffffff"
    />
  </section>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <section>
    <label for="color-input-section">Selecteer de gewenste kleur</label>
    <input id="color-input-section" name="color-input-section" type="color" value="#ffffff">
  </section>

  <button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `fieldset`

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Kleurselector volledig gevuld voorbeeld</legend>
    <label for="color-input-fieldset">Selecteer de gewenste kleur</label>
    <input
      id="color-input-fieldset"
      name="color-input-fieldset"
      type="color"
      value="#ffffff"
    />
  </fieldset>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Kleurselector volledig gevuld voorbeeld</legend>
    <label for="color-input-fieldset">Selecteer de gewenste kleur</label>
    <input id="color-input-fieldset" name="color-input-fieldset" type="color" value="#ffffff">
  </fieldset>

  <button type="submit">Verzend</button>
</form>
```
