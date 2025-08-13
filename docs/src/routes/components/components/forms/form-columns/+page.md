---
title: Weergave in kolommen
breadcrumb: Weergave in kolommen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
  - Bekende problemen: "#issues"
---

<h1 id="introduction">Weergave in kolommen</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Groepeer de gewenste velden en geef de gewenste hoeveelheid kolommen op.
    Bijvoorbeeld: `class="column-2`.

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

<h2 id="issues">Bekende problemen</h2>

<ul>
  <li>
    `fieldset` met een `column-*`-class met daarbinnen een
    `<input type="date">` kunnen buiten de breedte van het formulier lopen.
  </li>
</ul>
