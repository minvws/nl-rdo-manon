---
title: Description list
breadcrumb: Description list
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Description list</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/description-list";
```

<h2 id="examples">Voorbeeld</h2>

### Voorbeeld: Basis

<dl>
  <div>
    <dt>Naam</dt>
    <dd>Jane Doe</dd>
  </div>

  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
  </div>

  <div>
    <dt>Aanmelddatum</dt>
    <dd>03-05-2021</dd>
  </div>
</dl>

```html
<dl>
  <div>
    <dt>Naam</dt>
    <dd>Jane Doe</dd>
  </div>

  <div>
    <dt>Woonplaats</dt>
    <dd>Amsterdam</dd>
  </div>

  <div>
    <dt>Aanmelddatum</dt>
    <dd>03-05-2021</dd>
  </div>
</dl>
```

### Voorbeeld: Binnen een formulier

<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Persoonsgegevens</legend>

    <div>
      <label for="username">Gebruikersnaam</label>
      <div>
        <span class="nota-bene" id="username-explanation">Bijvoorbeeld Jane Doe </span>
        <input
          id="username"
          name="username"
          type="text"
          aria-describedby="username-explanation"
        />
      </div>
    </div>

    <fieldset>
      <legend>Persoonsgegevens</legend>
      <dl>
        <div>
          <dt>Naam</dt>
          <dd>Jane Doe</dd>
        </div>
        <div>
          <dt>Geboortedatum</dt>
          <dd>01-01-1984</dd>
        </div>
        <div>
          <dt>Geslacht</dt>
          <dd>Vrouw</dd>
        </div>
        <div>
          <dt>Woonplaats</dt>
          <dd>Loremstad</dd>
        </div>
      </dl>
    </fieldset>

  </fieldset>
  <button>Lorem ipsum</button>
</form>

```html
<form action="" method="post" class="horizontal">
  <fieldset>
    <legend>Persoonsgegevens</legend>

    <div>
      <label>Gebruikersnaam</label>
      <div>
        <span class="nota-bene" id="voorbeeld-text-input-1-explanation"
          >Bijvoorbeeld Jane Doe
        </span>
        <input
          id="voorbeeld-text-input-1"
          name="voorbeeld-text-input-1"
          type="text"
          aria-describedby="voorbeeld-text-input-1-explanation"
        />
      </div>
    </div>

    <fieldset>
      <legend>Persoonsgegevens</legend>
      <dl>
        <div>
          <dt>Naam</dt>
          <dd>Jane Doe</dd>
        </div>
        <div>
          <dt>Geboortedatum</dt>
          <dd>01-01-1984</dd>
        </div>
        <div>
          <dt>Geslacht</dt>
          <dd>Vrouw</dd>
        </div>
        <div>
          <dt>Woonplaats</dt>
          <dd>Loremstad</dd>
        </div>
      </dl>
    </fieldset>
  </fieldset>
  <button>Lorem ipsum</button>
</form>
```
