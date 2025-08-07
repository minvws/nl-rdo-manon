---
title: Layout form
breadcrumb: Layout form
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Layout form</h1>

Weergave opties voor pagina's met als formulieren als hoofdfunctie.

Het is ook mogelijk om de weergave van alle formulieren aan te passen. Gebruik
daarvoor: [Basis formulieren](/components/form).

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het
    overzicht met [instelbare variabelen](#variables).
3.  Voeg de class `de-emphasized` toe aan de gewenste elementen. Voor meer
    informatie zie: [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden:</h2>

### Div

<div class="layout-form">
  <form class="background-color-offset">
    <div>
      <label for="example-div-name-1">User name</label>
      <input type="text" id="example-div-name-1" />
    </div>
    <div>
      <label for="example-div-password-1">Password</label>
      <input type="password" id="example-div-password-1" />
    </div>
    <button type="submit">Lorem ipsum</button>
  </form>
</div>

### HTML-voorbeeld:

#### `div`:

```html
<div class="layout-form">
  <!-- Content -->
</div>
```

#### `section`:

```html
<section class="layout-form">
  <div>
    <!-- Content -->
  </div>
</section>
```

#### `article`:

```html
<article class="layout-form">
  <div>
    <!-- Content -->
  </div>
</article>
```

#### `form`:

```html
<form class="layout-form">
  <!-- Content -->
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
@use "@minvws/manon/layout-form";
```
