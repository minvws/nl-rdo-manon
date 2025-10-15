---
title: Ga direct naar inhoud-knop
breadcrumb: Ga direct naar inhoud-knop
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voeg gebruiksvriendelijkheid toe voor gebruikers die gebruik maken van
hulptechnologiën of enkel met toetsenbord navigeren. Deze knop geeft gebruikers
de mogelijkheid om direct naar de inhoud van de pagina te springen. Hiermee
wordt voorkomen dat de gebruiker langs onnodig veel elementen moet navigeren.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/skip-to-content";
```

### Benodigde stappen

- Voeg de knop als eerste element binnen de header toe.
- Verwijs met een `a` naar het blok waar de content begint. Dit zal meestal de
  `main` zijn.
- **Let op**: de knop is alleen zichtbaar wanneer deze focus krijgt. Gebruik
  `tab` om de knop te zien.
- Voeg `tabindex="-1"` toe aan de main. De `main` is een element dat standaard
  geen focus kan accepteren aangezien het geen control of interactieve content
  is. Het toevoegen van de tabindex stelt het in staat om toch focus te
  accepteren.

<h2 id="examples">Voorbeelden</h2>

<div class="resize">
  <iframe src="/snippets/skip-to-content" title="Voorbeeld" height="240px"></iframe>
</div>

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <nav aria-label="Navigatie voorbeeld header">
    <div>
      <ul>
        <li><a href="" aria-current="page">Voorbeeld-link 1</a></li>
        <li><a href="">Voorbeeld-link 2</a></li>
        <li><a href="">Voorbeeld-link 3</a></li>
      </ul>
    </div>
  </nav>
</header>
```

Voeg aan het naar toe te springen element de corresponderende `id` toe.

```html
<main id="main-content" tabindex="-1">
  <!-- page content -->
</main>
```

<div class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Toelichting
  </span>
  <p>
    De <strong>"Ga direct naar inhoud"-knop</strong> is standaard verborgen
    voor visuele gebruikers, maar wordt zichtbaar wanneer deze focus krijgt
    via toetsenbordnavigatie. Dit zorgt ervoor dat de knop niet de visuele
    opmaak verstoort, maar wel beschikbaar blijft voor gebruikers die er
    baat bij hebben. Gebruik de <strong>Tab-toets</strong> om de knop te
    activeren en zichtbaar te maken in het onderstaande voorbeeld.
  </p>
</div>
