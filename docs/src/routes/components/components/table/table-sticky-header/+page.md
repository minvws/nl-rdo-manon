---
title: "sticky header"
breadcrumb: "sticky header"
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">"sticky header"</h1>

Voor lange tabellen kan het gewenst zijn om de tabel-header in het zicht te
houden zodat de gebruiker de titels kan zien.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/table";
@use "@minvws/manon/sticky-header";
```

## Benodigde stappen:

1.  Voeg de class `sticky-header` toe aan een `div` om de `table` heen. Deze is
    `div` is nodig om de `table` scrollbaar te maken.
2.  Een `sticky-header`-tabel heeft een maximale hoogte van de schermhoogte.
    Mocht er een andere maximale hoogte gewenst zijn zodat de tabel bijvooreeld
    minder hoog blijft kan deze via het variabelenbestand overschreven worden.

## Aandachtspunten

- Voeg een van de melding-classes toe aan een volledige tabelrij `tr` of aan een
  losse cel `th` / `td`. Beschikbare classes zijn:
  - `error`
  - `warning`
  - `confirmation`
  - `explanation`
  - `primary` Zie[Notifications](/components/notifications) voor meer
    informatie.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

<div class="horizontal-scroll sticky-header">
  <table>
    <caption> Tabelvoorbeeld met een sticky header. </caption>
    <thead>
      <tr>
        <th scope="col">Heading 1</th>
        <th scope="col">Heading 2</th>
        <th scope="col">Heading 3</th>
      </tr>
    </thead>
    <tbody>
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

### HTML-voorbeeld:

```html
<div class="horizontal-scroll sticky-header">
  <table>
    <caption>
      Tabelvoorbeeld met een sticky header.
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
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
```
