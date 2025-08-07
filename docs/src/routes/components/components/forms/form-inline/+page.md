---
title: "inline"-formulier
breadcrumb: "inline"-formulier
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">"inline"-formulier</h1>

In sommige gevallen is er om technische redenen een formulier nodig rondom een
knop maar is het niet nodig om deze visueel binnen een formulier te plaatsen.
Voor die situaties is dit voorbeeld geschikt.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg `class="inline"` toe aan het formulier.

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Basis

#### Visueel voorbeeld:

<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/form";
@use "@minvws/manon/form-inline";
```
