---
title: Samenvattingstabel
breadcrumb: Samenvattingstabel
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Geschikt voor het tonen van korte overzichten en samenvattingen bij complexe
tabellen en documenten.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Tabel

<table class="summary">
  <caption> Samenvatting overzicht lorem ipsum: </caption>
  <thead>
    <tr>
      <th scope="col">Risicolevel</th>
      <th scope="col">Hoeveelheid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="critical">Critical</span></td>
      <td class="number">1</td>
    </tr>

    <tr>
      <td><span class="high">Hoog</span></td>
      <td class="number">1</td>
    </tr>

    <tr>
      <td><span class="medium">Gemiddeld</span></td>
      <td class="number">3</td>
    </tr>

    <tr>
      <td><span class="low">Laag</span></td>
      <td class="number">6</td>
    </tr>

    <tr>
      <td><span class="recommendation">Aanbeveling</span></td>
      <td class="number">10</td>
    </tr>

  </tbody>
  <tfoot>
    <tr>
      <td>Totaal</td>
      <td class="number">21</td>
    </tr>
  </tfoot>
</table>

```html
<table class="summary">
  <caption>
    Samenvatting overzicht lorem ipsum:
  </caption>
  <thead>
    <tr>
      <th scope="col">Risicolevel</th>
      <th scope="col">Hoeveelheid</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="critical">Critical</span></td>
      <td class="number">1</td>
    </tr>

    <tr>
      <td><span class="high">Hoog</span></td>
      <td class="number">1</td>
    </tr>

    <tr>
      <td><span class="medium">Gemiddeld</span></td>
      <td class="number">3</td>
    </tr>

    <tr>
      <td><span class="low">Laag</span></td>
      <td class="number">6</td>
    </tr>

    <tr>
      <td><span class="recommendation">Aanbeveling</span></td>
      <td class="number">10</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Totaal</td>
      <td class="number">21</td>
    </tr>
  </tfoot>
</table>
```

### Voorbeeld: Horizontale scrollbare tabel

Plaats de class `summary` op de omliggende `div`. Voorbeeld:
`<div class="horizontal-scroll summary">`.

<div class="horizontal-scroll summary">
  <table>
    <caption>Samenvatting overzicht lorem ipsum:</caption>
    <thead>
      <tr>
        <th scope="col">Risicolevel</th>
        <th scope="col">Hoeveelheid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="critical">Critical</span></td>
        <td class="number">1</td>
      </tr>

      <tr>
        <td><span class="high">Hoog</span></td>
        <td class="number">1</td>
      </tr>

      <tr>
        <td><span class="medium">Gemiddeld</span></td>
        <td class="number">3</td>
      </tr>

      <tr>
        <td><span class="low">Laag</span></td>
        <td class="number">6</td>
      </tr>

      <tr>
        <td><span class="recommendation">Aanbeveling</span></td>
        <td class="number">10</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Totaal</td>
        <td class="number">21</td>
      </tr>
    </tfoot>

  </table>
</div>

```html
<div class="horizontal-scroll summary">
  <table>
    <caption>
      Samenvatting overzicht lorem ipsum:
    </caption>
    <thead>
      <tr>
        <th scope="col">Risicolevel</th>
        <th scope="col">Hoeveelheid</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="critical">Critical</span></td>
        <td class="number">1</td>
      </tr>

      <tr>
        <td><span class="high">Hoog</span></td>
        <td class="number">1</td>
      </tr>

      <tr>
        <td><span class="medium">Gemiddeld</span></td>
        <td class="number">3</td>
      </tr>

      <tr>
        <td><span class="low">Laag</span></td>
        <td class="number">6</td>
      </tr>

      <tr>
        <td><span class="recommendation">Aanbeveling</span></td>
        <td class="number">10</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Totaal</td>
        <td class="number">21</td>
      </tr>
    </tfoot>
  </table>
</div>
```
