---
title: Tag
breadcrumb: Tag
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Visuele labels om bijvoorbeeld groeperingen aan te brengen binnen content en data-sets.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/tag";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `p` als tag

<p class="tag tags-color-1">Lorem ipsum</p>

```html
<p class="tag tags-color-1">Lorem ipsum</p>
```

### Voorbeeld: `span` als tag

<span class="tag tags-color-1">Lorem ipsum</span>

```html
<span class="tag tags-color-1">Lorem ipsum</span>
```

### Voorbeeld: `li` als tag

Lijst-element visueel weergegeven als tag. Voor het direct aanspreken van alle
lijstelementen zie: [tags](/library/components/tags).

<ul>
  <li class="tag tags-color-1">Lorem ipsum</li>
</ul>

```html
<ul>
  <li class="tag tags-color-1">Lorem ipsum</li>
</ul>
```

### Voorbeeld: Tags binnen een tabel

Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van alle
tabelelementen zie: [tags](/library/components/tags).

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
    <tbody>
      <tr>
        <td><p class="tag tags-color-1-light">Label</p></td>
        <td><p class="tag tags-color-1-medium">Label</p></td>
        <td><p class="tag tags-color-1-dark">Label</p></td>
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
    <tbody>
      <tr>
        <td><p class="tag tags-color-1-light">Label</p></td>
        <td><p class="tag tags-color-1-medium">Label</p></td>
        <td><p class="tag tags-color-1-dark">Label</p></td>
      </tr>
    </tbody>
  </table>
</div>
```

### Voorbeeld: Tag styles

Gebruik van verschillende `border-styles`.

Om de hoogte van alle tags gelijk te houden wordt de class `plain` toegevoegd.
Visueel is er geen omlijning zichtbaar, maar deze wordt wel toegevoegd in de
achtergrondkleur van de tag.

<p class="tag tags-color-1 plain">Lorem ipsum</p>

```html
<p class="tag tags-color-1 plain">Lorem ipsum</p>
```

<p class="tag tags-color-1 solid">Lorem ipsum</p>

```html
<p class="tag tags-color-1 solid">Lorem ipsum</p>
```

<p class="tag tags-color-1 dotted">Lorem ipsum</p>

```html
<p class="tag tags-color-1 dotted">Lorem ipsum</p>
```

<p class="tag tags-color-1 dashed">Lorem ipsum</p>

```html
<p class="tag tags-color-1 dashed">Lorem ipsum</p>
```
