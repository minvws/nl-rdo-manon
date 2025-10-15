---
title: Pagina-notificatie foutmelding voorbeeld
breadcrumb: Pagina-notificatie foutmelding voorbeeld
---

<section class="error">
  <div>
    <span class="notification-type">
      <span class="icon icon-error" aria-hidden="true"></span>
      Foutmelding
    </span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h1 id="introduction">Pagina-notificatie foutmelding voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="error">
  <span class="notification-type">
    <span class="icon icon-error" aria-hidden="true"></span>
    Foutmelding
  </span>
  Lorem ipsum dolor sit.
</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-error-message";
@use "@minvws/manon/notification-error-page";
```
