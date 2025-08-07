---
title: Notificatie binnen formulier
breadcrumb: Notificatie binnen formulier
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Notificatie binnen formulier</h1>

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de benodigde HTML toe. Voor meer informatie zie
    [Voorbeelden](#examples)

## Aandachtspunten:

- Let op: visuele feedback op het invoerveld is op zichzelf onvoldoende om
  toegankelijkheid en een goede gebruikerservaring te waarborgen.
- Vertel de gebruiker altijd wat de vervolgstappen zijn die zij kunnen nemen om
  het probleem op te lossen of om zelf verder te kunnen.
- Voeg de class toe met het type melding op het invoerveld om gebruik te maken
  van visuele feedback direct op het invoerveld. Voorbeeld: `class="error"`.
- Voeg voor screenreader gebruikers `aria-invalid="true"` toe aan invoervelden
  met een error. In de HTML-voorbeelden is dit meegenomen.
- Plaats toelichting met betrekking tot het invullen van velden boven het
  invoerveld, zodat de gebruiker eerst de toelichtig leest en daarna het
  bijbehorende invoerveld tegenkomt. Hierdoor weet de gebruiker hoe het
  invoerveld ingevuld dient te worden voordat deze gepresenteerd wordt.
  Uitzondering hierop zijn toelichtingsteksten die de gerbruiker zelf activeert
  door middel van de hulpknop. Die teksten worden onder het gekozen invoerveld
  geplaatst zodat de structuur van het formulier en het element waar de
  gebruiker interactie mee heeft zo min mogelijk verspringt.
- Plaats foutmeldingen altijd onder het invoerveld. Dit zorgt ervoor dat de
  gebruiker eerst te zien krijgt wat de context van de foutmelding is wat het
  begrijpen van de foutmelding toegankelijker maakt.
- Voor meer informatie over beschikbare notificatie-types en het gebruik zie:
  [Notificaties](/notifications).

<h2 id="examples">Voorbeelden</h2>

Het basisvoorbeeld met een invoerveld en een verzendknop.

### Notificatie op invoerveld

#### Visueel voorbeeld foutmelding:

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
      <span>Foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>

<p>HTML-voorbeeld:</p>

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
      <span>Foutmelding:</span> Lorem ipsum dolor sit amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>
```

#### Visueel voorbeeld toelichting:

<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <p class="explanation" id="input-explanation-message">
      <span>Toelichting:</span> Lorem ipsum dolor sit amet
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

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post">
  <label for="input-explanation">Input</label>
  <div>
    <p class="explanation" id="input-explanation-message">
      <span>Toelichting:</span> Lorem ipsum dolor sit amet
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

#### Visueel voorbeeld waarschuwing:

<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <p class="warning" id="input-warning-message">
      <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
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

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post">
  <label for="input-warning">Input</label>
  <div>
    <p class="warning" id="input-warning-message">
      <span>Waarschuwing:</span> Lorem ipsum dolor sit amet
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

#### Visueel voorbeeld bevestiging:

<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <p class="confirmation" id="input-confirmation-message">
      <span>Bevestiging:</span> Lorem ipsum dolor sit amet
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

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post">
  <label for="input-confirmation">Input</label>
  <div>
    <p class="confirmation" id="input-confirmation-message">
      <span>Bevestiging:</span> Lorem ipsum dolor sit amet
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

#### Visueel voorbeeld systeembericht

<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <p class="system" id="input-system-message">
      <span>Systeembericht:</span> Lorem ipsum dolor sit amet
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

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post">
  <label for="input-system">Input</label>
  <div>
    <p class="system" id="input-system-message">
      <span>Systeembericht:</span> Lorem ipsum dolor sit amet
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

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Gerelateerd:

- Voor meer informatie over beschikbare notificatie-types en het gebruik zie:
  [Notificaties](/notifications).

### Importeer component via npm

#### CSS-voorbeeld:

```css
/* Notification base component */
@use "@minvws/manon/notification";

/* Notification types, import what is needed */
@use "@minvws/manon/notification-block-element";
@use "@minvws/manon/notification-paragraph";
@use "@minvws/manon/notification-table";
@use "@minvws/manon/notification-error";
@use "@minvws/manon/notification-warning";
@use "@minvws/manon/notification-explanation";
@use "@minvws/manon/notification-confirmation";
@use "@minvws/manon/notification-system-message";
```

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/form-notification-test">Test- en voorbeelden-pagina</a>
