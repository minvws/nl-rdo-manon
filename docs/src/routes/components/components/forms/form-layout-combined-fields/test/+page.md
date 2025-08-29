---
title: Gecombineerde testpagina
breadcrumb: Gecombineerde testpagina
---

<h1 id="introduction">Gecombineerde testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Gecombineerd invoerveld met `button`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-input-button">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-input-button" name="voorbeeld-input-button" type="text" />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-input-button">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-input-button" name="voorbeeld-input-button" type="text" />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Gecombineerde invoervelden

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="combined-field">
    <div>
      <label for="voorbeeld-combined-inputs-1">Ipsum</label>
      <input
        id="voorbeeld-combined-inputs-1"
        name="voorbeeld-combined-inputs-1"
        type="text"
      />
    </div>
    <div>
      <label for="voorbeeld-combined-inputs-2">Ipsum</label>
      <input
        id="voorbeeld-combined-inputs-2"
        name="voorbeeld-combined-inputs-2"
        type="text"
      />
    </div>
  </div>

<button type="submit">Verzend</button>

</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="combined-field">
    <div>
      <label for="voorbeeld-combined-inputs-1">Ipsum</label>
      <input id="voorbeeld-combined-inputs-1" name="voorbeeld-combined-inputs-1" type="text" />
    </div>
    <div>
      <label for="voorbeeld-combined-inputs-2">Ipsum</label>
      <input id="voorbeeld-combined-inputs-2" name="voorbeeld-combined-inputs-2" type="text" />
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
```
