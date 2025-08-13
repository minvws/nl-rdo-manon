---
title: In- en uitklapbaar zijmenu naast de pagina
breadcrumb: In- en uitklapbaar zijmenu naast de pagina
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">In- en uitklapbaar zijmenu naast de pagina</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/sidemenu";
```

Voor het plaatsen van een zijmenu naast de pagina.

Gebruik deze weergave als de inhoud van het zijmenu niet over de content van de
pagina gaat maar website breed is. Zoals bijvoorbeeld hoofdnavigatie.

Gaat de inhoud van het zijmenu over de inhoud van de content. En hoort het bij
de content. Gebruik dan:
[Zijmenu binnen de pagina](/components/sidemenu/in-page).

## Aandachtspunten

- Deze versie maakt gebruik van JavaScript.

## Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `body`.
2.  Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).
4.  Voeg de referentie naar het Javascript bestand, `sidemenu.js`, toe aan de
    HTML-pagina's die gebruik dienen te maken van het inklapbare zijmenu. Voor
    meer informatie zie:
    [JavaScript referentie toevoegen](/documentation/add-js).
5.  Om het menu standaard gesloten te tonen tot de gebruiker het menu opent.
    Voeg de class `sidemenu-closed` toe aan de `body`.

### Sluit- en open-knop als icoonknop instellen zonder tekst.

Voeg altijd de knoptekst in de taal van het document toe voor screenreader
gebruikers.

1.  Voeg de knoptekst toe binnen een `data-open-label`. Bijvoorbeeld:
    `data-open-label="Zijbalknavigatie"`.
2.  Voeg de knoptekst toe binnen een `data-close-label`. Bijvoorbeeld:
    `data-open-label="Sluit zijbalknavigatie"`.
3.  Vul de variabele `--sidemenu-open-button-icon` in.
4.  Vul de variabele `--sidemenu-close-button-icon` in.
5.  Zet de variabele `--sidemenu-button-font-size` op `0` om de tekst visueel te
    verbergen.

### Pagina laden met een gesloten zijmenu

Om het menu standaard gesloten te tonen tot de gebruiker het menu opent. Voeg de
class `sidemenu-closed` toe aan de `body`.

<h2 id="examples">Voorbeelden</h2>

<h3 id="sidemenu-collapsible">Inklapbaar zijmenu</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/sidemenu-next-to-page-collapsible"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

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

<h3 id="sidemenu-expandable">Uitklapbaar zijmenu</h3>

Het menu is standaard ingeklapt en kan door de gebruiker uitgeklapt worden.

1.  Voeg de class `sidemenu-closed` toe aan de body.

#### Visueel voorbeeld

<div class="resize">
  <iframe
    src="/examples/sidemenu-next-to-page-expandable"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

<h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>

```html
<body class="sidemenu sidemenu-closed">
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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
