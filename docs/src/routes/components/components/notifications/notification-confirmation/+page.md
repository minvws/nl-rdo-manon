---
title: Bevestiging
breadcrumb: Bevestiging
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
    - Blokelement: "#confirmation-div"
    - Paragraaf: "#confirmation-paragraph"
    - Tabel-elementen: "#confirmation-table"
      - Tabeltitel - `th`: "#confirmation-th"
      - Tabelcel - `td`: "#confirmation-td"
      - Tabelrij - `tr`: "#confirmation-tr"
    - Formulier-elementen: "#confirmation-form"
      - Invoerveld - `input`: "#confirmation-form-input"
      - Tekstveld - `textarea`: "#confirmation-form-textarea"
      - Selectielijst - `select`: "#confirmation-form-select"
      - Datalijst - `Datalist`: "#confirmation-form-datalist"
      - Selectievak - `checkbox`: "#confirmation-form-checkbox"
      - Radio-selecteerknop - `radio`: "#confirmation-form-radio"
  - Benodigdheden: "#requirements"
---

<h1 id="introduction">Bevestiging</h1>

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
    gebruikerservaring te bieden. Denk hierbij aan gebruikers die kleurenblind zijn of
    gebruikers die gebruik maken van hulptechnologieën.
-   Notificaties kunnen verborgen worden door de class
    `hidden` toe te voegen aan de notification

<h2 id="examples">Voorbeelden</h2>

Beschikbare voorbeelden:

<nav aria-label="Bevestiging subnavigatie">
  <ul>
    <li><a href="#confirmation-div">Blokelement</a></li>
    <li><a href="#confirmation-paragraph">Paragraaf</a></li>
    <li><a href="#confirmation-table">Tabel-elementen</a></li>
    <li><a href="#confirmation-form">Formulier-elementen</a></li>
  </ul>
</nav>

<h3 id="confirmation-div">Blokelement</h3>

#### Visueel voorbeeld:

<div class="confirmation" role="group" aria-label="bevestiging">
  <span>Bevestiging:</span>
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
      <a href="notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

#### HTML-voorbeeld:

```html
<div class="confirmation" role="group" aria-label="Bevestiging">
  <span>Bevestiging:</span>
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
<div class="confirmation" role="group" aria-label="Bevestiging">
    <span>Bevestiging:</span>
    <!-- Voeg hier de content toe. -->
</div>
```

<p>
  Voor meer informatie zie:
  [Blok-element](/components/notifications-block-element)
</p>

<h3 id="confirmation-paragraph">Paragraaf</h3>

#### Visueel voorbeeld:

<p class="confirmation" role="group" aria-label="bevestiging">
  <span>Bevestiging:</span> Lorem ipsum dolor sit.
</p>

#### HTML-voorbeeld:

```html
<p class="confirmation" role="group" aria-label="Bevestiging"><span>Bevestiging:</span> Lorem ipsum dolor sit amet </p>
```

<h3 id="confirmation-table">Tabel-elementen</h3>

<nav aria-label="Bevestiging tabelelementen subnavigatie">
  <ul>
    <li>
      <a href="#confirmation-th">Tabeltitel - `th`</a>
    </li>
    <li>
      <a href="#confirmation-td">Tabelcel - `td`</a>
    </li>
    <li>
      <a href="#confirmation-tr">Tabelrij - `tr`</a>
    </li>
  </ul>
</nav>

<h4 id="confirmation-th">Bevestiging op tabeltitel</h4>

<p class="warning">
  <span>Waarschuwing:</span> In een vorige versie van de documentatie werd hier beschreven
  hoe een tabeltitel als bevestiging opgemaakt kan worden. Deze instructies zijn weggehaald,
  omdat dit omwille de toegankelijkheid sterk **afgeraden** wordt.
</p>

<h4 id="confirmation-td">Bevestiging op Tabelcel</h4>

##### Visueel voorbeeld:

