---
title: Fieldset Selectievak - checkbox
breadcrumb: Fieldset Selectievak - checkbox
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Selectievak - `checkbox`</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de benodigde HTML toe. Voor meer informatie zie:
    [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

#### Basis

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-base"
        name="standaard-checkbox"
      />
      <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

#### Verplicht

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="required">
      <span class="nota-bene">Dit veld is verplicht</span>
      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-required-1"
          name="voorwaarden"
          required
        />
        <label for="checkbox-example-required-1">verplicht selectievak</label>
      </div>
    </div>
  </fieldset>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="required">
      <span class="nota-bene">Dit veld is verplicht</span>
      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-required-1"
          name="voorwaarden"
          required
        />
        <label for="checkbox-example-required-1">verplicht selectievak</label>
      </div>
    </div>
  </fieldset>
</form>
```

#### Uitgeschakeld

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-disabled"
        name="disabled-checkbox"
        disabled
      />
      <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-disabled"
        name="disabled-checkbox"
        disabled
      />
      <label for="checkbox-example-disabled">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

#### Lijst

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-1" name="standaard-checkbox" />
      <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-2" name="standaard-checkbox" />
      <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-3" name="standaard-checkbox" />
      <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input type="checkbox" id="checkbox-example-list-4" name="standaard-checkbox" />
      <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
    </div>

  </fieldset>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-list-1"
        name="standaard-checkbox"
      />
      <label for="checkbox-example-list-1">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-list-2"
        name="standaard-checkbox"
      />
      <label for="checkbox-example-list-2">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-list-3"
        name="standaard-checkbox"
      />
      <label for="checkbox-example-list-3">Lorem ipsum dolor sit amet</label>
    </div>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-list-4"
        name="standaard-checkbox"
      />
      <label for="checkbox-example-list-4">Lorem ipsum dolor sit amet</label>
    </div>
  </fieldset>
</form>
```

#### Lijst met "label"

<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <fieldset>
      <legend>List label</legend>
      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-1"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-2"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-3"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-4"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-4">Lorem ipsum dolor sit amet</label>
      </div>
    </fieldset>

  </fieldset>
</form>

### HTML-voorbeeld:

```html
<form action="" method="post">
  <fieldset>
    <legend>Examples</legend>
    <fieldset>
      <legend>List label</legend>
      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-1"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-1"
          >Lorem ipsum dolor sit amet</label
        >
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-2"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-2"
          >Lorem ipsum dolor sit amet</label
        >
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-3"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-3"
          >Lorem ipsum dolor sit amet</label
        >
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="checkbox-example-list-label-4"
          name="standaard-checkbox"
        />
        <label for="checkbox-example-list-label-4"
          >Lorem ipsum dolor sit amet</label
        >
      </div>
    </fieldset>
  </fieldset>
</form>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/checkbox";
@use "@minvws/manon/form-fieldset-checkbox";
```

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/fieldset-checkbox-test">Test- en voorbeelden-pagina</a>
