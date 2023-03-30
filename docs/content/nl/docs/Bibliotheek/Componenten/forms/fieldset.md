---
title: "Fieldset"
linkTitle: "Fieldset"
weight: 1
description: >
    Fieldset    
---

# Fieldset

## Benodige stappen

1. Voeg de benodigde bestanden toe aan het project:

* `form/form-base.scss`
* `form/form-textarea.scss`

2. Voeg eventuele optionele bestanden toe:

* `form/form-base-variables.scss`
* `form/form-textarea-variable.scss`

## Aandachtspunten

* Zorg ervoor dat het Fieldset een duidelijke vraag en/of duidelijk doel heeft.
  Voeg een omschrijvend `<label>` toe en stel een vraag of geef duidelijke
  richtlijnen mee door middel van een placeholder-tekst.

* `rows="number"` geeft de initiële hoogte van het Fieldset aan in de
  hoeveelheid regels. Als er een langer bericht verwacht of aangemoedigd wordt
  is het voor de gebruiker fijn om een hoger initieel tekstveld te hebben.

# Voorbeelden

### Visueel voorbeeld:

<form action="" method="post">
    <label for="voorbeeld-tekstveld-base">Bericht</label>
    <textarea id="voorbeeld-tekstveld-base" name="voorbeeld-tekstveld-base" placeholder="Jouw vraag of opmerking" rows="5"></textarea>
    <button type="submit">Verzend</button>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <textarea id="voorbeeld-tekstveld-base" name="voorbeeld-tekstveld-base" placeholder="Jouw vraag of opmerking"></textarea>
  <button type="submit">Verzend</button>
</form>
```

### Instelbare variabelen

#### `fieldset`

* margin-top

#### `legend`

* font-weight

* margin-bottom
