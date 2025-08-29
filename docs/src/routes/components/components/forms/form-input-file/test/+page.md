---
title: Bestand testpagina
breadcrumb: Bestand testpagina
---

<h1 id="introduction">Bestand testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <label for="file-example-base">Upload bestand</label>
  <input
    type="file"
    id="file-example-base"
    name="file-example-base"
    accept=".doc, .docx, .pdf"
    multiple
  />
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="file-example-base">Upload bestand</label>
  <input
    type="file"
    id="file-example-base"
    name="file-example-base"
    accept=".doc, .docx, .pdf"
    multiple
  />
</form>
```

### Bestand gegroepeerd binnen `div`

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="file-example-div">Upload bestand</label>
    <input
      type="file"
      id="file-example-div"
      name="file-example-div"
      accept=".doc, .docx, .pdf"
      multiple
    />
  </div>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="file-example-div">Upload bestand</label>
    <input
      type="file"
      id="file-example-div"
      name="file-example-div"
      accept=".doc, .docx, .pdf"
      multiple
    />
  </div>
</form>
```

### Bestand gegroepeerd binnen `section`

#### Visueel voorbeeld:

<form action="" method="post">
  <section>
    <label for="file-example-section">Upload bestand</label>
    <input
      type="file"
      id="file-example-section"
      name="file-example-section"
      accept=".doc, .docx, .pdf"
      multiple
    />
  </section>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <section>
    <label for="file-example-section">Upload bestand</label>
    <input
      type="file"
      id="file-example-section"
      name="file-example-section"
      accept=".doc, .docx, .pdf"
      multiple
    />
  </section>
</form>
```

### Bestand gegroepeerd binnen `fieldset`

#### Visueel voorbeeld:

<form action="" method="post">
  <fieldset>
    <legend>Bestand-upload binnen een fieldset voorbeeld</legend>
    <label for="file-example-fieldset">Upload bestand</label>
    <input
      type="file"
      id="file-example-fieldset"
      name="file-example-fieldset"
      accept=".doc, .docx, .pdf"
      multiple
    />
  </fieldset>
</form>

### HTML-voorbeeld:

#### `fieldset`

```html
<form action="" method="post">
  <fieldset>
    <label for="file-example-fieldset">Upload bestand</label>
    <input type="file" id="file-example-fieldset" name="file-example-fieldset" accept=".doc, .docx, .pdf" multiple>
  </fieldst>
</form>
```
