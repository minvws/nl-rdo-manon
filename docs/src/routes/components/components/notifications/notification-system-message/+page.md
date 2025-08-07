---
title: Systeembericht
breadcrumb: Systeembericht
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Blokelement: "#system-div"
    - Paragraaf: "#system-paragraph"
    - Formulier-elementen: "#system-form"
      - Invoerveld - `input`: "#system-form-input"
      - Tekstveld - `textarea`: "#system-form-textarea"
      - Selectielijst - `select`: "#system-form-select"
      - Datalijst - `Datalist`: "#system-form-datalist"
      - Selectievak - `checkbox`: "#system-form-checkbox"
      - Radio-selecteerknop - `radio`: "#system-form-radio"
  - Benodigdheden: "#requirements"
---

<h1 id="introduction">Systeembericht</h1>

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

<nav aria-label="Systeembericht subnavigatie">
  <ul>
    <li><a href="#system-div">Blokelement</a></li>
    <li><a href="#system-paragraph">Paragraaf</a></li>
    <li><a href="#system-form">Formulier-elementen</a></li>
  </ul>
</nav>

<h3 id="system-div">Blokelement</h3>

#### Visueel voorbeeld:

<div class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span>
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
      <a href="notification-system-message">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

#### HTML-voorbeeld:

```html
<div class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span>
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
<div class="system" role="group" aria-label="Systeembericht">
    <span>Systeembericht:</span>
    <!-- Voeg hier de content toe. -->
</div>
```

<p>
  Voor meer informatie zie:
  [Blok-element](/components/notifications-block-element)
</p>

<h3 id="system-paragraph">Paragraaf</h3>

#### Visueel voorbeeld:

<p class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span> Lorem ipsum dolor sit.
</p>

#### HTML-voorbeeld:

```html
<p class="system" role="group" aria-label="Systeembericht"><span>Systeembericht:</span> Lorem ipsum dolor sit amet </p>
```

<h3 id="system-form">Formulier-elementen</h3>

<nav aria-label="Systeembericht formulierelementen subnavigatie">
  <ul>
    <li>
      <a href="#system-form-input">Invoerveld - `input`</a>
    </li>
    <li>
      <a href="#system-form-textarea">Tekstveld - `textarea`</a>
    </li>
    <li>
      <a href="#system-form-select">Selectielijst - `select`</a>
    </li>
    <li>
      <a href="#system-form-datalist">Datalijst - `Datalist`</a>
    </li>
    <li>
      <a href="#system-form-checkbox">Selectievak - `checkbox`</a>
    </li>
    <li>
      <a href="#system-form-radio">Radio-selecteerknop - `radio`</a>
    </li>
  </ul>
</nav>

<h4 id="system-form-input">Input</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <input
      id="input-system"
      class="system"
      value="Lorem ipsum"
      aria-describedby="input-system-message"
    />
    <p class="system" id="input-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
    <label for="input-system">Input</label>
    <div>
        <input id="input-system" class="system" value="Lorem ipsum" aria-describedby="input-system-message">
        <p class="system" id="input-system-message">
            <span>system:</span> Lorem ipsum dolor sit amet
        </p>
    </div>
</form>
```

<h4 id="system-form-textarea">Tekstveld</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-tekstveld-system">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-system"
      name="voorbeeld-tekstveld-system"
      class="system"
      aria-describedby="voorbeeld-tekstveld-system-message"
    ></textarea>
    <p class="system" id="voorbeeld-tekstveld-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-system">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-system"
      name="voorbeeld-tekstveld-system"
      class="system"
      aria-describedby="voorbeeld-tekstveld-system-message"
    ></textarea>
    <p class="system" id="voorbeeld-tekstveld-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h4 id="system-form-select">Selectielijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-system">Selectielijst</label>
  <div>
    <select
      id="select-system"
      name="select"
      class="system"
      aria-describedby="select-system-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="system" id="select-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-system">Selectielijst</label>
  <div>
    <select id="select-system" name="select" class="system" aria-describedby="select-system-message">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="system" id="select-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="system-form-datalist">Datalijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="datalist-system">Input</label>
  <div>
    <input
      id="datalist-system"
      class="system"
      list="example-list-system"
      aria-describedby="datalist-system-message"
    />
    <p class="system" id="datalist-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-system">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="datalist-system">Input</label>
  <div>
    <input
      id="datalist-system"
      class="system"
      list="example-list-system"
      aria-describedby="datalist-system-message"
    />
    <p class="system" id="datalist-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-system">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

<h4 id="system-form-checkbox">Selectievak - `checkbox`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div aria-describedby="checkbox-system-message">
    <input type="checkbox" id="checkbox-system" name="standaard-checkbox" class="system" />
    <label for="checkbox-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="checkbox-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div aria-describedby="checkbox-system-message">
    <input type="checkbox" id="checkbox-system" name="standaard-checkbox" class="system">
    <label for="checkbox-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="checkbox-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="system-form-radio">Radio-selecteerknop - `radio`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input
      type="radio"
      id="radio-example-system"
      name="standaard-radiobutton"
      value="value"
      class="system"
    />
    <label for="radio-example-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="radio-example-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-system" name="standaard-radiobutton" value="value" class="system">
    <label for="radio-example-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="radio-example-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
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
@use "@minvws/manon/notification-system-message";
```
