---
title: Tabel met numerieke data
breadcrumb: Tabel met numerieke data
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tabel met numerieke data</h1>

Getallen worden visueel onderscheidend weergegeven van overige celdata om de
gebruiksvriendelijkheid te vergroten.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie: [Benodigdheden](#requirements). Voor
    meer informatie over importeren en instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Om gebruik te maken van de weergave voor numerieke data, voeg de class
    `number` toe aan de cellen die numerieke data bevatten en de bijbehorende
    titelblokken

## Aandachtspunten

- Getallen worden vaak rechts uitgelijnd voor leesbaarheid.
- Voor consistentie wordt de titel van kolommen met numerieke data vaak op
  dezelfde manier uitgelijnd.
- Getallen worden <dfn>mono-spaced</dfn> weergegeven, wat inhoud dat ieder getal
  dezelfde breedte heeft waardoor getallen onderling goed te vergelijken zijn.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

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
        <td>52,12</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>110,00</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>2,00</td>
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

### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met selectievak:
    </caption>
    <thead>
      <tr>
        <th scope="col"><input type="checkbox" /></th>
        <th scope="col">Table header heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Ipsum</td>
      </tr>
    </tbody>
  </table>
</div>
```

<h2 id="requirements">Benodigdheden</h2>

<ul>
  <li>`table/table-base.scss`</li>
  <li>`table/table-base-variables.scss`</li>
  <li>`form/form-checkbox.scss`</li>
  <li>`form/form-checkbox-variables.scss`</li>
</ul>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/table-numerical-data-test">Test- en voorbeelden-pagina</a>
