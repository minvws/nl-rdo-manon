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
@use "@minvws/manon/link";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis link

- <a href="link">Inloggen</a>
- <a href="link"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Hover effect

- <a href="link" class="hover">Inloggen</a>
- <a href="link" class="hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Actieve link

- <a href="link" class="active">Inloggen</a>
- <a href="link" class="active"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="active">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Actieve link met hover

- <a href="link" class="active hover">Inloggen</a>
- <a href="link" class="active hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="active hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Link met focus
- <a href="link" class="focus">Inloggen</a>
- <a href="link" class="focus"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="focus">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Link met focus en hover

- <a href="link" class="focus hover">Inloggen</a>
- <a href="link" class="focus hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="focus hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Bezochte link
- <a href="link" class="visited">Inloggen</a>
- <a href="link" class="visited"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="visited">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Bezochte link op hover

- <a href="link" class="visited hover">Inloggen</a>
- <a href="link" class="visited hover"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>
- <a href="link" class="visited hover">Details<span class="icon icon-chevron-right" aria-hidden="true"></span></a>

### Voorbeeld: Externe link

- <a href="link" rel="external">Externe link</a>
