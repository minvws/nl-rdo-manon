---
title: Ingelogd als
breadcrumb: Ingelogd als
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

"Ingelogd als:" is een label dat toont welke gebruiker momenteel is ingelogd, zodat login-informatie en relevante metadata duidelijk zichtbaar zijn.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/login-meta";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Ingelogd als informatie

<p class="login-meta">Ingelogd als: <a href="login-meta">Jane Doe</a></p>

```html
<p class="login-meta">Ingelogd als: <a href="">Jane Doe</a></p>
```

### Voorbeeld: Binnen header

<div class="resize">
  <iframe src="/snippets/login-meta" title="Voorbeeld" height="72px"></iframe>
</div>
