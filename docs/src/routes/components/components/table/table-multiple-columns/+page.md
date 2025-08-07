---
title: Tabeldata over meerdere kolommen
breadcrumb: Tabeldata over meerdere kolommen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Benodigdheden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Tabeldata over meerdere kolommen</h1>

Data weergeven over meer dan een rij kan gebruikt worden binnen tabellen.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie: [Benodigdheden](#requirements). Voor
    meer informatie over importeren en instellen van componenten. Zie:
    [Componenten gebruiken en styling toevoegen](/documentation/import-styling)
2.  Om een datacel over meerdere kolommen te plaatsen gebruik een
    `colspan="[number]"`. Voorbeeld: `colspan="3"` op de `td`.

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table>
    <caption> Tabelvoorbeeld met data over meerdere kolommen: </caption>
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
        <td>150</td>
      </tr>
      <tr>
        <td colspan="3">Ipsum</td>
      </tr>
    </tbody>
  </table>
</div>

### HTML-voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met data over meerdere kolommen:
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
        <td>150</td>
      </tr>
      <tr>
        <td colspan="3">Ipsum</td>
      </tr>
    </tbody>
  </table>
</div>
```

<h2 id="requirements">Benodigdheden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/table";
```

<h2 id="variables">Instelbare variabelen</h2>

<p class="system-notification" role="group" aria-label="systeembericht">
  Dit component heeft momenteel geen instelbare variabelen
</p>

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/table-multiple-columns-test">Test- en
voorbeelden-pagina</a>
