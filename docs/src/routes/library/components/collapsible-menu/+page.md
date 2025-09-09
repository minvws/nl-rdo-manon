---
title: Inklapbaar menu
breadcrumb: Inklapbaar menu
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een inklapbaar menu is een navigatie-element dat standaard verborgen of ingeklapt is en pas uitklapt wanneer de gebruiker erop klikt of tapt. Zo blijft de interface overzichtelijk, vooral op kleinere schermen.

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
