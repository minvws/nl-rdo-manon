---
title: List
breadcrumb: List
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het toevoegen en tonen van opsommingen en lijsten.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/list";
```

<h2 id="examples">Voorbeeld</h2>

### Voorbeeld: Ongenummerde lijst

<ul>
  <li>List item</li>
  <li>List item</li>
</ul>

```html
<ul>
  <li>List item</li>
  <li>List item</li>
</ul>
```

### Voorbeeld: Ongenummerde lijst met geneste elementen

<ul>
  <li>List item</li>
  <li>List item
    <ul>
      <li>Subitem</li>
      <li>Subitem</li>
    </ul>
  </li>
  <li>List item</li>
</ul>

```html
<ul>
  <li>List item</li>
  <li>
    List item
    <ul>
      <li>Subitem</li>
      <li>Subitem</li>
    </ul>
  </li>
  <li>List item</li>
</ul>
```

### Voorbeeld: Genummerde lijst

<ol>
  <li>List item</li>
  <li>List item</li>
</ol>

```html
<ol>
  <li>List item</li>
  <li>List item</li>
</ol>
```

### Voorbeeld: Genummerde lijst met geneste elementen

<ol>
  <li>List item</li>
  <li>
    List item
    <ol>
      <li>Subitem</li>
      <li>Subitem</li>
    </ol>
  </li>
  <li>List item</li>
</ol>

```html
<ol>
  <li>List item</li>
  <li>
    List item
    <ol>
      <li>Subitem</li>
      <li>Subitem</li>
    </ol>
  </li>
  <li>List item</li>
</ol>
```

### Voorbeeld: Genummerde lijst met hoofdletters

<ol type="A">
    <li>List item</li>
    <li>List item</li>
</ol>

```html
<ol type="A">
  <li>List item</li>
  <li>List item</li>
</ol>
```

### Voorbeeld: Genummerde lijst met kleine letters

<ol type="a">
    <li>List item</li>
    <li>List item</li>
</ol>

```html
<ol type="a">
  <li>List item</li>
  <li>List item</li>
</ol>
```

### Voorbeeld: Genummerde lijst met Romeinse cijfers in hoofdletters

<ol type="I">
    <li>List item</li>
    <li>List item</li>
</ol>

```html
<ol type="I">
  <li>List item</li>
  <li>List item</li>
</ol>
```

### Voorbeeld: Genummerde lijst met Romeinse cijfers in kleine letters

<ol type="i">
    <li>List item</li>
    <li>List item</li>
</ol>

```html
<ol type="i">
  <li>List item</li>
  <li>List item</li>
</ol>
```

### Voorbeeld: Gecombineerde lijstweergave

Het is mogelijk om binnen een lijst gebruik te maken van verschillende lijstweergaven. Bijvoorbeeld een lijst met daarbinnen een genummerde lijst of een lijst met navigatie-elementen

#### Ongenummerde lijst met daarbinnen genummerde lijstelementen

<ul>
    <li>Unordered list item</li>
    <li>Unordered list item
        <ol>
            <li>Ordered subitem</li>
            <li>Ordered subitem</li>
        </ol>
    </li>
</ul>

```html
<ul>
  <li>Unordered list item</li>
  <li>
    Unordered list item
    <ol>
      <li>Ordered subitem</li>
      <li>Ordered subitem</li>
    </ol>
  </li>
</ul>
```

#### Genummerde lijst met daarbinnen ongenummerde lijstelementen

<ol>
    <li>Unordered list item</li>
    <li>Unordered list item
        <ul>
            <li>Ordered subitem</li>
            <li>Ordered subitem</li>
        </ul>
    </li>
</ol>

```html
<ol>
  <li>Unordered list item</li>
  <li>
    Unordered list item
    <ul>
      <li>Ordered subitem</li>
      <li>Ordered subitem</li>
    </ul>
  </li>
</ol>
```
