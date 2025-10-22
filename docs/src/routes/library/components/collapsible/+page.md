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

In het attribuut `data-open-label` kan tekst worden geplaatst om de gebruiker te informeren over het element wat gaat openklappen. Voor `data-close-label` geldt hetzelfde, maar dan voor het sluiten van het element.Als er geen `data-open-label en/of data-close-label` wordt/worden gedefinieerd, dan zal het component terugvallen op respectievelijk "Menu" en "Sluit menu".

Deze teksten worden zowel visueel op de knop, als voor screen-readers gebruikt.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/collapsible";
```

Javascript importeren:

```javascript
import "@minvws/manon/js/collapsible.js";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Collapsible zonder gedefinieerde `button` labels

<div class="collapsible">
  <div class="collapsing-element">
      <ul>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Huidige selectie</a></li>
          <li><a href="#">Item 3</a></li>
      </ul>
  </div>
</div>

```html
<div class="collapsible">
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

<div class="collapsible" 
data-open-label="Gedefinieerde menu label" 
data-close-label="Sluit gedefinieerde menu label">

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
  class="collapsible"
  data-open-label="Gedefinieerde menu label"
  data-close-label="Sluit gedefinieerde menu label"
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
  data-icon-classes="icon icon-chevron-down"
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
  data-icon-classes="icon icon-chevron-down"
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

### Voorbeeld: Inklapbare icoonknop, links uitgelijnd

<div
  data-open-label="Profiel"
  data-close-label="Sluit profiel"
  data-icon-classes="icon icon-user left"
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
  data-open-label="Profiel"
  data-close-label="Sluit profiel"
  data-icon-classes="icon icon-user left"
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

### Voorbeeld: Inklapbare ghost button

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
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
  data-button-classes="ghost"
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

### Voorbeeld: Inklapbare ghost button met icoonknop

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
  data-icon-classes="icon icon-chevron-down"
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
  data-button-classes="ghost"
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
  class="collapsible">

  <div class="collapsing-element">
    <form>
      <fieldset>
        <legend>Titel</legend>
        <label for="example-input-base">Voorbeeld invoerveld</label>
        <input id="example-input-base" name="example-input-base" type="text" />
      </fieldset>
      <button type="submit">Verzend</button>
    </form>
  </div>
</div>

```html
<div data-open-label="Dropdown menu" data-close-label="Sluit dropdown menu" class="collapsible">
  <div class="collapsing-element">
    <form>
      <fieldset>
        <legend>Titel</legend>
        <label for="example-input-base">Voorbeeld invoerveld</label>
        <input id="example-input-base" name="example-input-base" type="text" />
      </fieldset>
      <button type="submit">Verzend</button>
    </form>
  </div>
</div>
```

### Voorbeeld: Inklapbaar component met meerdere menu's

<div
  data-open-label="Dropdown menu"
  data-close-label="Sluit dropdown menu"
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
<div data-open-label="Dropdown menu" data-close-label="Sluit dropdown menu" class="collapsible">
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
<div data-open-label="Dropdown menu" data-close-label="Sluit dropdown menu" class="collapsible">
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
