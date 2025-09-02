---
title: Tabeldata over meerdere rijen
breadcrumb: Tabeldata over meerdere rijen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<p class="introduction">Data weergeven over meer dan een rij kan gebruikt worden binnen tabellen.</p>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
```

## Benodigde stappen

1.  Om een datacel over meerdere rijen te plaatsen gebruik een
    `rowspan="[number]"`. Voorbeeld: `rowspan="2"` op de `td`.

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Data over meerdere rijen

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
