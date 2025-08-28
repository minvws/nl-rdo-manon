---
title: Tekstveld testpagina
breadcrumb: Tekstveld testpagina
---

<h1 id="introduction">Tekstveld - `textarea` testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <textarea id="voorbeeld-tekstveld-base" name="voorbeeld-tekstveld-base" rows="5"
  ></textarea>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <textarea id="voorbeeld-tekstveld-base" name="voorbeeld-tekstveld-base" rows="5"></textarea>
  <button type="submit">Verzend</button>
</form>
```

### Tekstveld gegroepeerd binnen `div`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-tekstveld-div">Bericht</label>
    <textarea id="voorbeeld-tekstveld-div" name="voorbeeld-tekstveld-div" rows="5"
    ></textarea>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-tekstveld-div">Bericht</label>
    <textarea id="voorbeeld-tekstveld-div" name="voorbeeld-tekstveld-div" rows="5"></textarea>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Tekstveld gegroepeerd binnen `section`

#### Visueel voorbeeld:

<form action="" method="post">
  <section>
    <label for="voorbeeld-tekstveld-section">Bericht</label>
    <textarea id="voorbeeld-tekstveld-section" name="voorbeeld-tekstveld-section" rows="5"
    ></textarea>
  </section>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <section>
    <label for="voorbeeld-tekstveld-section">Bericht</label>
    <textarea
      id="voorbeeld-tekstveld-section"
      name="voorbeeld-tekstveld-section"
      rows="5"
    ></textarea>
  </section>
  <button type="submit">Verzend</button>
</form>
```

### Tekstveld gegroepeerd binnen `fieldset`

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Tekstveld binnen een fieldset voorbeeld</legend>
    <label for="voorbeeld-tekstveld-fieldset">Bericht</label>
    <textarea id="voorbeeld-tekstveld-fieldset" name="voorbeeld-tekstveld-fieldset" rows="5"
    ></textarea>
  </fieldset>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Tekstveld binnen een fieldset voorbeeld</legend>
    <label for="voorbeeld-tekstveld-fieldset">Bericht</label>
    <textarea
      id="voorbeeld-tekstveld-fieldset"
      name="voorbeeld-tekstveld-fieldset"
      rows="5"
    ></textarea>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```
