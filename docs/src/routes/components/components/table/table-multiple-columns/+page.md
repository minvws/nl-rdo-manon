---
title: Tabeldata over meerdere kolommen
breadcrumb: Tabeldata over meerdere kolommen
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

### Benodigde stappen

1.  Om een datacel over meerdere kolommen te plaatsen gebruik een
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
