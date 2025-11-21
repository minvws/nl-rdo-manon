---
title: Zijmenu
breadcrumb: Zijmenu
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```

<h2 id="examples">Voorbeelden</h2>

<manon-tabs>
  <ul>
    <li><a href="#page-navigation">Hoofdnavigatie</a></li>
    <li><a href="#content-navigation">content navigatie</a></li>
  </ul>

  <div id="page-navigation">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu-next-to-page-collapsible"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <p>HTML-voorbeeld:</p>

```html
<nav data-open-label="Zijbalknavigatie" data-close-label="Sluit zijbalknavigatie">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Oorsprong</a></li>
    <li><a href="#">Projecten</a></li>
    <li><a href="#">Documentatie</a></li>
  </ul>
</nav>
<main class="page-content">
  <section>
    <div class="content-wrapper">
      <h2>Introductie</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed condimentum ligula.
        Vestibulum at eleifend nisl. Donec in nisl non sem cursus faucibus vel non est. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt risus metus, non volutpat
        arcu lacinia eget. Morbi condimentum lectus ut lorem cursus, vel cursus dolor dictum.
        Phasellus vel justo non magna ornare dapibus quis in arcu.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed condimentum ligula.</p>
    </div>
  </section>
</main>
```

    <p>Structuur voorbeeld:</p>

```html
<body class="sidemenu">
  <nav>
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

    <h3>Benodigde stappen</h3>

    <ol>
      <li>Voeg de class `sidemenu` toe aan de `body`.</li>
      <li>Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.</li>
      <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
        is. Bijvoorbeeld: `div`.</li>
    </ol>

  </div>

  <div id="content-navigation">
    <div class="resize">
      <iframe src="/snippets/sidemenu-in-page" title="Voorbeeld" height="320px"></iframe>
    </div>

HTML voorbeeld:

```html
<header>
  <a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud</a>

  <nav
    data-open-label="Menu"
    data-close-label="Sluit menu"
    data-media="(min-width: 30rem)"
    aria-label="Hoofdnavigatie"
    class="collapsible"
  >
    <div class="collapsing-element">
      <ul>
        <li><a href="{page.url.pathname}">Home</a></li>
      </ul>
    </div>
  </nav>
</header>

<main class="sidemenu">
  <nav aria-label="Zijbalknavigatie">
    <ul>
      <li><a href="{page.url.pathname}">Introductie</a></li>
      <li><a href="{page.url.pathname}">Component</a></li>
      <li><a href="{page.url.pathname}">Voorbeeld</a></li>
      <li><a href="{page.url.pathname}">Gerelateerd</a></li>
    </ul>
  </nav>

  <div class="page-content">
    <section>
      <div class="content-wrapper">
        <h1>Lorem ipsum</h1>
        <p>Dolor sit amet conseqtetur adepicing elit</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lacus ac turpis
          convallis vestibulum. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Maecenas ut fringilla tortor. Nulla ultrices enim sit amet tellus
          venenatis, lacinia dapibus risus auctor.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Vivamus accumsan dui sed diam placerat, quis ultrices enim viverra.</li>
          <li>Aenean posuere enim a hendrerit viverra.</li>
          <li>Phasellus eu justo ac orci tempus bibendum eu in est.</li>
        </ul>
      </div>
    </section>
  </div>
</main>
```

Structuur voorbeeld:

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

  <h3>Benodigde stappen</h3>
  <ol>
    <li>Voeg de class `sidemenu` toe aan de `main`.</li>
    <li>Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.</li>
    <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
      is. Bijvoorbeeld: `div`, `article` of `section`.</li>
  </ol>
  </div>

</manon-tabs>

## Kies de juiste HTML-Structuur

<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Pagina-specifiek</th>
        <th scope="col">Structuur</th>
        <th scope="col">Gebruik</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>De inhoud van de navigatie is hoofdnavigatie.</td>
        <td>Nee, de inhoud van de navigatie wordt op andere pagina's herhaald.</td>
        <td>Plaats het zijmenu buiten de main aangezien het geen content is.</td>
        <td>page navigation</td>
      </tr>
      <tr>
        <td>De inhoud van de navigatie gaat over de inhoud van de pagina.</td>
        <td>Ja, de inhoud van de navigatie is specifiek voor de content op deze pagina. "Table of content" bijvoorbeeld.</td>
        <td>Plaats het zijmenu binnen de main bij de content van de pagina.</td>
        <td>content navigation</td>
      </tr>
    </tbody>
  </table>
</div>

## Toegankelijkheid

### Skip to content link binnen zijnavigatie

<p>Bij een lange table of content kan een <a href="/library/components/skip-to-content">skip to content link</a> toegevoegd worden. Dit geeft oetsenbordgebruikers de mogelijkheid om de inhoud van de table of contents over te slaan. Dit voegt wel een extra tabstop toe dus het is raadzaam om het enkel bij lange table of contents te gebruiken. Screenreader gebruikers maken over het algemeen gebruik van landmarks om te navigeren. Waardoor een losse skip to content link geen tot weinig toegevoegde waarde heeft.</p>

Als er in de header een skip to content link staat. Laat deze in dat geval naar de start van de main verwijzen. Indien er een table of content aanwezig is, zal het zijmenu het eerste component binnen de main zijn.
