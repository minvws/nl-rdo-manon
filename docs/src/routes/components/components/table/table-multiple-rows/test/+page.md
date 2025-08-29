---
title: Tabeldata over meerdere rijen testpagina
breadcrumb: Tabeldata over meerdere rijen testpagina
---

<h1 id="introduction">Tabeldata over meerdere rijen testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

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
