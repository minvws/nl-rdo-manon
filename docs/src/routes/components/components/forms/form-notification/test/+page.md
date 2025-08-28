---
title: Notificatie binnen formulier
breadcrumb: Notificatie binnen formulier
---

<h1 id="introduction">Notificatie binnen formulier testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

<h2>Voorbeelden</h2>

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

### Link binnen notificatie

#### Visueel voorbeeld foutmelding:

<form action="" method="post">
  <label for="input-link-error">Input</label>
  <div>
    <input
      id="input-link-error"
      class="error"
      value="Lorem ipsum"
      aria-describedby="input-link-error-message"
      aria-invalid="true"
    />
    <p class="error" id="input-link-error-message">
      <span>Foutmelding:</span> Lorem <a href="/">ipsum dolor</a> set amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>

<p>HTML-voorbeeld:</p>

```html
<form action="" method="post">
  <label for="input-link-error">Input</label>
  <div>
    <input
      id="input-link-error"
      class="error"
      value="Lorem ipsum"
      aria-describedby="input-link-error-message"
      aria-invalid="true"
    />
    <p class="error" id="input-link-error-message">
      <span>Foutmelding:</span> Lorem <a href="/">ipsum dolor</a> set amet
    </p>
  </div>
  <button type="submit">Verzend</button>
</form>
```
