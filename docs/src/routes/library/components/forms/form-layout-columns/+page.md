---
title: Weergave in kolommen
breadcrumb: Weergave in kolommen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van de inhoud van het formulier in kolommen.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/form";
```

<p class="warning">
  <span>Waarschuwing:</span>
    fieldset met een column-* class met daarbinnen een
    input type="date" kunnen buiten de breedte van het formulier lopen.
</p>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Basis

<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" />
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" />
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: verplicht

<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" required/>
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" required/>
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" required />
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div>
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" required />
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: met hulptekst

<form action="" method="post" class="help">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div class="help-container">
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start"/>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div class="help-container">
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end"/>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post" class="help">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" required />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" required />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: met gedeelde hulptekst

<form action="" method="post" class="help">
  <div class="help-container">
    <div class="column-2">
      <div>
        <label for="voorbeeld-1-date-1-start">van</label>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start"/>
      </div>
      <div>
        <label for="voorbeeld-1-date-1-end">tot</label>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end"/>
      </div>
    </div>
    <p
        class="explanation"
        data-open-label="Toelichting bij het veld: Voorbeeld text input"
        data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
        id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
      >
        Lorem ipsum dolor sit amet.
      </p>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post" class="help">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" required />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" required />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: verplicht met hulptekst

<form action="" method="post" class="help">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" required/>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" required/>
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post" class="help">
  <div class="column-2">
    <div>
      <label for="voorbeeld-1-date-1-start">van</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-start" name="voorbeeld-1-date-1-start" required />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div>
      <label for="voorbeeld-1-date-1-end">tot</label>
      <div class="help-container">
        <span class="nota-bene">Dit veld is verplicht</span>
        <input id="voorbeeld-1-date-1-end" name="voorbeeld-1-date-3-end" required />
        <p
          class="explanation"
          data-open-label="Toelichting bij het veld: Voorbeeld text input"
          data-close-label="Sluit toelichting bij het veld: Voorbeeld text input"
          id="voorbeeld-text-input-met-hulptekst-simpel-1-message"
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  </div>
  <button type="submit">Verzend</button>
</form>
```
