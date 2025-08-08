---
title: Waarschuwing
breadcrumb: Waarschuwing
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Blokelement: "#warning-div"
    - Paragraaf: "#warning-paragraph"
    - Formulier-elementen: "#warning-form"
      - Invoerveld - `input`: "#warning-form-input"
      - Tekstveld - `textarea`: "#warning-form-textarea"
      - Selectielijst - `select`: "#warning-form-select"
      - Datalijst - `Datalist`: "#warning-form-datalist"
      - Selectievak - `checkbox`: "#warning-form-checkbox"
      - Radio-selecteerknop - `radio`: "#warning-form-radio"
  - Benodigdheden: "#requirements"
---

<h1 id="introduction">Waarschuwing</h1>

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

<nav aria-label="Waarschuwing subnavigatie">
  <ul>
    <li><a href="#warning-div">Blokelement</a></li>
    <li><a href="#warning-paragraph">Paragraaf</a></li>
    <li><a href="#warning-form">Formulier-elementen</a></li>
  </ul>
</nav>

<h3 id="warning-div">Blokelement</h3>

#### Visueel voorbeeld:

<div class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span>
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
      <a href="notification-warning">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

#### HTML-voorbeeld:

```html
<div class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span>
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
<div class="warning" role="group" aria-label="waarschuwing">
    <span>Waarschuwing:</span>
    <!-- Voeg hier de content toe. -->
</div>
```

<p>
  Voor meer informatie zie:
  [Blok-element](/components/notifications-block-element)
</p>

<h3 id="warning-paragraph">Paragraaf</h3>

#### Visueel voorbeeld:

<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Lorem ipsum dolor sit.
</p>

#### HTML-voorbeeld:

```html
<p class="warning" role="group" aria-label="waarschuwing"><span>Waarschuwing:</span> Lorem ipsum dolor sit amet </p>
```

<h3 id="warning-form">Formulier-elementen</h3>

<nav aria-label="Waarschuwing formulierelementen subnavigatie">
  <ul>
    <li>
      <a href="#warning-form-input">Invoerveld - `input`</a>
    </li>
    <li>
      <a href="#warning-form-textarea">Tekstveld - `textarea`</a>
    </li>
    <li>
      <a href="#warning-form-select">Selectielijst - `select`</a>
    </li>
    <li>
      <a href="#warning-form-datalist">Datalijst - `Datalist`</a>
    </li>
    <li>
      <a href="#warning-form-checkbox">Selectievak - `checkbox`</a>
    </li>
    <li>
      <a href="#warning-form-radio">Radio-selecteerknop - `radio`</a>
    </li>
  </ul>
</nav>

<h4 id="warning-form-input">Input</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <input
      id="input-warning"
      class="warning"
      value="Lorem ipsum"
      aria-describedby="input-warning-message"
      aria-invalid="true"
    />
    <p class="warning" id="input-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
    <label for="input-warning">Input</label>
    <div>
        <input id="input-warning" class="warning" value="Lorem ipsum" aria-describedby="input-warning-message" aria-invalid="true">
        <p class="warning" id="input-warning-message">
            <span>waarschuwing:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
```

<h4 id="warning-form-textarea">Tekstveld</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-warning"
      name="voorbeeld-tekstveld-warning"
      class="warning"
      aria-describedby="voorbeeld-tekstveld-warning-message"
      aria-invalid="true"
    ></textarea>
    <p class="warning" id="voorbeeld-tekstveld-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-warning"
      name="voorbeeld-tekstveld-warning"
      class="warning"
      aria-describedby="voorbeeld-tekstveld-warning-message"
      aria-invalid="true"
    ></textarea>
    <p class="warning" id="voorbeeld-tekstveld-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h4 id="warning-form-select">Selectielijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-warning">Selectielijst</label>
  <div>
    <select
      id="select-warning"
      name="select"
      class="warning"
      aria-describedby="select-warning-message"
      aria-invalid="true"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="warning" id="select-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-warning">Selectielijst</label>
  <div>
    <select id="select-warning" name="select" class="warning" aria-describedby="select-warning-message" aria-invalid="true">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="warning" id="select-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="warning-form-datalist">Datalijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="datalist-warning">Input</label>
  <div>
    <input
      id="datalist-warning"
      class="warning"
      list="example-list-warning"
      aria-describedby="datalist-warning-message"
      aria-invalid="true"
    />
    <p class="warning" id="datalist-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-warning">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="datalist-warning">Input</label>
  <div>
    <input
      id="datalist-warning"
      class="warning"
      list="example-list-warning"
      aria-describedby="datalist-warning-message"
      aria-invalid="true"
    />
    <p class="warning" id="datalist-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-warning">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

<h4 id="warning-form-checkbox">Selectievak - `checkbox`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div aria-describedby="checkbox-warning-message">
    <input
      type="checkbox"
      id="checkbox-warning"
      name="standaard-checkbox"
      class="warning"
      aria-invalid="true"
    />
    <label for="checkbox-warning">Lorem ipsum dolor sit amet</label>
    <p class="warning" id="checkbox-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div aria-describedby="checkbox-warning-message">
    <input type="checkbox" id="checkbox-warning" name="standaard-checkbox" class="warning" aria-invalid="true">
    <label for="checkbox-warning">Lorem ipsum dolor sit amet</label>
    <p class="warning" id="checkbox-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="warning-form-radio">Radio-selecteerknop - `radio`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input
      type="radio"
      id="radio-example-warning"
      name="standaard-radiobutton"
      value="value"
      class="warning"
    />
    <label for="radio-example-warning">Lorem ipsum dolor sit amet</label>
    <p class="warning" id="radio-example-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-warning" name="standaard-radiobutton" value="value" class="warning" >
    <label for="radio-example-warning">Lorem ipsum dolor sit amet</label>
    <p class="warning" id="radio-example-warning-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
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
@use "@minvws/manon/notification-warning";
```
