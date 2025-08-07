---
title: Gecombineerde velden
breadcrumb: Gecombineerde velden
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Gecombineerde velden</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Groepeer de gewenste velden en voeg de class `combined-field`.

## Suggesties:

1.  Gecombineerde velden worden vaak gebruikt met icoonknoppen. Voor meer
    informatie zie: [Icoonknoppen](/components/button/icon).

<h2 id="examples">Voorbeelden</h2>

### Invoerveld met icoonknop

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-1-date-1-start">Ipsum</label>
    <div class="combined-field">
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" type="text" />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-1-date-1-start">Ipsum</label>
    <div class="combined-field">
      <input
        id="voorbeeld-1-date-1-start"
        name="voorbeeld-1-date-1-start"
        type="text"
      />
      <button class="icon icon-cat">Cat</button>
    </div>
  </div>
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
@use "@minvws/manon/form-combined-field";
```
