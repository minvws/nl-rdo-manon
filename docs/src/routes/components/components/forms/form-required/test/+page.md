---
title: Verplichte testpagina
breadcrumb: Verplichte testpagina
---

<h1 id="introduction">Invoerveld verplicht testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Invoerveld verplicht

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-input-required-1">Ipsum</label>
  <div>
    <span class="nota-bene">Dit veld is verplicht</span>
    <input
      id="voorbeeld-input-required-1"
      name="voorbeeld-input-required-1"
      type="text"
      required
    />
  </div>
  <button type="submit">Verzend</button>
</form>

<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required-2">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required-2"
        name="voorbeeld-input-required-2"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

<form action="" method="post" class="horizontal">
  <div>
    <label for="voorbeeld-input-required-3">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required-3"
        name="voorbeeld-input-required-3"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post" class="horizontal">
  <div>
    <label for="voorbeeld-input-required-3">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required-3"
        name="voorbeeld-input-required-3"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Invoerveld verplicht

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required-5">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required-5"
        name="voorbeeld-input-required-5"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required-5">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required-5"
        name="voorbeeld-input-required-5"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
