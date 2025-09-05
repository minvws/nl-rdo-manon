---
title: Foutmelding
breadcrumb: Foutmelding
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
@use "@minvws/manon/notification-error";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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
      <a href="notification-error">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>

```html
<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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

<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem ipsum dolor sit.
</p>

```html
<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem ipsum dolor sit amet
</p>
```

### Voorbeeld: `input`

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

```html
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
```

### Voorbeeld: `textarea`

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

### Voorbeeld: `select`

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

```html
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

### Voorbeeld: `checkbox`

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

```html
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
```

### Voorbeeld: `radio`

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

```html
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
```
