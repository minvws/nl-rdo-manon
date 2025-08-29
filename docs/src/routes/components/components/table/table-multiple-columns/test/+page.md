---
title: Tabeldata over meerdere kolommen testpagina
breadcrumb: Tabeldata over meerdere kolommen testpagina
---

<h1 id="introduction">Tabeldata over meerdere kolommen testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Visueel voorbeeld:

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
