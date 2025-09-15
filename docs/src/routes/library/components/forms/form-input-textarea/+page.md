---
title: Tekstveld
breadcrumb: Tekstveld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een tekstveld wordt gebruikt om langere teksten of opmerkingen van de gebruiker te verzamelen, zoals beschrijvingen, feedback of berichten. Het biedt voldoende ruimte voor uitgebreide invoer en maakt het invullen van langere teksten overzichtelijk.

<h2 id="quickstart">Snelstart</h2>
SCSS importeren:

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-textarea";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

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

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Aandachtspunten</span>
  <ul>
    <li>
      Zorg er voor gebruiksvriendelijkheid voor dat het tekstveld een
      duidelijke vraag en/of duidelijk doel heeft. Voeg een omschrijvend <code>label</code>
      toe en stel een vraag of geef duidelijke richtlijnen mee door middel van een <a href="{base}/library/typography/nota-bene">nota-bene</a>.
    </li>
    <li>
    <code>rows="number"</code> geeft de initiële hoogte van het tekstveld aan in de
    hoeveelheid regels. Als er een langer bericht verwacht of aangemoedigd wordt
    is het voor de gebruiker fijn om een hoger initieel tekstveld te hebben.
    </li>
  </ul>
</div>
