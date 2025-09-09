---
title: Footer
breadcrumb: Footer
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introduction</h2>

De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de gebruiker dat het einde van de pagina bereikt is.

De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de
gebruiker dat het einde van de pagina bereikt is.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/footer";
```

<h2 id="examples" class="page-title">Voorbeelden:</h2>

<div class="resize">
  <iframe src="/examples/footer" title="Voorbeeld"></iframe>
</div>

```html
<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h3 id="footer-nav-1-heading">Lorem ipsum</h3>
    <ul>
      <li><a href="footer" aria-current="page">Dolor</a></li>
      <li><a href="footer">Sit</a></li>
      <li><a href="footer">Amet</a></li>
    </ul>
  </nav>
</footer>
```