<table>
  <thead>
    <tr>
      <th>Lorem</th>
      <th>Ipsum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12</td>
      <td>42</td>
    </tr>

    <tr>
      <td class="confirmation" aria-label="Bevestiging">
        <span>Bevestiging:</span> 15
      </td>
      <td class="confirmation" aria-label="Bevestiging">
        <span>Bevestiging:</span> 168
      </td>
    </tr>

    <tr>
      <td>15</td>
      <td>168</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Lorem ipsum</td>
      <td>Dolor sit amet</td>
    </tr>
  </tfoot>
</table>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <input id="input-confirmation" class="confirmation" value="Lorem ipsum" aria-describedby="input-confirmation-message">
    <p class="confirmation" id="input-confirmation-message">
        <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="confirmation-form-textarea">Tekstveld</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="voorbeeld-tekstveld-confirmation">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-confirmation"
      name="voorbeeld-tekstveld-confirmation"
      class="confirmation"
      aria-describedby="voorbeeld-tekstveld-confirmation-message"
    ></textarea>
    <p class="confirmation" id="voorbeeld-tekstveld-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-confirmation">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-confirmation"
      name="voorbeeld-tekstveld-confirmation"
      class="confirmation"
      aria-describedby="voorbeeld-tekstveld-confirmation-message"
    ></textarea>
    <p class="confirmation" id="voorbeeld-tekstveld-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

<h4 id="confirmation-form-select">Selectielijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="select-confirmation">Selectielijst</label>
  <div>
    <select
      id="select-confirmation"
      name="select"
      class="confirmation"
      aria-describedby="select-confirmation-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="confirmation" id="select-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="select-confirmation">Selectielijst</label>
  <div>
    <select id="select-confirmation" name="select" class="confirmation" aria-describedby="select-confirmation-message">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="confirmation" id="select-confirmation-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="confirmation-form-datalist">Datalijst</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <label for="datalist-confirmation">Input</label>
  <div>
    <input
      id="datalist-confirmation"
      class="confirmation"
      list="example-list-confirmation"
      aria-describedby="datalist-confirmation-message"
    />
    <p class="confirmation" id="datalist-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-confirmation">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <label for="datalist-confirmation">Input</label>
  <div>
    <input
      id="datalist-confirmation"
      class="confirmation"
      list="example-list-confirmation"
      aria-describedby="datalist-confirmation-message"
    />
    <p class="confirmation" id="datalist-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-confirmation">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

<h4 id="confirmation-form-checkbox">Selectievak - `checkbox`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div aria-describedby="checkbox-confirmation-message">
    <input
      type="checkbox"
      id="checkbox-confirmation"
      name="standaard-checkbox"
      class="confirmation"
    />
    <label for="checkbox-confirmation">Lorem ipsum dolor sit amet</label>
    <p class="confirmation" id="checkbox-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div aria-describedby="checkbox-confirmation-message">
    <input type="checkbox" id="checkbox-confirmation" name="standaard-checkbox" class="confirmation">
    <label for="checkbox-confirmation">Lorem ipsum dolor sit amet</label>
    <p class="confirmation" id="checkbox-confirmation-message">
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

<h4 id="confirmation-form-radio">Radio-selecteerknop - `radio`</h4>

##### Visueel voorbeeld:

<form action="" method="post">
  <div>
    <input
      type="radio"
      id="radio-example-confirmation"
      name="standaard-radiobutton"
      value="value"
      class="confirmation"
    />
    <label for="radio-example-confirmation">Lorem ipsum dolor sit amet</label>
    <p class="confirmation" id="radio-example-confirmation-message">
      <span>bevestiging:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

##### HTML-voorbeeld:

```html
<form action="" method="post">
  <div>
    <input type="radio" id="radio-example-confirmation" name="standaard-radiobutton" value="value" class="confirmation">
    <label for="radio-example-confirmation">Lorem ipsum dolor sit amet</label>
    <p class="confirmation" id="radio-example-confirmation-message">
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
@use "@minvws/manon/notification-confirmation";
```