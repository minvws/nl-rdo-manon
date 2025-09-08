---
title: Zijmenu naast de pagina
breadcrumb: Zijmenu naast de pagina
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<p id="introduction">Voor het plaatsen van een zijmenu naast de pagina.</p>

Gebruik deze weergave als de inhoud van het zijmenu niet over de content van de
pagina gaat maar website breed is. Zoals bijvoorbeeld hoofdnavigatie.

Gaat de inhoud van het zijmenu over de inhoud van de content. En hoort het bij
de content. Gebruik dan:
[Zijmenu binnen de pagina]({base}/components/components/sidemenu/in-page)

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/sidemenu";
```

## Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `body`.
2.  Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`. Voor meer informatie zie:
    [Voorbeeld sidemenu structuur](#sidemenu-structure).

## Aandachtspunten

- Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt
  geen gebruik van JavaScript.

<h2 id="examples">Voorbeelden</h2>

### Zijmenu

#### Visueel voorbeeld

Zie het zijmenu van deze pagina.

<div class="resize">
  <iframe src="{base}/snippets/sidemenu-next-to-page" title="Voorbeeld" height="320px"
  ></iframe>
</div>

#### HTML-voorbeeld

```html
<body class="sidemenu">
  <nav>
    <ul>
      <li><a href="{base}/">Voorbeeld link 1</a></li>
      <li><a href="{base}/">Voorbeeld link 2</a></li>
      <li><a href="{base}/">Voorbeeld link 3</a></li>
      <li><a href="{base}/">Voorbeeld link 4</a></li>
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

<h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>

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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen]({base}/getting-started/installation)
