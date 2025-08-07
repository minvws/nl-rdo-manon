---
title: Tekstveld
breadcrumb: Tekstveld
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tekstveld - `textarea`</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de `textarea` toe. Zie onderstaand voorbeeld voor meer informatie.

## Aandachtspunten:

- Zorg er voor gebruiksvriendelijkheid voor dat het tekstveld een duidelijke
  vraag en/of duidelijk doel heeft. Voeg een omschrijvend `label` toe en stel
  een vraag of geef duidelijke richtlijnen mee door middel van een
  [nota-bene](/components/layout/typography/nota-bene).
- `rows="number"` geeft de initiële hoogte van het tekstveld aan in de
  hoeveelheid regels. Als er een langer bericht verwacht of aangemoedigd wordt
  is het voor de gebruiker fijn om een hoger initieel tekstveld te hebben.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

#### Basis

<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <span class="nota-bene" id="voorbeeld-tekstveld-base-explanation"
    >Stel jouw vraag of voeg jouw opmerking toe
  </span>
  <textarea
    id="voorbeeld-tekstveld-base"
    name="voorbeeld-tekstveld-base"
    rows="5"
    aria-describedby="voorbeeld-tekstveld-base-explanation"
  ></textarea>

<button type="submit">Verzend</button>

</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <span class="nota-bene" id="voorbeeld-tekstveld-base-explanation">
    Stel jouw vraag of voeg jouw opmerking toe:
  </span>
  <textarea
    id="voorbeeld-tekstveld-base"
    name="voorbeeld-tekstveld-base"
    rows="5"
    aria-describedby="voorbeeld-tekstveld-base-explanation"
  >
  </textarea>

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
@use "@minvws/manon/form-textarea";
```
