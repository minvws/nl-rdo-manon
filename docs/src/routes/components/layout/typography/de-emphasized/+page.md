---
title: Subtielere weergave
breadcrumb: Subtielere weergave
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Subtielere weergave</h1>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/body-text-set";
@use "@minvws/manon/de-emphasized";
```

3.  Voeg de class `de-emphasized` toe aan de gewenste elementen. Voor meer
    informatie zie: [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden</h2>

### Paragraaf

#### Visueel voorbeeld:

<p class="de-emphasized">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

#### HTML-voorbeeld:

```html
<p class="de-emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Aandachtspunten:

- De standaard ingestelde waarden binnen Manon maken gebruik van de
  [Body text set](/components/layout/typography/body-text-set). Om gebruik te
  maken van deze set. Laad de set eenmalig in voordat overige componenten er
  gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
