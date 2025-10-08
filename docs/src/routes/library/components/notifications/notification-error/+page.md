---
title: Foutmelding
breadcrumb: Foutmelding
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
@use "@minvws/manon/notification-error";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="error">
  <h2>Lorem ipsum dolor sit</h2>
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
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
<div class="error">
  <h2>Lorem ipsum dolor sit</h2>
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
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

<p class="error">
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
  </span>
  Lorem ipsum dolor sit.
</p>

```html
<p class="error">
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
  </span>
  Lorem ipsum dolor sit.
</p>
```

### Voorbeeld: `textarea`

<form action="" method="post">
  <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-error"
      name="voorbeeld-tekstveld-error"
      class="error"
      aria-describedby="voorbeeld-tekstveld-error-message">
    </textarea>
    <p class="error" id="voorbeeld-tekstveld-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>

</form>

```html
<form action="" method="post">
  <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
  <div>
    <textarea
      id="voorbeeld-tekstveld-error"
      name="voorbeeld-tekstveld-error"
      class="error"
      aria-describedby="voorbeeld-tekstveld-error-message">
    </textarea>
    <p class="error" id="voorbeeld-tekstveld-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <button type="submit">Verzend</button>

</form>
```

### Voorbeeld: `select`

<form action="" method="post">
  <label for="select-error">Selectielijst</label>
  <div>
    <select
      id="select-error"
      name="select"
      class="error"
      aria-describedby="select-error-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="error" id="select-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

```html
<form action="" method="post">
  <label for="select-error">Selectielijst</label>
  <div>
    <select
      id="select-error"
      name="select"
      class="error"
      aria-describedby="select-error-message"
    >
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
    <p class="error" id="select-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

### Voorbeeld: `datalist`

<form action="" method="post">
  <label for="datalist-error">Input</label>
  <div>
    <input
      id="datalist-error"
      class="error"
      list="example-list-error"
      aria-describedby="datalist-error-message"
    />
    <p class="error" id="datalist-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-error">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>

```html
<form action="" method="post">
  <label for="datalist-error">Input</label>
  <div>
    <input
      id="datalist-error"
      class="error"
      list="example-list-error"
      aria-describedby="datalist-error-message"
    />
    <p class="error" id="datalist-error-message">
     <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>

  <datalist id="example-list-error">
    <option value="Optie 1"></option>
    <option value="Optie 2"></option>
    <option value="Optie 3"></option>
  </datalist>
</form>
```

### Voorbeeld: `checkbox`

<form action="" method="post">
  <div aria-describedby="checkbox-error-message">
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
    </div>
    <p class="error" id="checkbox-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

```html
<form action="" method="post">
  <div aria-describedby="checkbox-error-message">
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
    </div>
    <p class="error" id="checkbox-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
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
    <p class="error" id="radio-example-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
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
    <p class="error" id="radio-example-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```
