---
title: Link
breadcrumb: Link
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Links zijn klikbare elementen op een website die de gebruiker naar een andere pagina, sectie of externe website brengen. Ze maken navigatie en toegang tot informatie eenvoudig.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/link";
```

<h2 id="examples">Voorbeelden</h2>

### Link

<a href="link">Inloggen</a>

```html
<a href="link">Inloggen</a>
```

### Link met icoon voor

<a href="link"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>

```html
<a href="link"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
```

### Link met icoon achter

<a href="link">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

```html
<a href="link">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>
```

### Externe link met icoon ervoor

<a href="link" rel="external"><span class="icon icon-outgoing" aria-hidden="true"></span>Lorem ipsum</a>

```html
<a href="link" rel="external"
  ><span class="icon icon-outgoing" aria-hidden="true"></span>Lorem ipsum</a
>
```

## States

<div class="column-3">
  <div>
    <h3>Hover</h3>
    <ul>
      <li><a href="link" class="hover">Inloggen</a></li>
      <li><a href="link" class="hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>

  <div>
    <h3>Active</h3>
    <ul>
      <li><a href="link" class="active">Inloggen</a></li>
      <li><a href="link" class="active"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="active">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>

  <div>
    <h3>Actieve link met hover</h3>
    <ul>
      <li><a href="link" class="active hover">Inloggen</a></li>
      <li><a href="link" class="active hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="active hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>

  <div>
    <h3>Focus</h3>
    <ul>
      <li><a href="link" class="focus">Inloggen</a></li>
      <li><a href="link" class="focus"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="focus">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>

  <div>
    <h3>Link met focus en hover</h3>
    <ul>
      <li><a href="link" class="focus hover">Inloggen</a></li>
      <li><a href="link" class="focus hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="focus hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>

  <div>
    <h3>Visited link</h3>
    <ul>
      <li><a href="link" class="visited">Inloggen</a></li>
      <li><a href="link" class="visited"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="visited">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>

  <div>
    <h3>Visisted link met hover</h3>
    <ul>
      <li><a href="link" class="visited hover">Inloggen</a></li>
      <li><a href="link" class="visited hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a></li>
      <li><a href="link" class="visited hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a></li>
    </ul>
  </div>
</div>
