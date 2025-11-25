---
title: Paginering
breadcrumb: Paginering
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Paginering is een navigatie-element dat lange lijsten of inhoud opsplitst in
meerdere pagina’s, zodat gebruikers stapsgewijs door de informatie kunnen
bladeren.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/pagination";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Paginering

<Components.Snippet path="pagination/pagination.html" as="raw" />

<Components.Snippet path="pagination/pagination.html" as="code" language="html"
/>

### Voorbeeld: Met class `pagination` en "vorige" en "volgende links

<Components.Snippet path="pagination/pagination-with-links.html" as="raw" />

<Components.Snippet path="pagination/pagination-with-links.html" as="code"
language="html" />

### Aandachtspunten

Dit component gaat er vanuit dat de paginering gebruikt wordt om naar andere
pagina's te navigeren. Daarom worden links ondersteund. Omdat de huidige pagina
niet klikbaar hoeft te zijn worden ook spans ondersteund. Knoppen worden niet
ondersteund omdat deze bedoeld zijn voor acties en niet voor navigatie tussen
pagina's. Gebruik omwille van toegankelijkheid links in plaats van knoppen.
