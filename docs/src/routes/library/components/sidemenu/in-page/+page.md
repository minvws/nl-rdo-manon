---
title: Zijmenu binnen de pagina
breadcrumb: Zijmenu binnen de pagina
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden.

In dit voorbeeld staat het zijmenu binnen de pagina bij de content. Gebruik deze
weergave alleen als de inhoud van het zijmenu specifiek over de content gaat.
Bijvoorbeeld een inhoudsopgave. Hoort het zijmenu niet bij de inhoud van de
pagina. Plaats het zijmenu dan naast de pagina. Voor meer informatie zie
[Zijmenu naast de pagina](/library/components/sidemenu/next-to-page).

## Benodigde stappen

1.  Voeg de class `sidemenu` toe aan de `main`.
2.  Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.
3.  Groepeer de overige content in een enkel element indien dat nog niet gebeurd
    is. Bijvoorbeeld: `div`, `article` of `section`.

## Aandachtspunten

- <p>
  Deze versie is een zijmenu zonder inklapfunctionaliteit. Deze versie maakt geen
  gebruik van JavaScript.
  </p>

<h2 id="examples">Voorbeelden</h2>

### Zijmenu

#### Visueel voorbeeld

<div class="resize">
  <iframe src="{base}/snippets/sidemenu-in-page" title="Voorbeeld" height="320px"></iframe>
</div>

#### HTML-voorbeeld

```html
<header class="page-header">
  <div>
    <nav>
      <div class="collapsing-element">
        <ul>
          <li><a href="{base}/">Home</a></li>
        </ul>
      </div>
    </nav>
  </div>
</header>
<main class="sidemenu">
  <nav aria-label="Zijbalknavigatie">
    <ul>
      <li><a href="{base}/">Voorbeeld link 1</a></li>
      <li><a href="{base}/">Voorbeeld link 2</a></li>
      <li><a href="{base}/">Voorbeeld link 3</a></li>
      <li><a href="{base}/">Voorbeeld link 4</a></li>
    </ul>
  </nav>
  <article>
    <div>
      <h2>Lorem ipsum</h2>
      <p>Dolor sit amet conseqtetur adepicing elit</p>
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

<h4 id="sidemenu-structure">HTML-voorbeeld structuur</h4>

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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen]({base}/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```scss
@use "@minvws/manon/sidemenu";
```
