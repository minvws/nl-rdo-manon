---
title: Bestand
breadcrumb: Bestand
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een invoerveld voor bestandsupload stelt de gebruiker in staat om documenten, afbeeldingen of andere bestanden direct via het formulier te verzenden. Dit is handig voor situaties waarin aanvullende informatie of bewijsstukken nodig zijn.

<h2 id="quickstart">Snelstart</h2>

```css
@use "@minvws/manon/form";
```

<p class="explanation">
  <strong>Tip:</strong> Om bereik-invoervelden een eigen gekozen kleur mee te geven kan
  gebruik gemaakt worden van
  <a href="{base}/components/components/forms/form-layout-accent-color">accentkleur op formulierelementen</a>.
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
