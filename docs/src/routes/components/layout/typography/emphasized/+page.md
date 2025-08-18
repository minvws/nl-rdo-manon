---
title: Benadrukte weergave
breadcrumb: Benadrukte weergave
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Benadrukte weergave</h1>

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/body-text-set";
@use "@minvws/manon/emphasized";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het
    overzicht met [instelbare variabelen](#variables).
3.  Voeg de class `emphasized` toe aan de gewenste elementen. Voor meer
    informatie zie: [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden:</h2>

### Paragraaf

#### Visueel voorbeeld:

<p class="emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus, pharetra at
  tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis blandit.
</p>

#### HTML-voorbeeld:

```html
<p class="emphasized">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque lectus,
  pharetra at tincidunt a, ornare vitae nibh. Vivamus ultricies sagittis
  blandit.
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
