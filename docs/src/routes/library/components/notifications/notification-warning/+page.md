---
title: Waarschuwing
breadcrumb: Waarschuwing
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het
incorrect invoeren van data of een systeemfout.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-warning";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="warning">
  <h2>Lorem ipsum dolor sit</h2>
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing:
  </span>
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

```html
<div class="warning">
  <h2>Lorem ipsum dolor sit</h2>
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing:
  </span>
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
```

### Voorbeeld: `p`

<p class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing:
  </span>
  Lorem ipsum dolor sit.
</p>

```html
<p class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing:
  </span>
  Lorem ipsum dolor sit.
</p>
```

### Voorbeeld: `textarea`

<form action="" method="post">
  <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-warning"
      name="voorbeeld-tekstveld-warning"
      class="warning"
      aria-describedby="voorbeeld-tekstveld-warning-message">
    </textarea>
    <p class="warning" id="voorbeeld-tekstveld-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>

</form>

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-warning"
      name="voorbeeld-tekstveld-warning"
      class="warning"
      aria-describedby="voorbeeld-tekstveld-warning-message">
    </textarea>
    <p class="warning" id="voorbeeld-tekstveld-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>

</form>
```

### Voorbeeld: `select`

<form action="" method="post">
  <label for="select-warning">Selectielijst</label>
  <div>
    <select
      id="select-warning"
      name="select"
      class="warning"
      aria-describedby="select-warning-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="warning" id="select-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

```html
<form action="" method="post">
  <label for="select-warning">Selectielijst</label>
  <div>
    <select
      id="select-warning"
      name="select"
      class="warning"
      aria-describedby="select-warning-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="warning" id="select-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

### Voorbeeld: `datalist`

<form action="" method="post">
  <label for="datalist-warning">Input</label>
  <div>
    <input
      id="datalist-warning"
      class="warning"
      list="example-list-warning"
      aria-describedby="datalist-warning-message"
    />
    <p class="warning" id="datalist-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-warning">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

```html
<form action="" method="post">
  <label for="datalist-warning">Input</label>
  <div>
    <input
      id="datalist-warning"
      class="warning"
      list="example-list-warning"
      aria-describedby="datalist-warning-message"
    />
    <p class="warning" id="datalist-warning-message">
     <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-warning">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

### Voorbeeld: `checkbox`

<form action="" method="post">
  <div aria-describedby="checkbox-warning-message">
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
    </div>
    <p class="warning" id="checkbox-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

```html
<form action="" method="post">
  <div aria-describedby="checkbox-warning-message">
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
    </div>
    <p class="warning" id="checkbox-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

### Voorbeeld: `radio`

<form action="" method="post">
  <div>
    <div class="radio">
      <input type="radio" id="radio-example-base" name="standaard-radio" />
      <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
    </div>
    <p class="warning" id="radio-example-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

```html
<form action="" method="post">
  <div>
    <div class="radio">
      <input type="radio" id="radio-example-base" name="standaard-radio" />
      <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
    </div>
    <p class="warning" id="radio-example-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```
