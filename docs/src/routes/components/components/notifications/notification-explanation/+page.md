---
title: Toelichting
breadcrumb: Toelichting
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Blokelement: "#explanation-div"
    - Paragraaf: "#explanation-paragraph"
    - Formulier-elementen: "#explanation-form"
      - Invoerveld - `input`: "#explanation-form-input"
      - Tekstveld - `textarea`: "#explanation-form-textarea"
      - Selectielijst - `select`: "#explanation-form-select"
      - Datalijst - `Datalist`: "#explanation-form-datalist"
      - Selectievak - `checkbox`: "#explanation-form-checkbox"
      - Radio-selecteerknop - `radio`: "#explanation-form-radio"
  - Benodigdheden: "#requirements"
---

<h1 id="introduction">Toelichting</h1>

Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het incorrect invoeren
van data of een systeemfout.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
    optionele bestanden zie:
    [Benodigdheden](#requirements). Voor meer informatie over importeren en
    instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Voeg de benodigde HTML toe. Zie het voorbeeld per element voor de implementatiedetails.

## Aandachtspunten

-   Voeg de volledige code toe die in de voorbeelden staat om alle gebruikers een goede
    gebruikerservaring the bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
    gebruikers die gebruik maken van hulptechnologieën.
-   Notificaties kunnen verborgen worden door de class
    `hidden` toe te voegen aan de notification

<h2 id="examples">Voorbeelden</h2>

Beschikbare voorbeelden:

<nav aria-label="Toelichting subnavigatie">
  <ul>
    <li><a href="#explanation-div">Blokelement</a></li>
    <li><a href="#explanation-paragraph">Paragraaf</a></li>
    <li><a href="#explanation-form">Formulier-elementen</a></li>
  </ul>
</nav>

<h3 id="explanation-div">Blokelement</h3>

#### Visueel voorbeeld:

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
    facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
    Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
    efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
    bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
    Mauris euismod a augue sit amet condimentum.
  </p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
      consequat facilisis ac eu velit.
      <a href="notification-explanation">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

#### HTML-voorbeeld:

```html
<div class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.</p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat facilisis ac eu velit. <a href="">Lorem ipsum</a> consectetur adipiscing elit.</li>
  </ul>
  <button type="button">Lorem</button>
</div>
```

#### HTML-structuur voorbeeld:

```html
<div class="explanation" role="group" aria-label="Toelichting">
    <span>Toelichting:</span>
    <!-- Voeg hier de content toe. -->
</div>
```

<p>
  Voor meer informatie zie:
  [Blok-element](/components/notifications-block-element)
</p>

<h3 id="explanation-paragraph">Paragraaf</h3>

#### Visueel voorbeeld:

<p class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span> Lorem ipsum dolor sit.
</p>

#### HTML-voorbeeld:

```html
<p class="explanation" role="group" aria-label="Toelichting"><span>Toelichting:</span> Lorem ipsum dolor sit amet </p>
```

<h3 id="explanation-form">Formulier-elementen</h3>

<nav aria-label="Toelichting formulierelementen subnavigatie">
  <ul>
    <li>
      <a href="#explanation-form-input">Invoerveld - `input`</a>
    </li>
    <li>
      <a href="#explanation-form-textarea">Tekstveld - `textarea`</a>
    </li>
    <li>
      <a href="#explanation-form-select">Selectielijst - `select`</a>
    </li>
    <li>
      <a href="#explanation-form-datalist">Datalijst - `Datalist`</a>
    </li>
    <li>
      <a href="#explanation-form-checkbox">Selectievak - `checkbox`</a>
    </li>
    <li>
      <a href="#explanation-form-radio">Radio-selecteerknop - `radio`</a>
    </li>
  </ul>
</nav>

<h4 id="explanation-form-input">Input</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <input
      id="input-explanation"
      class="explanation"
      value="Lorem ipsum"
      aria-describedby="input-explanation-message"
    />
    <p class="explanation" id="input-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
    <label for="input-explanation">Input</label>
    <div>
        <input id="input-explanation" class="explanation" value="Lorem ipsum" aria-describedby="input-explanation-message">
        <p class="explanation" id="input-explanation-message">
            <span>toelichting:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
```

<h4 id="explanation-form-textarea">Tekstveld</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-explanation"
      name="voorbeeld-tekstveld-explanation"
      class="explanation"
      aria-describedby="voorbeeld-tekstveld-explanation-message"
    ></textarea>
    <p class="explanation" id="voorbeeld-tekstveld-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-explanation"
      name="voorbeeld-tekstveld-explanation"
      class="explanation"
      aria-describedby="voorbeeld-tekstveld-explanation-message"
    ></textarea>
    <p class="explanation" id="voorbeeld-tekstveld-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h4 id="explanation-form-select">Selectielijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-explanation">Selectielijst</label>
  <div>
    <select
      id="select-explanation"
      name="select"
      class="explanation"
      aria-describedby="select-explanation-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="explanation" id="select-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-explanation">Selectielijst</label>
  <div>
    <select id="select-explanation" name="select" class="explanation" aria-describedby="select-explanation-message">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="explanation" id="select-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="explanation-form-datalist">Datalijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="datalist-explanation">Input</label>
  <div>
    <input
      id="datalist-explanation"
      class="explanation"
      list="example-list-explanation"
      aria-describedby="datalist-explanation-message"
    />
    <p class="explanation" id="datalist-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-explanation">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="datalist-explanation">Input</label>
  <div>
    <input
      id="datalist-explanation"
      class="explanation"
      list="example-list-explanation"
      aria-describedby="datalist-explanation-message"
    />
    <p class="explanation" id="datalist-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-explanation">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

<h4 id="explanation-form-checkbox">Selectievak - `checkbox`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div aria-describedby="checkbox-explanation-message">
    <input
      type="checkbox"
      id="checkbox-explanation"
      name="standaard-checkbox"
      class="explanation"
    />
    <label for="checkbox-explanation">Lorem ipsum dolor sit amet</label>
    <p class="explanation" id="checkbox-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div aria-describedby="checkbox-explanation-message">
    <input type="checkbox" id="checkbox-explanation" name="standaard-checkbox" class="explanation">
    <label for="checkbox-explanation">Lorem ipsum dolor sit amet</label>
    <p class="explanation" id="checkbox-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="explanation-form-radio">Radio-selecteerknop - `radio`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input
      type="radio"
      id="radio-example-explanation"
      name="standaard-radiobutton"
      value="value"
      class="explanation"
    />
    <label for="radio-example-explanation">Lorem ipsum dolor sit amet</label>
    <p class="explanation" id="radio-example-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-explanation" name="standaard-radiobutton" value="value" class="explanation">
    <label for="radio-example-explanation">Lorem ipsum dolor sit amet</label>
    <p class="explanation" id="radio-example-explanation-message">
      <span>toelichting:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-explanation";
```
