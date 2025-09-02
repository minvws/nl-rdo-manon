---
title: Blok-element
breadcrumb: Blok-element
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<p class="introduction">Voor het weergeven van grotere notificaties.</p>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-block-element";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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

```html
<div class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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

### Voorbeeld: `section`

<section class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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
</section>

```html
<section class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span>
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
</section>
```
