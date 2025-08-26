---
title: Kruimelpad - breadcrumb-bar
breadcrumb: Kruimelpad - breadcrumb-bar
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Kruimelpad - breadcrumb-bar</h1>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/breadcrumb-bar";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: Basis

<div class="resize">
  <iframe src="/examples/breadcrumb-bar" title="Voorbeeld"></iframe>
</div>

```html
<nav class="breadcrumb-bar">
  <div>
    <ul>
      <li><a href="/components">Componenten</a></li>
      <li>
        <a href="/components/breadcrumb-bar" aria-current="page">Kruimelpad - breadcrumb-bar</a>
      </li>
    </ul>
  </div>
</nav>
```
