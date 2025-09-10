---
title: Ghost button
breadcrumb: Ghost button
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<p id="introduction">Ghost button</p>

Subtiele knopweergave zonder achtergrondkleur.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/button-ghost";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `button`

<button class="ghost">Lorem ipsum</button>

```html
<button class="ghost">Lorem ipsum</button>
```

### Voorbeeld: `button` uitgeschakeld

<button class="ghost" disabled>button primary</button>

```html
<button class="ghost" disabled>button primary</button>
```

### Voorbeeld: `input type="button"`

<input type="button" value="Lorem ipsum" class="ghost" />

```html
<input type="button" value="Lorem ipsum" class="ghost" />
```

### Voorbeeld: `input type="button"` uitgeschakeld

<input type="button" value="Lorem ipsum" class="ghost" disabled />

```html
<input type="button" value="Lorem ipsum" class="ghost" disabled />
```
