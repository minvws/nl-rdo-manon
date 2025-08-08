---
title: Tag
breadcrumb: Tag
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Tag</h1>

Visuele labels om bijvoorbeeld groeperingen aan te brengen binnen content en
data-sets.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Voeg de benodigde class toe op de gewenste elementen. Voor meer informatie
      over het implementeren zie de [voorbeelden](#examples).

<h2 id="examples">Voorbeelden</h2>

### `p` als tag

#### Visueel voorbeeld:

<p class="tag tags-color-1">Lorem ipsum</p>

#### HTML-Voorbeeld:

```html
<p class="tag tags-color-1">Lorem ipsum</p>
```

### `span` als tag

#### Visueel voorbeeld:

<span class="tag tags-color-1">Lorem ipsum</span>

#### HTML-Voorbeeld:

```html
<span class="tag tags-color-1">Lorem ipsum</span>
```

### `li` als tag

<p>
  Lijst-element visueel weergegeven als tag. Voor het direct aanspreken van alle
  lijstelementen zie: [tags](/tags).
</p>

#### Visueel voorbeeld:

<ul>
  <li class="tag tags-color-1">Lorem ipsum</li>
</ul>

#### HTML-Voorbeeld:

```html
<ul>
  <li class="tag tags-color-1">Lorem ipsum</li>
</ul>
```

### Tags binnen een tabel

<p>
  Tabel-elementen visueel weergegeven als tag. Voor het direct aanspreken van alle
  tabelelementen zie: [tags](/tags).
</p>

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
    <tbody>
      <tr>
        <td><p class="tag tags-color-1-light">Label</p></td>
        <td><p class="tag tags-color-1-medium">Label</p></td>
        <td><p class="tag tags-color-1-dark">Label</p></td>
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

### Tag styles

<p>Gebruik van verschillende `border-styles`.</p>

<p>
  Om de hoogte van alle tags gelijk te houden wordt de class `plain` toegevoegd. Visueel
  is er geen omlijning zichtbaar, maar deze wordt wel toegevoegd in de achtergrondkleur van de
  tag.
</p>

#### Visueel voorbeeld:

<p class="tag tags-color-1 plain">Lorem ipsum</p>

#### HTML-Voorbeeld:

```html
<p class="tag tags-color-1 plain">Lorem ipsum</p>
```

#### Visueel voorbeeld:

<p class="tag tags-color-1 solid">Lorem ipsum</p>

#### HTML-Voorbeeld:

```html
<p class="tag tags-color-1 solid">Lorem ipsum</p>
```

#### Visueel voorbeeld:

<p class="tag tags-color-1 dotted">Lorem ipsum</p>

#### HTML-Voorbeeld:

```html
<p class="tag tags-color-1 dotted">Lorem ipsum</p>
```

#### Visueel voorbeeld:

<p class="tag tags-color-1 dashed">Lorem ipsum</p>

#### HTML-Voorbeeld:

```html
<p class="tag tags-color-1 dashed">Lorem ipsum</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/tag";
```

### Kleurensets

<p>
  De bruikbare kleuren voor de tags worden toegevoegd via kleurensets. Beschikbare sets
  zijn:
</p>
<ul>
  <li><a href="tags-6">Tags kleurenset zes kleuren</a></li>
  <li><a href="tags-6-3">Tags kleurenset zes kleuren & drie tinten</a></li>
</ul>
