---
title: Notifactie op een paragraaf
breadcrumb: Notifactie op een paragraaf
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Notifactie op een paragraaf</h1>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-paragraph";
```

<h2 id="examples">Voorbeelden</h2>

<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem <a href="notifications-paragraph">ipsum</a> dolor sit.
</p>

```html
<p class="error" role="group" aria-label="foutmelding">
  <span>Foutmelding:</span> Lorem ipsum dolor sit.
</p>
```
