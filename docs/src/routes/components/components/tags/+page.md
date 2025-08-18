---
title: Tags
breadcrumb: Tags
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Tags</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/tag";
@use "@minvws/manon/tags";
```

De mogelijkheid om onderliggende elementen visueel als tags weer te geven.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Voeg de benodigde class toe op de gewenste elementen. Voor meer informatie
      over het implementeren zie de [voorbeelden](#examples).
    - Voor horizontale weergave voeg de class `horizontal` toe.
    - Vul de gewenste variabelen in om de uitlijning van horizontaal uitgelijnde
      tags in te stellen. Voor meer informatie zien: [variabelen](#variables)

<h2 id="examples">Voorbeelden</h2>

### Tags binnen een lijst

#### Visueel voorbeeld:

<ul class="tags horizontal">
  <li class="tags-color-1-light">Lorem ipsum</li>
  <li class="tags-color-2-light">Lorem ipsum</li>
  <li class="tags-color-3-light">Lorem ipsum</li>
</ul>

#### HTML-Voorbeeld:

```html
<ul class="tags horizontal">
  <li class="tags-color-1-light">Lorem ipsum</li>
  <li class="tags-color-2-light">Lorem ipsum</li>
  <li class="tags-color-3-light">Lorem ipsum</li>
</ul>
```

### Tags binnen een `div`

#### Visueel voorbeeld:

<div class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</div>

#### HTML-Voorbeeld:

```html
<div class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</div>
```

### Tags binnen een `section`

#### Visueel voorbeeld:

<section class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</section>

#### HTML-Voorbeeld:

```html
<section class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</section>
```

### Tags op tabel

Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van een
enkel element zie: [tags](/components/components/tag).

#### Visueel voorbeeld:

<div class="horizontal-scroll">
  <table class="tags">
    <caption>Voorbeeld tag binnen tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>

#### HTML-Voorbeeld:

```html
<div class="horizontal-scroll">
  <table class="tags">
    <caption>
      Voorbeeld tag binnen tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Tags binnen een tabel

Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van een
enkel element zie: [tags](/components/components/tag).

#### Visueel voorbeeld:

<div class="horizontal-scroll">
  <table>
    <caption>Voorbeeld tag binnen tabel:</caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody class="tags">
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>

#### HTML-Voorbeeld:

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Voorbeeld tag binnen tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Licht</th>
        <th scope="col">Medium</th>
        <th scope="col">Donker</th>
      </tr>
    </thead>
    <tbody class="tags">
      <tr>
        <td><p class="tags-color-1-light">Label</p></td>
        <td><p class="tags-color-1-medium">Label</p></td>
        <td><p class="tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>
```
