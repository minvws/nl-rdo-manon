---
title: Pagina-notificatie systeembericht voorbeeld
breadcrumb: Pagina-notificatie systeembericht voorbeeld
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

<h1 id="introduction">Pagina-notificatie systeembericht voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```scss
@use "@minvws/manon/colors/notification";
@use "@minvws/manon/components/notification-system-message";
@use "@minvws/manon/components/notification-system-page";
```
