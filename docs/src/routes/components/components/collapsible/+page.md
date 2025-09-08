---
title: Inklapbaar component
breadcrumb: Inklapbaar component
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---


<h2 id="introduction">Introductie</h2>

Een inklapbaar component is een element op een website dat extra informatie verbergt en pas toont wanneer de gebruiker erop klikt of tapt. Zo blijft de pagina overzichtelijk en kan de gebruiker zelf bepalen wat hij wil uitklappen.


<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/collapsible";
```

Javascript importeren:

```javascript
import "@minvws/manon/collapsible";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Collapsible zonder gedefinieerde `button` labels

In het attribuut `data-open-label` kan tekst worden geplaatst om de gebruiker te informeren over het element wat gaat openklappen. Voor `data-close-label` geldt hetzelfde, maar dan voor het sluiten van het element.

Deze teksten worden zowel visueel op de knop, als voor screen-readers gebruikt.

Als er verschillende teksten nodig zijn voor screenreadable-gebruikers en overige gebruikers kan er een extra knoptekst worden toegevoegd. Voor screenreader gebruikers worden in dat geval beide teksten opgelezen. Eerst de tekst zoals deze in `data-open-label/data-close-label` staat. En daaropvolgend de inhoud van `data-button-open-label/data-button-close-label`. Overige gebruikers zien alleen de inhoud van `data-button-open-label/data-button-close-label` als inhoud van de knop.

Als er geen `data-open-label en/of data-close-label` wordt/worden gedefinieerd, dan zal het component terugvallen op respectievelijk "Menu" en "Sluit menu".

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
  class="collapsible">

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

In het attribuut `data-button-open-label` kan tekst worden geplaatst die visueel op de knop wordt getoond, om de gebruiker te informeren over het element wat gaat openklappen. Voor `data-button-close-label` geldt hetzelfde, maar dan voor het sluiten van het element.

Deze teksten gelden enkel als visuele weergave op de knop, voor screen-readers gebruikt het component de attributen `data-open-label` en `data-close-label` zijn gedefinieerd. In dat geval worden beide teksten opgelezen. Eerst de tekst zoals deze in `data-open-label/data-close-label` staat. En daaropvolgend de inhoud van `data-button-open-label/data-button-close-label`. Overige gebruikers zien alleen de inhoud van `data-button-open-label/data-button-close-label` als inhoud van de knop.

Als er geen `data-open-label` of `data-close-label` worden gedefinieerd, dan zal het component terugvallen op respectievelijk "Menu" en "Sluit menu".

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
  class="collapsible">

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

### Visuele weergave:

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
```

### Voorbeeld: Inklapbare ghost button


<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="ghost"
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
  data-button-classes="ghost"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>
```

## Inklapbare icoonknop


<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="icon icon-cat"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>

### HTML-voorbeeld:

```html
<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-media="(min-width: 100%)"
  data-button-classes="icon icon-cat"
  class="collapsible">

  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>
```

## Inklapbaar component met meerdere menu's


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

### HTML-voorbeeld:

```html
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
```

## Inklapbare taalselectie

### Visuele weergave:
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
```