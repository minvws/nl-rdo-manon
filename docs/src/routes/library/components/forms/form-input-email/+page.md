---
title: Email
breadcrumb: Email
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een e-mailinvoerveld stelt de gebruiker in staat om een geldig e-mailadres in te voeren. Het helpt bij het valideren van het formaat en zorgt ervoor dat contactinformatie correct en bruikbaar is voor communicatie.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/form";
@use "@minvws/manon/components/form-input";
```

<h2 id="examples">Voorbeelden</h2>

<form action="" method="post">
  <label for="voorbeeld-email-1">Email</label>
  <input id="voorbeeld-email-1" name="voorbeeld-email-1" type="email" />
  <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
  <label for="voorbeeld-email-1">Email</label>
  <input id="voorbeeld-email-1" name="voorbeeld-email-1" type="email" />
  <button type="submit">Verzend</button>
</form>
```
