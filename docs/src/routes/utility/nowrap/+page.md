---
title: nowrap
breadcrumb: nowrap
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Zorgt ervoor dat woorden en teksten niet afgebroken worden maar op dezelfde
regel blijven doorlopen.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/nowrap";
```

<p class="explanation">
  <span>Toelichting:</span> Door de class op een specifieker element te plaatsen,
  bijvoorbeeld een <code>td</code> zal het effect beperkt blijven tot het specifieke
  element. Door de class op een hoger gelegen element te plaatsen, bijvoorbeeld de
  <code>table</code>
  of de omliggende <code>div</code> zullen alle onderliggende tekst-elementen niet afbreken.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<p class="nowrap horizontal-scroll">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>

```html
<p class="nowrap horizontal-scroll">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
</p>
```

<p class="explanation">
  <span>Toelichting:</span> In dit voorbeeld wordt er ook gebruik gemaakt van de
  <dfn>helper-class</dfn>
  <a href="{base}/utility/horizontal-scroll">horizontal-scroll</a>
  om te voorkomen dat het voorbeeld-element de layout van de pagina breekt. Zonder deze toevoeging
  zou de tekst het scherm uitlopen. De class <code>horizontal-scroll</code> voegt op de maximale
  beschikbare breedte de scrollbalk toe.
</p>

### Voorbeeld: Tabel met nowrap

<div class="horizontal-scroll">
  <table class="nowrap">
    <caption>Basisvoorbeeld tabel met "nowrap":</caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</td
        >
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table class="nowrap">
    <caption>
      Basisvoorbeeld tabel met "nowrap":
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
        <td>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
```
