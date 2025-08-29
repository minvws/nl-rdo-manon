---
title: Bestand
breadcrumb: Bestand
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="introduction">File upload, invoerveld voor het uploaden van bestanden.</p>

<h2 id="quickstart">Snelstart</h2>

```css
@use "@minvws/manon/form";
```

<p class="explanation">
  <strong>Tip:</strong> Om bereik-invoervelden een eigen gekozen kleur mee te geven kan
  gebruik gemaakt worden van
  <a href="/components/form-accent-color">accentkleur op formulierelementen</a>.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <label for="file-example">Upload bestand</label>
  <input
    type="file"
    id="file-example"
    name="file-example"
    accept=".doc, .docx, .pdf"
    multiple
  />
</form>

```html
<form action="" method="post">
  <label for="file-example">Upload bestand</label>
  <input type="file" id="file-example" name="file-example" accept=".doc, .docx, .pdf" multiple />
</form>
```
