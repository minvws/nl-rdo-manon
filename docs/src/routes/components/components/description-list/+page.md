---
title: Description list
breadcrumb: Description list
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Description list</h1>

<h2 id="examples">Voorbeeld</h2>

### Visuele weergave:

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

### HTML-voorbeeld:

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

### Visuele weergave binnen formulier:

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

### HTML-voorbeeld:

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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/description-list";
```
