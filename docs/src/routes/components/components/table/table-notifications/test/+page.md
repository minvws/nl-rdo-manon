---
title: Meldingen op tabel-elementen testpagina
breadcrumb: Meldingen op tabel-elementen testpagina
---

<h1 id="introduction">Meldingen op tabel-elementen testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Visueel voorbeeld:

  <div class="horizontal-scroll">
    <table>
      <caption> Tabelvoorbeeld meldingen: </caption>
      <thead>
        <tr>
          <th scope="col">Table header heading 1</th>
          <th scope="col">Table header heading 2</th>
          <th scope="col">Table header heading 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="error">Foutmelding op tabelrij</td>
          <td class="error">Foutmelding op tabelrij</td>
          <td class="error">Foutmelding op tabelrij</td>
        </tr>
        <tr>
          <td class="warning">Waarschuwing op tabelrij</td>
          <td class="warning">Waarschuwing op tabelrij</td>
          <td class="warning">Waarschuwing op tabelrij</td>
        </tr>
        <tr>
          <td class="confirmation">Bevestiging op tabelrij</td>
          <td class="confirmation">Bevestiging op tabelrij</td>
          <td class="confirmation">Bevestiging op tabelrij</td>
        </tr>
        <tr>
          <td class="explanation">Toelichting op tabelrij</td>
          <td class="explanation">Toelichting op tabelrij</td>
          <td class="explanation">Toelichting op tabelrij</td>
        </tr>
        <tr>
          <td class="primary">Primair op tabelrij</td>
          <td class="primary">Primair op tabelrij</td>
          <td class="primary">Primair op tabelrij</td>
        </tr>
      </tbody>
    </table>
  </div>

### HTML-voorbeeld:

#### `class` op individuele knoppen

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld meldingen:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
        <td class="error">Foutmelding op tabelrij</td>
      </tr>
      <tr>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
        <td class="warning">Waarschuwing op tabelrij</td>
      </tr>
      <tr>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
        <td class="confirmation">Bevestiging op tabelrij</td>
      </tr>
      <tr>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
        <td class="explanation">Toelichting op tabelrij</td>
      </tr>
      <tr>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
        <td class="primary">Primair op tabelrij</td>
      </tr>
    </tbody>
  </table>
</div>
```
