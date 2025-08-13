---
title: In- en uitklapbaar zijmenu binnen de pagina
breadcrumb: In- en uitklapbaar zijmenu binnen de pagina
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">In- en uitklapbaar zijmenu binnen de pagina</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/sidemenu";
```

Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden. In dit
voorbeeld staat het zijmenu binnen de pagina bij de content. Dus tussen de
header en footer.

## Aandachtspunten

- Deze versie maakt gebruik van JavaScript.
- De knop wordt automatisch toegevoegd. Deze hoeft dus niet handmatig in de html
  opgenomen te worden.
- Zonder JavaScript wordt de knop niet toegevoegd en wordt het zijmenu getoond
  zonder deze in te klappen.

## Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `main`.
2.  Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`, `article` of `section`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).
4.  Voeg de referentie naar het Javascript bestand, `sidemenu.js`, toe aan de
    HTML-pagina's die gebruik dienen te maken van het inklapbare zijmenu. Voor
    meer informatie zie:
    [JavaScript referentie toevoegen](/documentation/add-js).

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
class `sidemenu-closed` toe aan de `body`. Voor meer informatie zie:
[Uitklapbaar zijmenu](#sidemenu-expandable).

<h2 id="examples">Voorbeelden</h2>

<h3 id="sidemenu-collapsible">Inklapbaar zijmenu</h3>

<h4>Visueel voorbeeld</h4>

<div class="resize">
  <iframe
    src="/examples/sidemenu-in-page-collapsible"
    title="Voorbeeld"
    height="320px"
  ></iframe>
</div>

<h4>HTML-voorbeeld</h4>

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

<h3 id="sidemenu-expandable">Uitklapbaar zijmenu</h3>

Het menu is standaard ingeklapt en kan door de gebruiker uitgeklapt worden.

1.  Voeg de class `sidemenu-closed` toe aan de body.

#### Visueel voorbeeld

<div class="resize">
  <iframe src="/examples/sidemenu-in-page-expandable" title="Voorbeeld" height="320px"
  ></iframe>
</div>

<h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>

```html
<main class="sidemenu sidemenu-closed">
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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)
