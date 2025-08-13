---
title: Email
breadcrumb: Email
---

<h1 id="introduction">Email</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-email-base">Email</label>
  <input id="voorbeeld-email-base" name="voorbeeld-email-base" type="email" />
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
<label for="voorbeeld-email-base">Email</label>
<input id="voorbeeld-email-base" name="voorbeeld-email-base" type="email">
<button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `div`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-email-div">Email</label>
    <input id="voorbeeld-email-div" name="voorbeeld-email-div" type="email" />
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
<div>
<label for="voorbeeld-email-div">Email</label>
<input id="voorbeeld-email-div" name="voorbeeld-email-div" type="email">
</div>
<button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `section`

#### Visueel voorbeeld:

<form action="" method="post">
  <section>
    <label for="voorbeeld-email-section">Email</label>
    <input id="voorbeeld-email-section" name="voorbeeld-email-section" type="email" />
  </section>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
<section>
<label for="voorbeeld-email-section">Email</label>
<input id="voorbeeld-email-section" name="voorbeeld-email-section" type="email">
</section>
<button type="submit">Verzend</button>
</form>
```

### Input en label gegroepeerd binnen een `fieldset`

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Voorbeeld emailveld</legend>
    <label for="voorbeeld-email-fieldset">Email</label>
    <input id="voorbeeld-email-fieldset" name="voorbeeld-email-fieldset" type="email" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
<fieldset>
<legend>Voorbeeld emailveld</legend>
<label for="voorbeeld-email-fieldset">Email</label>
<input id="voorbeeld-email-fieldset" name="voorbeeld-email-fieldset" type="email">
</fieldset>
<button type="submit">Verzend</button>
</form>
```
