---
title: Datum
breadcrumb: Datum
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Datum</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg `type="date"` toe aan het invoerveld.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

#### direct

<form action="" method="post">
  <label for="voorbeeld-date-1">Datum</label>
  <input id="voorbeeld-date-1" name="voorbeeld-date-1" type="date" />
  <button type="submit">Verzend</button>
</form>

### HTML-voorbeeld:

#### `section`

```html
<form action="" method="post">
  <label for="voorbeeld-date-1">Datum</label>
  <input id="voorbeeld-date-1" name="voorbeeld-date-1" type="date" />
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/form";
@use "@minvws/manon/form-input";
```
