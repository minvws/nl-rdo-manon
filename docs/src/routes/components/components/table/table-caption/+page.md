---
title: Tabel bijschrift caption
breadcrumb: Tabel bijschrift caption
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tabel bijschrift `caption`</h1>

Om de gebruiker te informeren over de inhoud van de tabel, is het aan te raden
om een titel toe te voegen met daarin de omschrijving van de tabel. Voeg direct
binnen de `table` een `caption` toe om de titel toe te voegen.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie: [Benodigdheden](#requirements). Voor
    meer informatie over importeren en instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Voeg de `caption` direct direct binnen de `table` toe.
3.  Vul de `caption` met een korte maar duidelijke omschrijving van de inhoud
    van de tabel.

## Aandachtspunten

- Het toevoegen van een `caption` vergroot de gebruiksvriendelijkheid van de
  site.
  - Gebruik maken van een `caption` helpt gebruikers om snel te kunnen bepalen
    of de inhoud van de tabel interessant is voor hen.
  - Gebruikers die gebruik maken van screenreaders om de content voor te lezen,
    bijvoorbeeld bij blindheid, slecht- of bijziendheid, kunnen de
    tabelomschrijving gebruiken om te bepalen of ze de inhoud van de tabel
    volledig willen horen of overslaan.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<div class="horizontal-scroll">
  <table>
    <caption> Basisvoorbeeld tabel: </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
      </tr>
    </tbody>
  </table>
</div>

### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
      </tr>
    </tbody>
  </table>
</div>
```

### HTML-structuur-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <!-- table content -->
  </table>
</div>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/table";
@use "@minvws/manon/table-caption";
```

<h2 id="variables">Instelbare variabelen</h2>

<ul>
  <li>
    <a href="/documentation/variables#background-color">background-color</a>
  </li>
  <li><a href="/documentation/variables#text-color">text-color</a></li>
  <li><a href="/documentation/variables#font-size">font-size</a></li>
  <li><a href="/documentation/variables#line-height">line-height</a></li>
  <li><a href="/documentation/variables#padding">padding</a></li>
  <li><a href="/documentation/variables#text-align">text-align</a></li>
</ul>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/table-caption-test">Test- en voorbeelden-pagina</a>
