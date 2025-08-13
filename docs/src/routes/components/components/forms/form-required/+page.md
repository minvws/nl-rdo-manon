---
title: Verplichte velden
breadcrumb: Verplichte velden
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Verplichte velden</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-nota-bene";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Geef op de `input` aan dat het invoerveld verplicht is met het `required`
    attribuut.
3.  Voeg een `span` toe boven het inputveld. Het is belangrijk om het bericht
    boven het invoerveld te plaatsen zodat de volgorde ook klopt voor gebruikers
    die gebruik maken van hulpmiddelen zoals een screenreader.
4.  Indien het formulier horizontaal uitgelijnd is: groeppeer de `input` en de
    `span` samen in een `div`. Voor meer informatie zie
    [Horizontaal uitgelijnd formulier](/components/form-horizontal).

<h2 id="examples">Voorbeelden</h2>

### Invoerveld verplicht

#### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required"
        name="voorbeeld-input-required"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <label for="voorbeeld-input-required">Ipsum</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <input
        id="voorbeeld-input-required"
        name="voorbeeld-input-required"
        type="text"
        required
      />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
