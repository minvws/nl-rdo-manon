---
title: Tabel numerieke data testpagina
breadcrumb: Tabel numerieke data testpagina
---

<h1 id="introduction">Tabel numerieke data testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

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
    <caption>Tabelvoorbeeld met selectievak:</caption>
    <thead>
      <tr>
        <th scope="col"><input type="checkbox"></th>
        <th scope="col">Table header heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox"></td>
        <td>Ipsum</td>
      </tr>
    </tbody>
  </table>
</div>
```
