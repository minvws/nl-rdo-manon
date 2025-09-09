---
title: Basisformulier
breadcrumb: Basisformulier
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Opzet voor een basis formulier.</p>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>

  <div>
    <span class="nota-bene" id="form-example-base-explanation"
      >Voorbeeld van een instructietekst
    </span>
    <input
      id="form-example-base"
      name="example-input-base"
      type="text"
      aria-describedby="form-example-base-explanation"
    />
  </div>

<button type="submit">Verzend</button>

</form>

```html
<form action="" method="post">
  <label for="example-input-base">Voorbeeld invoerveld</label>

  <div>
    <span class="nota-bene" id="form-example-base-explanation"
      >Voorbeeld van een instructietekst
    </span>
    <input
      id="example-input-base"
      name="example-input-base"
      type="text"
      aria-describedby="form-example-base-explanation"
    />
  </div>

  <button type="submit">Verzend</button>
</form>
```
