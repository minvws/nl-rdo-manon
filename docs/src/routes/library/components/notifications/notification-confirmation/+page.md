---
title: Bevestiging
breadcrumb: Bevestiging
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<p id="introduction">Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het
incorrect invoeren van data of een systeemfout.</p>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-confirmation";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="confirmation" role="group" aria-label="bevestiging">
  <span>Bevestiging:</span>
  <h2>Lorem ipsum dolor set</h2>
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
<div class="confirmation" role="group" aria-label="Bevestiging">
  <span>Bevestiging:</span>
  <h2>Lorem ipsum dolor set</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
    facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque. Phasellus
    ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam efficitur elit commodo
    elit feugiat scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut maximus
    volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a augue sit amet condimentum.
  </p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
      facilisis ac eu velit.
      <a href="">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>
```

### Voorbeeld: `p`

<p class="confirmation" role="group" aria-label="bevestiging">
  <span>Bevestiging:</span> Lorem ipsum dolor sit.
</p>

```html
<p class="confirmation" role="group" aria-label="Bevestiging">
  <span>Bevestiging:</span> Lorem ipsum dolor sit amet
</p>
```

### Voorbeeld: `textarea`

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

### Voorbeeld: `select`

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

```html
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
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

### Voorbeeld: `datalist`

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

### Voorbeeld: `checkbox`

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

```html
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
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

### Voorbeeld: `radio`

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

```html
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
      <span>waarschuwing:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```
