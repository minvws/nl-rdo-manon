---
title: Hulpteksten testpagina
breadcrumb: Hulpteksten testpagina
---

<h1 id="introduction">Hulpteksten testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld

<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1">Lorem ipsum</label>
  <div>
    <input
      id="voorbeeld-text-input-met-hulptekst-simpel-1"
      name="voorbeeld-text-input"
      type="text"
      aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    />
    <p
      class="explanation"
      data-open-label="Toelichting bij het veld: Voorbeeld text input"
      data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
      id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    >
      <span>Toelichting:</span> Lorem ipsum dolor sit amet.
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>

#### HTML-Voorbeeld

```html
<form action="" method="post" class="help">
  <label for="voorbeeld-text-input-met-hulptekst-simpel-1">Lorem ipsum</label>
  <div>
    <input
      id="voorbeeld-text-input-met-hulptekst-simpel-1"
      name="voorbeeld-text-input"
      type="text"
      aria-describedby="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    />
    <p
      class="explanation"
      data-open-label="Toelichting bij het veld: Voorbeeld text input"
      data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
      id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
    >
      <span>Toelichting:</span> Lorem ipsum dolor sit amet.
    </p>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Verplicht invoerveld

#### Visueel voorbeeld

<form action="" method="post" class="help">
  <label for="example-input-help-required">Lorem ipsum</label>
  <div>
    <span class="nota-bene">Dit veld is verplicht</span>
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld

```html
<form action="" method="post" class="help">
  <label for="example-input-help-required">Lorem ipsum</label>
  <div>
    <span class="nota-bene">Dit veld is verplicht</span>
    <div>
      <input
        id="example-input-help-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Verplicht invoerveld horizontaal uitgelijnd

#### Visueel voorbeeld

<form action="" method="post" class="horizontal help">
  <div>
    <label for="example-input-help-required-horizontal">Voorbeeld invoerveld</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required-horizontal"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-required-horizontal-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-horizontal-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld

```html
<form action="" method="post" class="horizontal help">
  <div>
    <label for="example-input-help-required-horizontal">Voorbeeld invoerveld</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required-horizontal"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-required-horizontal-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-horizontal-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Verplicht invoerveld binnen fieldset

#### Visueel voorbeeld

<form action="" method="post" class="help">
  <fieldset>
    <legend>Help op simpel formulierveld</legend>

    <label for="example-input-help-required-fieldset">Voorbeeld invoerveld</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required-fieldset"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-required-fieldset-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-fieldset-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld

```html
<form action="" method="post" class="help">
  <fieldset>
    <legend>Help op simpel formulierveld</legend>

    <label for="example-input-help-required-fieldset">Voorbeeld invoerveld</label>
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-required-fieldset"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-required-fieldset-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-fieldset-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
```

### Verplicht invoerveld binnen fieldset binnen een horizontaal uitgelijnd formulier

#### Visueel voorbeeld

<form action="" method="post" class=" horizontal help">
  <fieldset>
    <legend>Help op simpel formulierveld</legend>

    <div>
      <label for="example-input-help-required-fieldset-horizontal"
        >Voorbeeld invoerveld</label
      >
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <div>
          <input
            id="example-input-help-required-fieldset-horizontal"
            name="voorbeeld-text-input"
            type="text"
            aria-describedby="example-input-help-required-fieldset-horizontal-message"
            required
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Voorbeeld text input"
            data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
            id="example-input-help-required-fieldset-horizontal-message"
          >
            <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld

```html
<form action="" method="post" class=" horizontal help">
  <fieldset>
    <legend>Help op simpel formulierveld</legend>

    <div>
      <label for="example-input-help-required-fieldset-horizontal"
        >Voorbeeld invoerveld</label
      >
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <div>
          <input
            id="example-input-help-required-fieldset-horizontal"
            name="voorbeeld-text-input"
            type="text"
            aria-describedby="example-input-help-required-fieldset-horizontal-message"
            required
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Voorbeeld text input"
            data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
            id="example-input-help-required-fieldset-horizontal-message"
          >
            <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </fieldset>

  <button type="submit">Verzend</button>
