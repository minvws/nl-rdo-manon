---
title: Inklapbaar menu
breadcrumb: Inklapbaar menu
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Inklapbaar menu</h1>

<p class="warning">
  <strong>Let op:</strong> Deze documentatie is momenteel onvolledig. De details voor het JavaScript-bestand
  missen.
</p>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project.
    - Voor een overzicht van de benodigde en optionele bestanden zie:
      [Bijbehorende bestanden](#requirements).
    - Voeg het bijbehorende Javascript-bestand toe aan het project. Voor meer
      informatie zie: [JavaScript toevoegen](/documentation/add-js).
2.  Plaats een korte zichtbare tekst binnen een `button`. Bijvoorbeeld een
    omschrijvende titel of een vraag. Deze tekst is zichtbaar als de accordeon
    gesloten is. Zorg ervoor dat de gebruiker op basis van deze tekst kan
    bepalen of de onderliggende informatie waardevol is.
3.  Geef de `button` een unieke `id` en verwijs vanaf de `div` via een
    `aria-labelledby` naar de`id` van de `button` ten behoeve van
    toegankelijkheid.
4.  Groepeer de verborgen content binnen een `div`.

<h2 id="examples">Voorbeelden:</h2>

#### Visueel voorbeeld:

Zie hoofdmenu op deze pagina

#### HTML-voorbeeld:

```html
<header>
  <nav aria-label="Hoofdnavigatie">
    <ul>
      <!-- menu items -->
    </ul>
  </nav>
</header>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Aandachtspunten:

- De standaard ingestelde waarden binnen Manon maken gebruik van de
  [Body text set](/components/layout/typography/body-text-set). Om gebruik te
  maken van deze set. Laad de set eenmalig in voordat overige componenten er
  gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/collapsible-menu";
```
