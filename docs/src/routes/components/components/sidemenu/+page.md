---
title: Zijmenu
breadcrumb: Zijmenu
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p class="introduction">Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden.</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/sidemenu";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```

<p class="warning">
  <span>Let op:</span> Sommige implementaties van het zijmenu maken geen
  gebruik van JavaScript.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: in page

Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden.

In dit voorbeeld staat het zijmenu binnen de pagina bij de content. Gebruik deze
weergave alleen als de inhoud van het zijmenu specifiek over de content gaat.
Bijvoorbeeld een inhoudsopgave. Hoort het zijmenu niet bij de inhoud van de
pagina. Plaats het zijmenu dan naast de pagina. Voor meer informatie zie
[Zijmenu naast de pagina](/components/sidemenu/next-to-page).

<div class="resize">
  <iframe src="/examples/sidemenu-in-page" title="Voorbeeld" height="320px"></iframe>
</div>

```html
<main class="sidemenu">
  <nav>
    <!-- Zijmenu content -->
  </nav>

  <div>
    <!-- Overige pagina content -->
  </div>
</main>
```

```html
<header class="page-header">
  <div>
    <nav>
      <div class="collapsing-element">
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>
<main class="sidemenu">
  <nav aria-label="Zijbalknavigatie">
    <ul>
      <li><a href="/">Voorbeeld link 1</a></li>
      <li><a href="/">Voorbeeld link 2</a></li>
      <li><a href="/">Voorbeeld link 3</a></li>
      <li><a href="/">Voorbeeld link 4</a></li>
    </ul>
  </nav>
  <article>
    <div>
      <h1>Lorem ipsum</h1>
      <p>Dolor set amet conseqtetur adepicing elit</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis convallis
        vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus venenatis,
        lacinia dapibus risus auctor.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
        <li>Aenean posuere enim a hendrerit viverra.</li>
        <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
      </ul>
    </div>
  </article>
</main>
```

#### Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `main`.
2.  Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`, `article` of `section`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).

<p class="explanation">
  <span>Aandachtspunten:</span>
  Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt <strong>geen</strong>
  gebruik van JavaScript.
</p>

### Voorbeeld: in page met inklapbaar zijmenu

Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden. In dit
voorbeeld staat het zijmenu binnen de pagina bij de content. Dus tussen de
header en footer.

<div class="resize">
  <iframe
    src="/examples/sidemenu-in-page-collapsible"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

```html
<main class="sidemenu">
  <nav
    data-open-label="Zijbalknavigatie"
    data-close-label="Sluit zijbalknavigatie"
    aria-label="Zijbalknavigatie"
  >
    <!-- Zijmenu content -->
  </nav>

  <div>
    <!-- Overige pagina content. -->
  </div>
</main>
```

#### Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `main`.
2.  Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`, `article` of `section`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).

<p class="warning">
  <span>Let op:</span> Het menu is standaard ingeklapt en kan door de gebruiker uitgeklapt worden. Voeg de class `sidemenu-closed` toe aan de body.
</p>

<p class="warning">
  <span>Let op:</span> Deze versie maakt gebruik van JavaScript. Zorg ervoor dat de
  JavaScript-bestanden zijn toegevoegd aan de pagina.
</p>

### Voorbeeld: sidemenu naast de pagina

Gebruik deze weergave als de inhoud van het zijmenu niet over de content van de
pagina gaat maar website breed is. Zoals bijvoorbeeld hoofdnavigatie.

<div class="resize">
  <iframe src="/examples/sidemenu-next-to-page" title="Voorbeeld" height="320px"
  ></iframe>
</div>

```html
<body class="sidemenu">
  <nav>
    <ul>
      <li><a href="/">Voorbeeld link 1</a></li>
      <li><a href="/">Voorbeeld link 2</a></li>
      <li><a href="/">Voorbeeld link 3</a></li>
      <li><a href="/">Voorbeeld link 4</a></li>
    </ul>
  </nav>
  <div class="page-content">
    <header>
      <!-- Inhoud van de header. -->
    </header>

    <main>
      <!-- Overige pagina content. -->
    </main>

    <footer>
      <!-- Inhoud van de footer. -->
    </footer>
  </div>
</body>
```

```html
<body class="sidemenu">
  <nav>
    <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
    <!-- Overige pagina content -->
  </div>
</body>
```

#### Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `body`.
2.  Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).

<p class="explanation">
  <span>Aandachtspunten:</span>
  Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt <strong>geen</strong>
  gebruik van JavaScript.
</p>

### Voorbeeld: sidemenu naast de pagina met inklapbaar zijmenu

Voor het plaatsen van een zijmenu naast de pagina. Gebruik deze weergave als de
inhoud van het zijmenu niet over de content van de pagina gaat maar website
breed is. Zoals bijvoorbeeld hoofdnavigatie.

<div class="resize">
  <iframe
    src="/examples/sidemenu-next-to-page-collapsible"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

```html
<body class="sidemenu">
  <nav
    data-open-label="Zijbalknavigatie"
    data-close-label="Sluit zijbalknavigatie"
    aria-label="Zijbalknavigatie"
  >
    <!-- Zijmenu content -->
  </nav>

  <div class="page-content">
    <header>
      <!-- Inhoud van de header. -->
    </header>

    <main>
      <!-- Overige pagina content. -->
    </main>

    <footer>
      <!-- Inhoud van de footer. -->
    </footer>
  </div>
</body>
```

#### Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `main`.
2.  Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`, `article` of `section`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).

<p class="warning">
  <span>Let op:</span> Het menu is standaard ingeklapt en kan door de gebruiker
  uitgeklapt worden. Voeg de class `sidemenu-closed` toe aan de <code>body</code>.
</p>

<p class="warning">
  <span>Let op:</span> Deze versie maakt gebruik van JavaScript. Zorg ervoor dat de
  JavaScript-bestanden zijn toegevoegd aan de pagina.
</p>
