---
title: Pagina-notificatie toelichting voorbeeld
breadcrumb: Pagina-notificatie toelichting voorbeeld
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="explanation">
  <div>
    <span class="notification-type">
      <span class="icon icon-informative" aria-hidden="true"></span>
      Aandachtspunten
    </span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie toelichting voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification-explanation-message";
@use "@minvws/manon/components/notification-explanation-page";
```

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  Lorem ipsum dolor sit.
</p>
```