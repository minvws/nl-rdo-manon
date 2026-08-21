---
title: Inklapbaar component
breadcrumb: Inklapbaar component
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een inklapbaar component is een element op een website dat extra informatie
verbergt en pas toont wanneer de gebruiker erop klikt of tapt. Zo blijft de
pagina overzichtelijk en kan de gebruiker zelf bepalen wat hij wil uitklappen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/collapsible";
```

Javascript importeren:

```javascript
import "@minvws/manon/js/collapsible.js";
```

<div class="explanation">
<span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  <p>De knop waarmee het component in- en uitgeklapt wordt, staat niet in de voorbeeldcode hieronder. Dat is met opzet: <code>collapsible.js</code> maakt die knop zelf aan, inclusief <code>aria-controls</code>, <code>aria-expanded</code> en <code>aria-haspopup</code>. Voeg de knop dus niet zelf toe aan je HTML.</p>
  <p>Werkt de JavaScript niet, dan wordt er geen knop aangemaakt en staat de inhoud van <code>.collapsing-element</code> gewoon uitgeklapt in de pagina. Zo blijft de inhoud beschikbaar en is er geen knop die niets doet. Zie <a href="/getting-started/installation#no-javascript">werken zonder JavaScript</a>.</p>
</div>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Collapsible zonder gedefinieerde `button` labels

In het attribuut `data-open-label` kan tekst worden geplaatst om de gebruiker te
informeren over het element wat gaat openklappen. Voor `data-close-label` geldt
hetzelfde, maar dan voor het sluiten van het element.

Deze teksten worden zowel visueel op de knop, als voor screen-readers gebruikt.

Als er verschillende teksten nodig zijn voor screenreadable-gebruikers en
overige gebruikers kan er een extra knoptekst worden toegevoegd. Voor
screenreader gebruikers worden in dat geval beide teksten opgelezen. Eerst de
tekst zoals deze in `data-open-label/data-close-label` staat. En daaropvolgend
de inhoud van `data-button-open-label/data-button-close-label`. Overige
gebruikers zien alleen de inhoud van
`data-button-open-label/data-button-close-label` als inhoud van de knop.

Als er geen `data-open-label en/of data-close-label` wordt/worden gedefinieerd,
dan zal het component terugvallen op respectievelijk "Menu" en "Sluit menu".

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </div>
</div>
```

### Voorbeeld: Collapsible met gedefinieerde `button` labels

In het attribuut `data-button-open-label` kan tekst worden geplaatst die visueel
op de knop wordt getoond, om de gebruiker te informeren over het element wat
gaat openklappen. Voor `data-button-close-label` geldt hetzelfde, maar dan voor
het sluiten van het element.

Deze teksten gelden enkel als visuele weergave op de knop, voor screen-readers
gebruikt het component de attributen `data-open-label` en `data-close-label`
zijn gedefinieerd. In dat geval worden beide teksten opgelezen. Eerst de tekst
zoals deze in `data-open-label/data-close-label` staat. En daaropvolgend de
inhoud van `data-button-open-label/data-button-close-label`. Overige gebruikers
zien alleen de inhoud van `data-button-open-label/data-button-close-label` als
inhoud van de knop.

Als er geen `data-open-label` of `data-close-label` worden gedefinieerd, dan zal
het component terugvallen op respectievelijk "Menu" en "Sluit menu".

<div
  data-button-open-label="Gedefinieerde open menu text"
  data-button-close-label="Gedefinieerde sluit menu text"
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>

```html
<div
  data-button-open-label="Gedefinieerde open menu text"
  data-button-close-label="Gedefinieerde sluit menu text"
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </div>
</div>
```

### Voorbeeld: Met formulier

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible">

  <div class="collapsing-element">
    <form>
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
    </form>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible"
>
  <div class="collapsing-element">
    <form>
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Huidige selectie</a></li>
        <li><a href="#">Item 3</a></li>
      </ul>
    </form>
  </div>
</div>
```

### Voorbeeld: Inklapbare secondary button

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="secondary"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="secondary"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </div>
</div>
```

### Voorbeeld: Inklapbare icoonknop

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="icon icon-chevron-down"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="icon icon-chevron-down"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
  </div>
</div>
```

### Voorbeeld: Inklapbaar component met meerdere menu's

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible">

  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>

    <ul>
      <li><a href="#">Sub menu Item 1</a></li>
      <li><a href="#">Sub menu Item 2</a></li>
      <li><a href="#">Sub menu Item 3</a></li>
    </ul>

  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Huidige selectie</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>

    <ul>
      <li><a href="#">Sub menu Item 1</a></li>
      <li><a href="#">Sub menu Item 2</a></li>
      <li><a href="#">Sub menu Item 3</a></li>
    </ul>
  </div>
</div>
```

### Voorbeeld: Inklapbare taalselectie

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible">

  <div class="collapsing-element">
      <ul role="listbox">
        <li role="option" aria-selected="false">
          <a hreflang="nl" href="collapsible" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="en" href="collapsible" data-value="English" lang="en">English</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="fy" href="collapsible" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li role="option" aria-selected="true" aria-current="true">
          <a hreflang="pap-CW" href="collapsible" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="pap-AW" href="collapsible" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
      </ul>
  </div>
</div>

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible"
>
  <div class="collapsing-element">
    <ul role="listbox">
      <li role="option" aria-selected="false">
        <a hreflang="nl" href="collapsible" data-value="Nederlands" lang="nl">Nederlands</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="en" href="collapsible" data-value="English" lang="en">English</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="fy" href="collapsible" data-value="Frysk" lang="fy">Frysk</a>
      </li>
      <li role="option" aria-selected="true" aria-current="true">
        <a hreflang="pap-CW" href="collapsible" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="pap-AW" href="collapsible" data-value="Papiamento" lang="pap-AW">Papiamento</a>
      </li>
    </ul>
  </div>
</div>
```

### Resultaat na initialisatie

Deze markup schrijf je niet zelf. Ter illustratie: zo ziet het eerste voorbeeld
eruit nádat `collapsible.js` het component heeft geïnitialiseerd.

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  class="collapsible collapsed"
>
  <button
    type="button"
    class="collapsible-toggle"
    aria-controls="DIV-3b9aca01"
    aria-expanded="false"
    aria-haspopup="menu"
    aria-labelledby="SPAN-3b9aca02"
  >
    Dropdown menu
    <span class="visually-hidden" id="SPAN-3b9aca02">Dropdown menu</span>
  </button>
  <div class="collapsing-element" id="DIV-3b9aca01">…</div>
</div>
```

Het script zoekt binnen `.collapsible` naar het `.collapsing-element`, geeft dat
een `id` als het er nog geen heeft, vandaar de willekeurige waarde hierboven, en
plaatst de knop er direct vóór. De knop verwijst via `aria-controls` naar dat
`id`.

De teksten op de knop komen uit de `data-*`-attributen die je zelf meegeeft, en
worden bij het in- en uitklappen omgewisseld naar `data-close-label` en
`data-button-close-label`.

Werkt de JavaScript niet, dan gebeurt dit alles niet: er is geen knop, er is geen
`collapsed`-class, en het `.collapsing-element` staat gewoon uitgeklapt in de
pagina.
