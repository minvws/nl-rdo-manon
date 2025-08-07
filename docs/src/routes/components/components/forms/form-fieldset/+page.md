---
title: Fieldset
breadcrumb: Fieldset
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Fieldset - `fieldset`</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de benodigde HTML toe. Voor meer informatie zie:
    [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

#### Basis

<form action="" method="post">
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input id="example-input-base" name="example-input-base" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input id="example-input-base" name="example-input-base" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/fieldset";
```
