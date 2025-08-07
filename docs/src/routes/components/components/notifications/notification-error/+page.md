---
title: Foutmelding
breadcrumb: Foutmelding
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Blokelement: "#error-div"
    - Paragraaf: "#error-paragraph"
    - Formulier-elementen: "#error-form"
      - Invoerveld - `input`: "#error-form-input"
      - Tekstveld - `textarea`: "#error-form-textarea"
      - Selectielijst - `select`: "#error-form-select"
      - Datalijst - `Datalist`: "#error-form-datalist"
      - Selectievak - `checkbox`: "#error-form-checkbox"
      - Radio-selecteerknop - `radio`: "#error-form-radio"
  - Benodigdheden: "#requirements"
---

<h1 id="introduction">Foutmelding</h1>

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

<nav aria-label="Foutmelding subnavigatie">
  <ul>
    <li><a href="#error-div">Blokelement</a></li>
    <li><a href="#error-paragraph">Paragraaf</a></li>
    <li><a href="#error-form">Formulier-elementen</a></li>
  </ul>
</nav>

<h3 id="error-div">Blokelement</h3>

#### Visueel voorbeeld:

<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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
      <a href="notification-error">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

#### HTML-voorbeeld:

```html
<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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
<div class="error" role="group" aria-label="foutmelding">
    <span>Foutmelding:</span>
    <!-- Voeg hier de content toe. -->
</div>
```

<p>
  Voor meer informatie zie:
  [Blok-element](/components/notifications-block-element)
</p>

<h3 id="error-paragraph">Paragraaf</h3>

#### Visueel voorbeeld:

<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem ipsum dolor sit.
</p>

#### HTML-voorbeeld:

```html
<p class="error" role="group" aria-label="foutmelding"><span>Foutmelding:</span> Lorem ipsum dolor sit amet </p>
```

<h3 id="error-form">Formulier-elementen</h3>

<nav aria-label="Foutmelding formulierelementen subnavigatie">
  <ul>
    <li>
      <a href="#error-form-input">Invoerveld - `input`</a>
    </li>
    <li>
      <a href="#error-form-textarea">Tekstveld - `textarea`</a>
    </li>
    <li>
      <a href="#error-form-select">Selectielijst - `select`</a>
    </li>
    <li>
      <a href="#error-form-datalist">Datalijst - `Datalist`</a>
    </li>
    <li>
      <a href="#error-form-checkbox">Selectievak - `checkbox`</a>
    </li>
    <li>
      <a href="#error-form-radio">Radio-selecteerknop - `radio`</a>
    </li>
  </ul>
</nav>

<h4 id="error-form-input">Input</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="input-error">Input</label>
  <div>
    <input
      id="input-error"
      class="error"
      value="Lorem ipsum"
      aria-describedby="input-error-message"
      aria-invalid="true"
    />
    <p class="error" id="input-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
    <label for="input-error">Input</label>
    <div>
        <input id="input-error" class="error" value="Lorem ipsum" aria-describedby="input-error-message" aria-invalid="true">
        <p class="error" id="input-error-message">
            <span>foutmelding:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
```

<h4 id="error-form-textarea">Tekstveld</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-error"
      name="voorbeeld-tekstveld-error"
      class="error"
      aria-describedby="voorbeeld-tekstveld-error-message"
      aria-invalid="true"
    ></textarea>
    <p class="error" id="voorbeeld-tekstveld-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-error"
      name="voorbeeld-tekstveld-error"
      class="error"
      aria-describedby="voorbeeld-tekstveld-error-message"
      aria-invalid="true"
    ></textarea>
    <p class="error" id="voorbeeld-tekstveld-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h4 id="error-form-select">Selectielijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-error">Selectielijst</label>
  <div>
    <select
      id="select-error"
      name="select"
      class="error"
      aria-describedby="select-error-message"
      aria-invalid="true"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="error" id="select-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-error">Selectielijst</label>
  <div>
    <select id="select-error" name="select" class="error" aria-describedby="select-error-message" aria-invalid="true">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="error" id="select-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="error-form-datalist">Datalijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="datalist-error">Input</label>
  <div>
    <input
      id="datalist-error"
      class="error"
      list="example-list-error"
      aria-describedby="datalist-error-message"
      aria-invalid="true"
    />
    <p class="error" id="datalist-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-error">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="datalist-error">Input</label>
  <div>
    <input
      id="datalist-error"
      class="error"
      list="example-list-error"
      aria-describedby="datalist-error-message"
      aria-invalid="true"
    />
    <p class="error" id="datalist-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-error">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

<h4 id="error-form-checkbox">Selectievak - `checkbox`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div aria-describedby="checkbox-error-message">
    <input
      type="checkbox"
      id="checkbox-error"
      name="standaard-checkbox"
      class="error"
      aria-invalid="true"
    />
    <label for="checkbox-error">Lorem ipsum dolor sit amet</label>
    <p class="error" id="checkbox-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div aria-describedby="checkbox-error-message">
    <input type="checkbox" id="checkbox-error" name="standaard-checkbox" class="error" aria-invalid="true">
    <label for="checkbox-error">Lorem ipsum dolor sit amet</label>
    <p class="error" id="checkbox-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="error-form-radio">Radio-selecteerknop - `radio`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input
      type="radio"
      id="radio-example-error"
      name="standaard-radiobutton"
      value="value"
      class="error"
    />
    <label for="radio-example-error">Lorem ipsum dolor sit amet</label>
    <p class="error" id="radio-example-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-error" name="standaard-radiobutton" value="value" class="error">
    <label for="radio-example-error">Lorem ipsum dolor sit amet</label>
    <p class="error" id="radio-example-error-message">
      <span>foutmelding:</span> Lorem ipsum dolor sit amet
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
@use "@minvws/manon/notification-error";
```
