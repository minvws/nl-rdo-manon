---
title: Radio-selecteerknop - radio
breadcrumb: Radio-selecteerknop - radio
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Radio-selecteerknop - `radio-button`</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de bijbehorende HTML toe. Voor meer informatie zie
    [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden</h2>

### Basis

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio" />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="radio">
    <input type="radio" id="radio-example-base" name="standaard-radio" />
    <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
  </div>
</form>
```

### Verplicht

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="radio">
      <input
        type="radio"
        id="radio-button-example-required-1"
        name="voorwaarden"
        required
      />
      <label for="radio-button-example-required-1">verplicht Radio-selecteerknop</label>
    </div>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="required">
    <span class="nota-bene">Dit veld is verplicht</span>
    <div class="required">
      <input
        type="radio"
        id="radio-button-example-required-1"
        name="voorwaarden"
        required
      />
      <label for="radio-button-example-required-1"
        >verplicht Radio-selecteerknop</label
      >
    </div>
  </div>
</form>
```

### Uitgeschakeld

#### Visueel voorbeeld:

<form action="" method="post">
  <div class="radio">
    <input
      type="radio"
      id="radio-button-example-disabled"
      name="disabled-radio-button"
      disabled
    />
    <label for="radio-button-example-disabled">Lorem ipsum dolor sit amet</label>
  </div>
</form>

#### HTML-voorbeeld:

```html
<form action="" method="post">
  <div class="radio">
    <input
      type="radio"
      id="radio-button-example-disabled"
      name="disabled-radio-button"
      disabled
    />
    <label for="radio-button-example-disabled"
      >Lorem ipsum dolor sit amet</label
    >
  </div>
</form>
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
@use "@minvws/manon/radio";
@use "@minvws/manon/form-radio";
```

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/form-input-radio-test">Test- en voorbeelden-pagina</a>
