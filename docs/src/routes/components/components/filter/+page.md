---
title: Filter
breadcrumb: Filter
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Filter</h1>

Bij het tonen van grote of complexe datasets kan gebruik gemaakt worden van
filters. Filters geven de gebruiker de mogelijkheid om enkel relevante data te
zien.

Denk bij het toevoegen van filters aan de verschillende gebruikers-behoeften en
-vragen. Deze kunnen per gebruiker en per situatie verschillend zijn maar in
veel gevallen kunnen de meest voorkomende vragen geidentificeerd worden. Filters
kunnen ingezet worden om deze vragen sneller te beantwoorden.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer
      informatie zie: [JavaScript toevoegen](/documentation/add-js).
2.  Voeg een `section` of `div` toe met de class `filter` voor de correcte
    weergave.
3.  Voeg binnen het element een formulier met de beschikbare filteropties toe.
    Voor meer informatie over zie: [Formulieren](/components/forms).
4.  Geef het formulier met `aria-label` een korte toegankelijke naam.

## Optioneel:

- Voeg een `div` met extra informatie toe, bijvoorbeeld de hoeveelheid
  beschikbare resultaten.
- Als het formulier een heading heeft, is het mogelijk om die te gebruiken als
  toegankelijke naam. Geef de heading dan een `id` en verwijs daarnaar op het
  formulier met `aria-labelledby`. Laat in dit geval `aria-label` weg.
- Voeg de optie tot het in- en uit-klappen van de filters toe.
  - Voeg bij de extra information een `button` toe met als tekst "Verberg
    filters" (of vergelijkbaar). Geef het daarnaast een
    `data-show-filters-label`-attribuut met als waarde "Toon filters" (of
    vergelijkbaar).
  - Plaats `script defer src="pad/naar/filters.min.js"></script>` in de `head`
    van het document.
  - Het `defer` attribuut zorgt ervoor dat het script in de achtergrond geladen
    wordt, zodat het tonen van de pagina niet geblokkeerd wordt.
  - Wanneer JavaScript niet beschikbaar is, worden de filters altijd getoont en
    wordt de `button` verborgen.
  - Om de filters standaard te verbergen, verander je de tekst van de button
    naar "Toon filters" (of vergelijkbaar), gebruik je een bijbehorend
    `data-hide-filters-label` (in plaats van `data-show-filters-label`) en voeg
    je `aria-expanded="false"` toe aan de `button`.

<h2 id="examples">Voorbeelden</h2>

### Basis

#### Visueel voorbeeld:

<section class="filter">
  <div>
    <p><span>5.254</span> nieuwsberichten</p>
    <button data-show-filters-label="Toon filters">Verberg filters</button>
  </div>
  <form aria-label="Filters" action="" method="post" class="horizontal help">
    <fieldset>
      <legend>Filter op datum</legend>
      <div>
        <label for="keyword">Trefwoord</label>
        <div>
          <span class="nota-bene" id="keyword-explanation">Bijvoorbeeld: fiets</span>
          <input
            id="keyword"
            name="keyword"
            type="text"
            aria-describedby="keyword-explanation"
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Trefwoord"
            data-close-label="Sluit toelichting bij het veld: Trefwoord"
          >
            <span>toelichting:</span> Vul hier een trefwoord in waarop u wilt filteren. Dit kan
            een los woord zijn of een combinatie van woorden.
          </p>
        </div>
      </div>

      <fieldset>
        <legend>Periode</legend>
        <div class="column-2">
          <div>
            <label for="date-range-start">van</label>
            <input
              id="date-range-start"
              name="date-range-start"
              value="DD-MM-JJJJ"
              type="date"
            />
          </div>

          <div>
            <label for="date-range-end">tot</label>
            <input
              id="date-range-end"
              name="date-range-end"
              value="DD-MM-JJJJ"
              type="date"
            />
          </div>
        </div>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Periode"
          data-close-label="Sluit toelichting bij het veld: Periode"
        >
          <span>toelichting:</span> Vul hier een start- en/of einddatum als volgt in: DD-MM-JJJJ.
        </p>
      </fieldset>

      <div class="required">
        <label for="select">Voertuig</label>
        <div>
          <span class="nota-bene">Dit veld is verplicht</span>
          <select id="select" name="select">
            <option value="Alle voertuigen">Alle voertuigen</option>
            <option value="Fiets">Fiets</option>
            <option value="Step">Step</option>
          </select>
        </div>
      </div>
    </fieldset>

    <button type="submit">Filter</button>

  </form>
</section>

#### HTML-voorbeeld:

```html
<section class="filter">
  <div>
    <p><span>5.254</span> nieuwsberichten</p>
    <button data-show-filters-label="Toon filters">Verberg filters</button>
  </div>
  <form aria-label="Filters" action="" method="post" class="horizontal help">
    <fieldset>
      <legend>Filter op datum</legend>
      <div>
        <label for="keyword">Trefwoord</label>
        <div>
          <span class="nota-bene" id="keyword-explanation"
            >Bijvoorbeeld: fiets</span
          >
          <input
            id="keyword"
            name="keyword"
            type="text"
            aria-describedby="keyword-explanation"
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Trefwoord"
            data-close-label="Sluit toelichting bij het veld: Trefwoord"
          >
            <span>toelichting:</span> Vul hier een trefwoord in waarop u wilt
            filteren. Dit kan een los woord zijn of een combinatie van woorden.
          </p>
        </div>
      </div>

      <fieldset>
        <legend>Periode</legend>
        <div class="column-2">
          <div>
            <label for="date-range-start">van</label>
            <input
              id="date-range-start"
              name="date-range-start"
              value="DD-MM-JJJJ"
              type="date"
            />
          </div>

          <div>
            <label for="date-range-end">tot</label>
            <input
              id="date-range-end"
              name="date-range-end"
              value="DD-MM-JJJJ"
              type="date"
            />
          </div>
        </div>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Periode"
          data-close-label="Sluit toelichting bij het veld: Periode"
        >
          <span>toelichting:</span> Vul hier een start- en/of einddatum als
          volgt in: DD-MM-JJJJ.
        </p>
      </fieldset>

      <div class="required">
        <label for="select">Voertuig</label>
        <div>
          <span class="nota-bene">Dit veld is verplicht</span>
          <select id="select" name="select">
            <option value="Alle voertuigen">Alle voertuigen</option>
            <option value="Fiets">Fiets</option>
            <option value="Step">Step</option>
          </select>
        </div>
      </div>
    </fieldset>

    <button type="submit">Filter</button>
  </form>
</section>
```

#### Structuur-voorbeeld:

```html
<section class="filter">
  <div>
    <p><span>5.254</span> nieuwsberichten</p>
    <button aria-expanded="false" data-hide-filters-label="Verberg filters">
      Toon filters
    </button>
  </div>
  <form aria-label="Filters" action="" method="post">
    <fieldset>
      <legend>Filteropties</legend>
      <!-- Voeg de opties van het filter toe -->
    </fieldset>
  </form>
</section>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/filter";
```
