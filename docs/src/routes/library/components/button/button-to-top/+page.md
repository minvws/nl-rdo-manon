---
title: Terug naar hoofdmenu knop
breadcrumb: Terug naar hoofdmenu knop
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Bied een soepele gebruikerservaring aan door bij lange pagina's en documenten gebruik te maken van de "Terug naar hoofdmenu"-knop.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/button-to-top";
```

### Benodigde stappen

1. Voeg de knop aan het einde van de `main` toe.
2. Voeg de link naar de hoofdnavigatie toe.
   - Voeg aan de hoofdnavigatie een id toe. Bijvoorbeeld: `"main-content"`.
   - Voeg binnen de link de corresponderende verwijzing toe. Zie het
     HTML-voorbeeld voor meer informatie.

<h2 id="examples">Voorbeelden</h2>

<a href="#main-content" class="button to-top" title="Terug naar het hoofdmenu">Terug
naar het hoofdmenu</a>

```html
<a href="#main-content" class="button to-top" title="Terug naar het hoofdmenu"
  >Terug naar het hoofdmenu</a
>
```

```html
<main id="main-content">
  <!-- content within the main component -->
  <a href="#main-content" class="button to-top" title="Terug naar het hoofdmenu"
    >Terug naar het hoofdmenu</a
  >
</main>
```
