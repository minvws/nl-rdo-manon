---
title: Tabbladen testpagina
breadcrumb: Tabbladen testpagina
---

<h1 id="introduction">Tabbladen testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

<h2>`nav` met class tabs</h2>

<nav class="tabs" id="nav">
  <ul>
    <li><a href="#nav" aria-current="page">Optie 1</a></li>
    <li><a href="#nav">Optie 2</a></li>
    <li><a href="#nav">Optie 3</a></li>
    <li><a href="#nav">Optie 4</a></li>
  </ul>
</nav>

<p>HTML-voorbeeld:</p>

```html
<div class="tabs">
    <ul>
        <li><a href="#" aria-current="page">Optie 1</a></li>
        <li><a href="#">Optie 2</a></li>
        <li><a href="#">Optie 3</a></li>
        <li><a href="#">Optie 4</a></li>
    </ul>
</div>
```

<h2>`span` op `aria-current`.</h2>

<div class="tabs" id="span">
  <ul>
    <li><span aria-current="page">Optie 1</span></li>
    <li><a href="#span">Optie 2</a></li>
    <li><a href="#span">Optie 3</a></li>
    <li><a href="#span">Optie 4</a></li>
  </ul>
</div>

<p>HTML-voorbeeld:</p>

```html
<div class="tabs">
    <ul>
        <li><span aria-current="page">Optie 1</span></li>
        <li><a href="#">Optie 2</a></li>
        <li><a href="#">Optie 3</a></li>
        <li><a href="#">Optie 4</a></li>
    </ul>
</div>
```

<h2>`aria-current` op `li`</h2>

<div class="tabs" id="li">
  <ul>
    <li aria-current="page"><a href="#li">Optie 1</a></li>
    <li><a href="#li">Optie 2</a></li>
    <li><a href="#li">Optie 3</a></li>
    <li><a href="#li">Optie 4</a></li>
  </ul>
</div>

<p>HTML-voorbeeld:</p>

```html
<div class="tabs">
    <ul>
        <li aria-current="page"><a href="#">Optie 1</a></li>
        <li><a href="#">Optie 2</a></li>
        <li><a href="#">Optie 3</a></li>
        <li><a href="#">Optie 4</a></li>
    </ul>
</div>
```

<h2>Section</h2>

<section class="tabs" id="section">
  <ul>
    <li><a href="#section" aria-current="page">Optie 1</a></li>
    <li><a href="#section">Optie 2</a></li>
    <li><a href="#section">Optie 3</a></li>
    <li><a href="#section">Optie 4</a></li>
  </ul>
</section>

<p>HTML-voorbeeld:</p>

```html
<section class="tabs">
    <ul>
        <li><a href="#" aria-current="page">Optie 1</a></li>
        <li><a href="#">Optie 2</a></li>
        <li><a href="#">Optie 3</a></li>
        <li><a href="#">Optie 4</a></li>
    </ul>
</section>
```

<h2>Zonder container</h2>

<ul class="tabs" id="no-container">
  <li><a href="#no-container" aria-current="page">Optie 1</a></li>
  <li><a href="#no-container">Optie 2</a></li>
  <li><a href="#no-container">Optie 3</a></li>
  <li><a href="#no-container">Optie 4</a></li>
</ul>

<p>HTML-voorbeeld:</p>

```html
<ul class="tabs">
    <li><a href="#" aria-current="page">Optie 1</a></li>
    <li><a href="#">Optie 2</a></li>
    <li><a href="#">Optie 3</a></li>
    <li><a href="#">Optie 4</a></li>
</ul>
```