</form>
```

### Horizontaal uitgelijnd formulier met helptekst

#### Visueel voorbeeld

<form action="" method="post" class="horizontal help">
  <div>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" type="text" />
  </div>

  <div>
    <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
      >Help op simpel formulierveld</label
    >
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-horizontal"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-horizontal-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-horizontal-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>

  <div>
    <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
      >Help op simpel formulierveld</label
    >
    <div>
      <input
        id="example-input-help-horizontal-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-horizontal-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-horizontal-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>

#### HTML-voorbeeld

```html
<form action="" method="post" class="horizontal help">
  <div>
    <label for="form-example-base">Voorbeeld text input</label>
    <input id="form-example-base" name="form-example-base" type="text" />
  </div>

  <div>
    <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
      >Help op simpel formulierveld</label
    >
    <div>
      <span class="nota-bene">Dit veld is verplicht</span>
      <div>
        <input
          id="example-input-help-horizontal"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-horizontal-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-horizontal-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>

  <div>
    <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
      >Help op simpel formulierveld</label
    >
    <div>
      <input
        id="example-input-help-horizontal-required"
        name="voorbeeld-text-input"
        type="text"
        aria-describedby="example-input-help-horizontal-required-message"
        required
      />
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-input-help-horizontal-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>
  </div>

  <button type="submit">Verzend</button>
</form>
```

### Fieldset voorbeeld

#### Visueel voorbeeld

<form action="" method="post" class="help">
  <fieldset>
    <legend>Fieldset test</legend>
    <div>
      <label for="form-fieldset-test">Voorbeeld text input</label>
      <input id="form-fieldset-test" name="form-fieldset-test" type="text" />
    </div>

    <div class="required">
      <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
        >Help op simpel formulierveld</label
      >
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <div>
          <input
            id="example-input-help-required-basic"
            name="voorbeeld-text-input"
            type="text"
            aria-describedby="example-input-help-required-basic-message"
            required
          />
          <p
            class="explanation"
            data-open-label="Toelichting bij het veld: Voorbeeld text input"
            data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
            id="example-input-help-required-basic-message"
          >
            <span>Toelichting:</span> Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>

    <div>
      <label for="voorbeeld-text-input-met-hulptekst-simpel-1"
        >Help op simpel formulierveld</label
      >
      <div>
        <input
          id="example-input-help-required-2"
          name="voorbeeld-text-input"
          type="text"
          aria-describedby="example-input-help-required-2-message"
          required
        />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-input-help-required-2-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>

    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox-example-with-help-within-fieldset"
        name="standaard-checkbox"
      />
      <label for="checkbox-example-with-help-within-fieldset"
        >Lorem ipsum dolor sit amet</label
      >
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="checkbox-example-with-help-within-fieldset-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>

    <div class="radio">
      <input type="radio" id="radio-example-base" name="standaard-radio" />
      <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="radio-example-base-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
    </div>

    <fieldset>
      <legend>Examples</legend>
      <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="example-radio-list-fieldset-help-required-message"
      >
        <span>Toelichting:</span> Lorem ipsum dolor sit amet.
      </p>
      <div class="radio">
        <input type="radio" id="radio-example-list-1" name="standaard-radio" />
        <label for="radio-example-list-1">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-2" name="standaard-radio" />
        <label for="radio-example-list-2">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-3" name="standaard-radio" />
        <label for="radio-example-list-3">Lorem ipsum dolor sit amet</label>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-4" name="standaard-radio" />
        <label for="radio-example-list-4">Lorem ipsum dolor sit amet</label>
      </div>
    </fieldset>

    <fieldset>
      <legend>Examples</legend>

      <div class="radio">
        <input type="radio" id="radio-example-list-2-1" name="standaard-radio" />
        <label for="radio-example-list-2-1">Lorem ipsum dolor sit amet</label>

        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-2-2" name="standaard-radio" />
        <label for="radio-example-list-2-2">Lorem ipsum dolor sit amet</label>

        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message-2"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-2-3" name="standaard-radio" />
        <label for="radio-example-list-2-3">Lorem ipsum dolor sit amet</label>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message-3"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div class="radio">
        <input type="radio" id="radio-example-list-2-4" name="standaard-radio" />
        <label for="radio-example-list-2-4">Lorem ipsum dolor sit amet</label>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="example-radio-list-item-help-required-message-4"
        >
          <span>Toelichting:</span> Lorem ipsum dolor sit amet.
        </p>
      </div>
    </fieldset>
  </fieldset>
  <button type="submit">Verzend</button>
</form>
