---
title: Pagina-notificatie foutmelding voorbeeld
breadcrumb: Pagina-notificatie foutmelding voorbeeld
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<section class="error" role="group" aria-label="foutmelding">
  <div>
    <span>Foutmelding:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h2 id="introduction">Pagina-notificatie foutmelding voorbeeld</h2>

Voor het weergeven van notificaties op paginaniveau.


<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification";
@use "@minvws/manon/components/notification-error-message";
@use "@minvws/manon/components/notification-error-page";
```


<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem ipsum dolor sit.
</p>
```