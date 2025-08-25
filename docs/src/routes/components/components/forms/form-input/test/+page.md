---
title: Invoerveld testpagina
breadcrumb: Invoerveld testpagina
---

<h1 id="introduction">Invoerveld testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Input direct binnen `form`

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-invoerveld-direct">Voorbeeld invoerveld</label>
  <input id="voorbeeld-invoerveld-direct" name="voorbeeld-invoerveld-direct" type="text" />
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-invoerveld-direct">Voorbeeld invoerveld</label>
  <input id="voorbeeld-invoerveld-direct" name="voorbeeld-invoerveld-direct" type="text" />
  <button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `div`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-invoerveld-div">Voorbeeld invoerveld</label>
    <input id="voorbeeld-invoerveld-div" name="voorbeeld-invoerveld-div" type="text" />
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-invoerveld-div">Voorbeeld invoerveld</label>
    <input id="voorbeeld-invoerveld-div" name="voorbeeld-invoerveld-div" type="text" />
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `section`

#### Visueel voorbeeld:

<form action="" method="post">
  <section>
    <label for="voorbeeld-invoerveld-section">Voorbeeld invoerveld</label>
    <input
      id="voorbeeld-invoerveld-section"
      name="voorbeeld-invoerveld-section"
      type="text"
    />
  </section>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <section>
    <label for="voorbeeld-invoerveld-section">Voorbeeld invoerveld</label>
    <input id="voorbeeld-invoerveld-section" name="voorbeeld-invoerveld-section" type="text" />
  </section>
  <button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `fieldset`

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Invoerveld test</legend>
    <label for="voorbeeld-invoerveld-fieldset">Voorbeeld invoerveld</label>
    <input
      id="voorbeeld-invoerveld-fieldset"
      name="voorbeeld-invoerveld-fieldset"
      type="text"
    />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Invoerveld test</legend>
    <label for="voorbeeld-invoerveld-fieldset">Voorbeeld invoerveld</label>
    <input id="voorbeeld-invoerveld-fieldset" name="voorbeeld-invoerveld-fieldset" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```
