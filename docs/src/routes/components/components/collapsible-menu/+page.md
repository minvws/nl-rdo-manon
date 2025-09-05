---
title: Inklapbaar menu
breadcrumb: Inklapbaar menu
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="warning">
  <span>Let op:</span>
  Deze pagina is nog niet af. De inhoud is nog niet compleet en de voorbeelden zijn nog niet toegevoegd.
</p>

<p id="introduction">Inklapbaar menu</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/collapsible-menu";
```

JavaScript importeren:

```javascript
import "@minvws/manon/collapsible-menu";
```

### Benodigde stappen

1.  Plaats een korte zichtbare tekst binnen een `button`. Bijvoorbeeld een
    omschrijvende titel of een vraag. Deze tekst is zichtbaar als de accordeon
    gesloten is. Zorg ervoor dat de gebruiker op basis van deze tekst kan
    bepalen of de onderliggende informatie waardevol is.
2.  Geef de `button` een unieke `id` en verwijs vanaf de `div` via een
    `aria-labelledby` naar de`id` van de `button` ten behoeve van
    toegankelijkheid.
3.  Groepeer de verborgen content binnen een `div`.

<h2 id="examples">Voorbeelden</h2>

```html
<header>
  <nav aria-label="Hoofdnavigatie">
    <ul>
      <!-- menu items -->
    </ul>
  </nav>
</header>
```
