---
title: Tabel bijschrift caption
breadcrumb: Tabel bijschrift caption
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Om de gebruiker te informeren over de inhoud van de tabel, is het aan te raden
om een titel toe te voegen met daarin de omschrijving van de tabel. Voeg direct
binnen de `table` een `caption` toe om de titel toe te voegen.

Het toevoegen van een `caption` vergroot de gebruiksvriendelijkheid van de site.
Gebruik maken van een `caption` helpt gebruikers om snel te kunnen bepalen of de
inhoud van de tabel interessant is voor hen. Gebruikers die gebruik maken van
screenreaders om de content voor te lezen, bijvoorbeeld bij blindheid, slecht-
of bijziendheid, kunnen de tabelomschrijving gebruiken om te bepalen of ze de
inhoud van de tabel volledig willen horen of overslaan.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/table";
@use "@minvws/manon/components/table-caption";
```

### Benodigde stappen

1.  Voeg de `caption` direct direct binnen de `table` toe.
2.  Vul de `caption` met een korte maar duidelijke omschrijving van de inhoud
    van de tabel.

<h2 id="examples">Voorbeelden</h2>

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
