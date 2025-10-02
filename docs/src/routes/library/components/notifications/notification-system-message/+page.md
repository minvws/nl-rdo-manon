---
title: Systeembericht
breadcrumb: Systeembericht
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
@use "@minvws/manon/notification-system-message";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span>
  <h2>Lorem ipsum dolor sit</h2>
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

```html
<div class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span>
  <h2>Lorem ipsum dolor sit</h2>
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

<p class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span> Lorem ipsum dolor sit.
</p>

```html
<p class="system" role="group" aria-label="Systeembericht">
  <span>Systeembericht:</span> Lorem ipsum dolor sit amet
</p>
```

### Voorbeeld: `input`

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

```html
<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <input
      id="input-system"
      class="system"
      value="Lorem ipsum"
      aria-describedby="input-system-message"
    />
    <p class="system" id="input-system-message"><span>system:</span> Lorem ipsum dolor sit amet</p>
  </div>
</form>
```

### Voorbeeld: `textarea`

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

### Voorbeeld: `select`

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

```html
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
    <p class="system" id="select-system-message"><span>system:</span> Lorem ipsum dolor sit amet</p>
  </div>
</form>
```

### Voorbeeld: `datalist`

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

### Voorbeeld: `checkbox`

<form action="" method="post">
  <div aria-describedby="checkbox-system-message">
    <input type="checkbox" id="checkbox-system" name="standaard-checkbox" class="system" />
    <label for="checkbox-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="checkbox-system-message">
      <span>systeembericht:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>

```html
<form action="" method="post">
  <div aria-describedby="checkbox-system-message">
    <input type="checkbox" id="checkbox-system" name="standaard-checkbox" class="system" />
    <label for="checkbox-system">Lorem ipsum dolor sit amet</label>
    <p class="system" id="checkbox-system-message">
      <span>system:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```

### Voorbeeld: `radio`

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

```html
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
      <span>system:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
</form>
```
