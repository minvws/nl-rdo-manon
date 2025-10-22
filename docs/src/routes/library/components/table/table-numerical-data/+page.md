---
title: Tabel met numerieke data
breadcrumb: Tabel met numerieke data
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Getallen worden visueel onderscheidend weergegeven van overige celdata om de
gebruiksvriendelijkheid te vergroten.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/table";
```

### Benodigde stappen

1.  Om gebruik te maken van de weergave voor numerieke data, voeg de class
    `number` toe aan de cellen die numerieke data bevatten en de bijbehorende
    titelblokken

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table>
    <caption> Tabelvoorbeeld met numerieke data: </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading</th>
        <th scope="col" class="number">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td class="number">52,12</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td class="number">110,00</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td class="number">2,00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Totaal</td>
        <td class="number">164,12</td>
      </tr>
    </tfoot>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met numerieke data:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading</th>
        <th scope="col" class="number">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td class="number">52,12</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td class="number">110,00</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td class="number">2,00</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Totaal</td>
        <td class="number">164,12</td>
      </tr>
    </tfoot>
  </table>
</div>
```

<div class="explanation">
 <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
  <p>Getallen worden vaak rechts uitgelijnd voor leesbaarheid.</p>
  <p>Voor consistentie wordt de titel van kolommen met numerieke data vaak op dezelfde manier uitgelijnd.</p>
  <p>
    Getallen worden <dfn>mono-spaced</dfn> weergegeven, wat inhoud dat ieder getal dezelfde breedte heeft waardoor getallen onderling goed te vergelijken zijn.
  </p>
</div>
