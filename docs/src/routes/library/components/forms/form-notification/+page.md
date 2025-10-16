---
title: Notificatie binnen formulier
breadcrumb: Notificatie binnen formulier
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Notificaties binnen een formulier geven gebruikers directe feedback over hun acties, zoals succesmeldingen, waarschuwingen of foutmeldingen. Dit helpt om de interactie duidelijker te maken en fouten tijdens het invullen te voorkomen.

Het weergeven van notificaties binnen het formulier

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
/* Notification base component */
@use "@minvws/manon/colors/notification";

/* Notification types, import what is needed */
@use "@minvws/manon/components/notification-block-element";
@use "@minvws/manon/components/notification-paragraph";
@use "@minvws/manon/components/notification-table";
@use "@minvws/manon/components/notification-error";
@use "@minvws/manon/components/notification-warning";
@use "@minvws/manon/components/notification-explanation";
@use "@minvws/manon/components/notification-confirmation";
@use "@minvws/manon/components/notification-system-message";
```

<div class="explanation">
  <span class="notification-type">
    <span class="icon icon-informative" aria-hidden="true"></span>
    Aandachtspunten
  </span>
    <p>
      Vertel de gebruiker altijd wat de vervolgstappen zijn die zij kunnen
      nemen om het probleem op te lossen of om zelf verder te kunnen.
    </p>
    <p>
      Voeg de class toe met het type melding op het invoerveld om gebruik te
      maken van visuele feedback direct op het invoerveld. Voorbeeld:
      `class="error"`.
    </p>
    <p>
      Voeg voor screenreader gebruikers `aria-invalid="true"` toe aan
      invoervelden met een error. In de HTML-voorbeelden is dit meegenomen.
    </p>
</div>

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Foutmelding op invoerveld

<form action="" method="post">
  <label for="input-error">Input</label>
  <div>
    <input
      id="input-error"
      class="error"
      value="Lorem ipsum"
      aria-describedby="input-error-message"
      aria-invalid="true"
    />
    <p class="error" id="input-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="input-error">Input</label>
  <div>
    <input
      id="input-error"
      class="error"
      value="Lorem ipsum"
      aria-describedby="input-error-message"
      aria-invalid="true"
    />
    <p class="error" id="input-error-message">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>
```

<p class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Waarschuwing
  </span>
  Plaats foutmeldingen altijd onder het invoerveld. Dit zorgt ervoor dat de
  gebruiker eerst te zien krijgt wat de context van de foutmelding is wat het
  begrijpen van de foutmelding toegankelijker maakt.
</p>

### Voorbeeld: Toelichting op invoerveld

<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <p class="explanation" id="input-explanation-message">
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Toelichting
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-explanation"
      class="explanation"
      value="Lorem ipsum"
      aria-describedby="input-explanation-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <p class="explanation" id="input-explanation-message">
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Toelichting
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-explanation"
      class="explanation"
      value="Lorem ipsum"
      aria-describedby="input-explanation-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>
```

<div class="warning">
  <span class="notification-type">
    <span class="icon icon-warning" aria-hidden="true"></span>
    Let op
  </span>
  <p>Plaats toelichting met betrekking tot het invullen van
  velden boven het invoerveld, zodat de gebruiker eerst de toelichtig leest en
  daarna het bijbehorende invoerveld tegenkomt.</p>

  <p>Uitzondering hierop zijn toelichtingsteksten die de gebruiker zelf
  activeert door middel van de hulpknop. Die teksten worden onder het gekozen
  invoerveld geplaatst zodat de structuur van het formulier en het element
  waar de gebruiker interactie mee heeft zo min mogelijk verspringt.</p>
</div>

### Voorbeeld: Waarschuwing op invoerveld

<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <p class="warning" id="input-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-warning"
      class="warning"
      value="Lorem ipsum"
      aria-describedby="input-warning-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <p class="warning" id="input-warning-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-warning"
      class="warning"
      value="Lorem ipsum"
      aria-describedby="input-warning-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: Bevestiging op invoerveld

<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <p class="confirmation" id="input-confirmation-message">
      <span class="notification-type">
        <span class="icon icon-check" aria-hidden="true"></span>
        Bevestiging
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-confirmation"
      class="confirmation"
      value="Lorem ipsum"
      aria-describedby="input-confirmation-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <p class="confirmation" id="input-confirmation-message">
      <span class="notification-type">
        <span class="icon icon-check" aria-hidden="true"></span>
        Bevestiging
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-confirmation"
      class="confirmation"
      value="Lorem ipsum"
      aria-describedby="input-confirmation-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>
```

### Voorbeeld: Systeembericht op invoerveld

<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <p class="system" id="input-system-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
          Systeembericht
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-system"
      class="system"
      value="Lorem ipsum"
      aria-describedby="input-system-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <p class="system" id="input-system-message">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Systeembericht
      </span>
      Lorem ipsum dolor sit amet
    </p>
    <input
      id="input-system"
      class="system"
      value="Lorem ipsum"
      aria-describedby="input-system-message"
      aria-invalid="true"
    />
  </div>
  <button type="submit">Verzend</button>
</form>
```
