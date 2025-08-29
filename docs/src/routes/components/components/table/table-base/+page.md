---
title: Tabel basisweergave
breadcrumb: Tabel basisweergave
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Tabel</h1>

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
```

<p class="explanation">
  <span>Aandachtspunten:</span>
  Om tabellen correct weer te geven op smallere schermresoluties, denk hierbij
  aan mobiele apparaten, dient er een `div` om de `table` te staan met de
  class `horizontal-scroll`.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Voorbeeld: Tabel met footer

<div class="horizontal-scroll">
  <table>
    <caption>Tabelvoorbeeld met footer:</caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="col">Table footer heading 1</th>
        <th scope="col">Table footer heading 2</th>
        <th scope="col">Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Tabelvoorbeeld met footer:
    </caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Table footer heading 1</th>
        <th>Table footer heading 2</th>
        <th>Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>
```

<p class="explanation">
  Om de gebruiker te informeren over de inhoud van de tabel, is het aan te raden om een
  titel toe te voegen met daarin de omschrijving van de tabel. Voeg direct binnen de
  `table` een `caption` toe om de titel toe te voegen.
</p>

### Voorbeeld: Tabel met rij-headers

<div class="horizontal-scroll">
  <table>
    <caption>Basisvoorbeeld tabel met rij-headers:</caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Rij 1</th>
        <td>Lorem ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <th scope="row">Rij 2</th>
        <td>Lorem ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <th scope="row">Rij 3</th>
        <td>Lorem ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <th scope="row">Rij 4</th>
        <td>Lorem ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Kolom 1</th>
        <th scope="col">Kolom 2</th>
        <th scope="col">Kolom 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit amet</td>
      </tr>
    </tbody>
  </table>
</div>
```
