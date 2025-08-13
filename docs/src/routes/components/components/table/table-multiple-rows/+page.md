---
title: Tabeldata over meerdere rijen
breadcrumb: Tabeldata over meerdere rijen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tabeldata over meerdere rijen</h1>

Data weergeven over meer dan een rij kan gebruikt worden binnen tabellen.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie: [Benodigdheden](#requirements). Voor
    meer informatie over importeren en instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Om een datacel over meerdere rijen te plaatsen gebruik een
    `rowspan="[number]"`. Voorbeeld: `rowspan="2"` op de `td`.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<div class="horizontal-scroll">
  <table>
    <caption> Tabelvoorbeeld met data over meerdere rijen: </caption>
    <thead>
      <tr>
        <th scope="col">Lorem ipsum</th>
        <th scope="col">Dolor set</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>10</td>
        <td rowspan="3">150</td>
      </tr>
      <tr>
        <td>Ipsum</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>40</td>
      </tr>
    </tbody>
  </table>
</div>

### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met data over meerdere rijen:
    </caption>
    <thead>
      <tr>
        <th scope="col">Lorem ipsum</th>
        <th scope="col">Dolor set</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>10</td>
        <td rowspan="3">150</td>
      </tr>
      <tr>
        <td>Ipsum</td>
        <td>100</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>40</td>
      </tr>
    </tbody>
  </table>
</div>
```

<h2 id="requirements">Benodigdheden</h2>

<ul>
  <li>`table/table-base.scss`</li>
  <li>`table/table-base-variables.scss`</li>
</ul>

<h2 id="variables">Instelbare variabelen</h2>

<p class="system-notification" role="group" aria-label="systeembericht">
  Dit component heeft momenteel geen instelbare variabelen
</p>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/table-multiple-rows-test">Test- en voorbeelden-pagina</a>
