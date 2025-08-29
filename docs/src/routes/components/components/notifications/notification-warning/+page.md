---
title: Waarschuwing
breadcrumb: Waarschuwing
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Waarschuwing</h1>

Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het
incorrect invoeren van data of een systeemfout.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-warning";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

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

```html
<div class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span>
  <h1>Lorem ipsum dolor set</h1>
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

<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Lorem ipsum dolor sit.
</p>

```html
<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
</p>
```

### Voorbeeld: `input`

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

```html
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
```

### Voorbeeld: `textarea`

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

### Voorbeeld: `select`

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

```html
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

### Voorbeeld: `checkbox`

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

```html
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
```

### Voorbeeld: `radio`

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

```html
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
```
