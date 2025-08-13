---
title: Onzichtbare fieldset
breadcrumb: Onzichtbare fieldset
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Visueel onzichtbare fieldset. Waarbij de fieldset toegevoegd is aan de HTML ten behoeve
  van toegankelijkheid maar niet zichtbaar is.
</p>

<h1 id="introduction">Onzichtbare fieldset</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-fieldset";
```

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

#### Basis

<form action="" method="post">
  <fieldset>
    <legend>Fieldset test</legend>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" type="text" />
    <label for="form-example-base-2">Voorbeeld text input</label>
    <input id="form-example-base-2" name="form-example-base-2" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Fieldset test</legend>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" type="text" />
    <label for="form-example-base-2">Voorbeeld text input</label>
    <input id="form-example-base-2" name="form-example-base-2" type="text" />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

<h2 id="variables">Instelbare variabelen</h2>

<ul>
  <li><a href="/documentation/variables#width">width</a></li>
  <li><a href="/documentation/variables#resize">resize</a></li>
  <li><a href="/documentation/variables#min-height">min-height</a></li>
  <li><a href="/documentation/variables#padding">padding</a></li>
  <li><a href="/documentation/variables#font-size">font-size</a></li>
  <li><a href="/documentation/variables#font-family">font-family</a></li>
  <li><a href="/documentation/variables#text-color">text-color</a></li>
  <li>
    <a href="/documentation/variables#background-color">background-color</a>
  </li>
  <li><a href="/documentation/variables#border-width">border-width</a></li>
  <li><a href="/documentation/variables#border-style">border-style</a></li>
  <li><a href="/documentation/variables#border-color">border-color</a></li>
</ul>

<p>Bijbehorende elementen:</p>
<ul>
  <li><a href="/components/form">form</a></li>
</ul>
