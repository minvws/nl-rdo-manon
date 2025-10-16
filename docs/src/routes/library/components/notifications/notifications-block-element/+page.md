---
title: Blok-element
breadcrumb: Blok-element
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van grotere notificaties.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/colors/notification";
@use "@minvws/manon/components/notification-block-element";
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
      <a href="/library/components/notifications/notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
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
      <a href="/library/components/notifications/notifications-block-element">Lorem ipsum</a>
      consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</div>
```

### Voorbeeld: `section`

<section class="error">
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
      <a href="/library/components/notifications/notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</section>

```html
<section class="error">
  <h2>Lorem ipsum dolor sit</h2>
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding:
  </span>
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
      <a href="/library/components/notifications/notifications-block-element">Lorem ipsum</a>
      consectetur adipiscing elit.
    </li>
  </ul>
  <button type="button">Lorem</button>
</section>
```
