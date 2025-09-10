---
title: Destructieve knop
breadcrumb: Destructieve knop
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">
  Opvallende weergave voor knoppen die een destructieve actie initiëren.
</p>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/button-destructive";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `button`

<button class="destructive">Lorem ipsum</button>

```html
<button class="destructive">Lorem ipsum</button>
```

### Voorbeeld: `button` uitgeschakeld

<button class="destructive" disabled>Lorem ipsum</button>

```html
<button class="destructive" disabled>Lorem ipsum</button>
```

### Voorbeeld: `input type="button"`

<input type="button" value="Lorem ipsum" class="destructive" />

```html
<input type="button" value="Lorem ipsum" class="destructive" />
```

### Voorbeeld: `input type="button"` uitgeschakeld

<input type="button" value="Lorem ipsum" class="destructive" disabled />

```html
<input type="button" value="Lorem ipsum" class="destructive" disabled />
```
