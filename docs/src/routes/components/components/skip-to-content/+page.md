---
title: Ga direct naar inhoud-knop
breadcrumb: Ga direct naar inhoud-knop
nav:
  - Introductie: "#introduction"
  - Bijbehorende bestanden: "#requirements"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">"Ga direct naar inhoud"-knop</h1>

<p>
  Voeg gebruiksvriendelijkheid toe voor gebruikers die gebruik maken van hulptechnologiën of
  enkel met toetsenbord navigeren. Deze knop geeft gebruikers de mogelijkheid om direct naar
  de inhoud van de pagina te springen. Hiermee wordt voorkomen dat de gebruiker langs
  onnodig veel elementen moet navigeren.
</p>

## Benodigde stappen

### Importeer component via npm

```scss
@use "@minvws/manon/skip-to-content";
```

<ul>
  <li>Voeg de knop als eerste element binnen de header toe.</li>
  <li>
    Verwijs met een `a` naar het blok waar de content begint. Dit zal
    meestal de
    `main` zijn.
  </li>
  <li>
    **Let op: de knop is alleen zichtbaar wanneer deze focus krijgt. Gebruik `tab` om de knop te zien.**
  </li>
  <li>
    Voeg `tabindex="-1"` toe aan de main. De `main` is een element dat
    standaard geen focus kan accepteren aangezien het geen control of interactieve content is.
    Het toevoegen van de tabindex stelt het in staat om toch focus te accepteren.
  </li>
</ul>

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

<h2 id="examples">Voorbeelden</h2>

<h4>Visueel voorbeeld</h4>

<div class="explanation" role="group" aria-label="Toelichting">
  <span>Toelichting:</span>
  <p>
    De **"Ga direct naar inhoud"-knop** is standaard verborgen voor visuele
    gebruikers, maar wordt zichtbaar wanneer deze focus krijgt via toetsenbordnavigatie. Dit
    zorgt ervoor dat de knop niet de visuele opmaak verstoort, maar wel beschikbaar blijft
    voor gebruikers die er baat bij hebben. Gebruik de **Tab-toets** om de knop
    te activeren en zichtbaar te maken in het onderstaande voorbeeld.
  </p>
</div>
<div class="resize">
  <iframe src="/examples/skip-to-content" title="Voorbeeld" height="240px"></iframe>
</div>

<div>
  <p>HTML-voorbeeld header:</p>

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content"
    >Ga direct naar inhoud</a
  >

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

  <p>Voeg aan het naar toe te springen element de corresponderende `id` toe.</p>

```html
<main id="main-content" tabindex="-1">
  <!-- page content -->
</main>
```

</div>
