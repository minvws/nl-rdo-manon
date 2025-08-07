---
title: Footer
breadcrumb: Footer
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Footer</h1>

De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de gebruiker
dat het einde van de pagina bereikt is.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
    optionele bestanden zie:
    [Bijbehorende bestanden](#requirements). Voor meer informatie over importeren en
    instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)

<h1 id="examples">Voorbeelden:</h1>

<h2>Visueel voorbeeld:</h2>

<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
    <ul>
      <li><a href="footer">Dolor</a></li>
      <li><a href="footer">Sit</a></li>
      <li><a href="footer">Amet</a></li>
    </ul>
  </nav>
</footer>

<h2>HTML-voorbeeld:</h2>

```html
<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
    <ul>
      <li><a href="/components/footer-base">Dolor</a></li>
      <li><a href="/components/footer-base">Sit</a></li>
      <li><a href="/components/footer-base">Amet</a></li>
    </ul>
  </nav>
</footer>
```

<h2>Structuur-voorbeeld:</h2>

```html
<footer>
  <!-- Content -->
</footer>
```

<h1 id="requirements">Bijbehorende bestanden</h1>

<p>Voeg de (s)css-bestanden toe aan het project of importeer de bestanden.</p>
<p>
  Voor meer informatie over importeren en instellen van componenten. Zie:
  <a href="/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
</p>

<h2>Importeer component via npm</h2>

<h3>CSS-voorbeeld:</h3>

```css
@use "@minvws/manon/footer";
```

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/footer-two-thirds-one-third">Footer tweederde eenderde</a>
