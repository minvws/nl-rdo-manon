---
title: Gecomprimeerde weergave
breadcrumb: Gecomprimeerde weergave
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het tonen van grote datasets kan het voor de gebruiksvriendelijkheid fijner
zijn om de data gecomprimeerd weer te geven zodat het makkelijker is voor de
gebruiker om overzicht te houden.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
@use "@minvws/manon/table-condensed";
```

### Benodigde stappen

1. Voeg de class `condensed` toe op de `table`.

<p class="explanation">
  <span>Aandachtspunten:</span>
  Voor het tonen van grote datasets kan het voor de gebruiksvriendelijkheid
  fijner zijn om de data gecomprimeerd weer te geven zodat het makkelijker is
  voor de gebruiker om overzicht te houden.
</p>

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table class="condensed">
    <caption> Tabelvoorbeeld met gecomprimeerde weergave. </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table class="condensed">
    <caption>
      Simple table example:
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
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
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
