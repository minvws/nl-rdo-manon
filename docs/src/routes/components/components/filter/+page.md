---
title: Filter
breadcrumb: Filter
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Filter</h1>

Bij het tonen van grote of complexe datasets kan gebruik gemaakt worden van
filters. Filters geven de gebruiker de mogelijkheid om enkel relevante data te
zien.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/filter";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/filters.js";
```

### Benodigde stappen

1. Voeg een `section` of `div` toe met de class `filter` voor de correcte
   weergave.
2. Voeg binnen het element een formulier met de beschikbare filteropties toe.
3. Geef het formulier met `aria-label` een korte toegankelijke naam.
4. Voeg een `div` met extra informatie toe, bijvoorbeeld de hoeveelheid
   beschikbare resultaten.

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis met uitklapbare filters

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

```html
<section class="filter">
  <div>
    <p><span>5.254</span> nieuwsberichten</p>
    <button aria-expanded="false" data-hide-filters-label="Verberg filters">Toon filters</button>
  </div>
  <form aria-label="Filters" action="" method="post">
    <fieldset>
      <legend>Filteropties</legend>
      <!-- Voeg de opties van het filter toe -->
    </fieldset>
  </form>
</section>
```

### Voorbeeld: Uitgebreide uitgeklapte filters

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
          <span class="nota-bene" id="keyword-explanation">Bijvoorbeeld: fiets</span>
          <input id="keyword" name="keyword" type="text" aria-describedby="keyword-explanation" />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Trefwoord"
            data-close-label="Sluit toelichting bij het veld: Trefwoord"
          >
            <span>toelichting:</span> Vul hier een trefwoord in waarop u wilt filteren. Dit kan een
            los woord zijn of een combinatie van woorden.
          </p>
        </div>
      </div>

      <fieldset>
        <legend>Periode</legend>
        <div class="column-2">
          <div>
            <label for="date-range-start">van</label>
            <input id="date-range-start" name="date-range-start" value="DD-MM-JJJJ" type="date" />
          </div>

          <div>
            <label for="date-range-end">tot</label>
            <input id="date-range-end" name="date-range-end" value="DD-MM-JJJJ" type="date" />
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
```
