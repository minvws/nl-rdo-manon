---
title: Tags
breadcrumb: Tags
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

De mogelijkheid om onderliggende elementen visueel als tags weer te geven.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/tag";
@use "@minvws/manon/components/tags";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Tags binnen een lijst

<ul class="tags horizontal">
  <li class="tags-color-1-light">Lorem ipsum</li>
  <li class="tags-color-2-light">Lorem ipsum</li>
  <li class="tags-color-3-light">Lorem ipsum</li>
</ul>

```html
<ul class="tags horizontal">
  <li class="tags-color-1-light">Lorem ipsum</li>
  <li class="tags-color-2-light">Lorem ipsum</li>
  <li class="tags-color-3-light">Lorem ipsum</li>
</ul>
```

### Voorbeeld: Tags binnen een `div`

<div class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</div>

```html
<div class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</div>
```

### Voorbeeld: Tags binnen een `section`

<section class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</section>

```html
<section class="tags horizontal">
  <p class="tags-color-1-light">Lorem ipsum</p>
  <p class="tags-color-2-light">Lorem ipsum</p>
  <p class="tags-color-3-light">Lorem ipsum</p>
</section>
```

### Voorbeeld: Tags op tabel

Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van een
enkel element zie: [tags](/library/components/tag).

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
enkel element zie: [tags](/library/components/tag).

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
