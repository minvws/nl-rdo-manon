---
title: Toelichting
breadcrumb: Toelichting
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Toelichting</h1>

Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het
incorrect invoeren van data of een systeemfout.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-explanation";
```

### Voorbeeld: `div`

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

```html
<div class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span>
  <h1>Lorem ipsum dolor set</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a
    nisi consequat facilisis ac eu velit. Donec luctus metus a lacus dictum, a
    porta ligula pellentesque. Phasellus ultricies purus id viverra ultrices.
    Proin sagittis rhoncus tempor. Nam efficitur elit commodo elit feugiat
    scelerisque. Nullam consectetur felis mi, ac bibendum urna convallis a. Ut
    maximus volutpat ligula, et accumsan ipsum varius eget. Mauris euismod a
    augue sit amet condimentum.
  </p>
  <ul>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>Lorem ipsum</li>
    <li>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a
      nisi consequat facilisis ac eu velit.
      <a href="">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>
```

### Voorbeeld: `p`

<p class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span> Lorem ipsum dolor sit.
</p>

```html
<p class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span> Lorem ipsum dolor sit amet
</p>
```

### Voorbeeld: `input`

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

```html
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
```

### Voorbeeld: `textarea`

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

### Voorbeeld: `select`

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

```html
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
```

### Voorbeeld: `datalist`

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

### Voorbeeld: `checkbox`

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

```html
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
```

### Voorbeeld: `radio`

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

```html
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
```
