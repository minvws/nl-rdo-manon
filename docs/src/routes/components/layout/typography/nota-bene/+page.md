---
title: Nota bene
breadcrumb: Nota bene
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Nota bene</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Geef op de `<input>` aan dat het invoerveld verplicht is met het `required`
    attribuut.
3.  Voeg een `<span>` toe boven het inputveld. Het is belangrijk om het bericht
    boven het invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers
    die gebruik maken van hulpmiddelen zoals een screenreader.
4.  Groeppeer de `<input>` en de `<span>` samen in een `<div>` voor de correcte
    weergave.

<h2 id="examples">Voorbeelden</h2>

### Nota bene

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="nota-bene-input">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="nota-bene-input" name="nota-bene-input" type="text" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="nota-bene-input">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input id="nota-bene-input" name="nota-bene-input" type="text" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Benodigd

- `text/nota-bene.scss`

### Optioneel

- `text/nota-bene-variables.scss`
