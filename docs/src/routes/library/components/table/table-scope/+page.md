---
title: Tabelrichting
breadcrumb: Tabelrichting
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van de tabelrichting

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
```

### Benodigde stappen

Voeg `scope="col"` of `scope="row"` toe aan de tabelcellen `th` of `td`,
afhankelijk van de richting.

<p class="explanation">
  <span>Aandachtspunten:</span>
  Het is hierbij belangrijk om rekening te houden met gebruikers die gebruik maken van
  hulptechnologieën zoals screenreaders. Om ook voor hen inzichtelijk te houden bij welke
  data de titel hoort is het van belang dit aan te geven. Dit kan gedaan worden door aan
  de <code>&lt;th&gt;</code> de tag <code>scope="col"</code> bij kolommen of
  <code>scope="row"</code> bij rijen toe te voegen.
</p>

<h2 id="examples">Voorbeelden</h2>

In dit voorbeeld staat dat de `<th>` binnen de `<thead>` over de data in de
kolommen gaan. En de `<th>` binnen de `<tbody>` over de data per rij gaan.

<div class="horizontal-scroll">
  <table>
    <caption> Tabelvoorbeeld met aangegeven scope: </caption>
    <thead>
      <tr>
        <th scope="col">Naam</th>
        <th scope="col">Diersoort</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Manon</th>
        <td>Kat</td>
      </tr>
      <tr>
        <th scope="row">Max</th>
        <td>Hond</td>
      </tr>
      <tr>
        <th scope="row">Keiko</th>
        <td>Kat</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met aangegeven scope:
    </caption>
    <thead>
      <tr>
        <th scope="col">Naam</th>
        <th scope="col">Diersoort</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Manon</th>
        <td>Kat</td>
      </tr>
      <tr>
        <th scope="row">Max</th>
        <td>Hond</td>
      </tr>
      <tr>
        <th scope="row">Keiko</th>
        <td>Kat</td>
      </tr>
    </tbody>
  </table>
</div>
```
