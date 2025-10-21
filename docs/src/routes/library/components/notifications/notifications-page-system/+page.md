---
title: Pagina-notificatie systeembericht voorbeeld
breadcrumb: Pagina-notificatie systeembericht voorbeeld
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="system">
  <div>
    <span class="notification-type">
      <span class="icon icon-warning" aria-hidden="true"></span>
      Systeembericht
    </span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie systeembericht voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification-system-message";
@use "@minvws/manon/components/notification-system-page";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="system">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Systeembericht
  </span>
  Lorem ipsum dolor sit.
</p>
```
