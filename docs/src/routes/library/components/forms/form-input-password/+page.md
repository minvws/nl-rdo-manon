---
title: Wachtwoord
breadcrumb: Wachtwoord
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quick-start"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een wachtwoordinvoerveld stelt de gebruiker in staat een geheim wachtwoord in te voeren, waarbij de tekst meestal wordt verborgen om privacy en veiligheid te waarborgen. Dit is essentieel bij formulieren die persoonlijke of gevoelige informatie verwerken.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/form";
@use "@minvws/manon/form-input";
```

<div class="explanation">
    <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Aandachtspunten
    </span>
        <p>
            Vertel de gebruiker welke eisen er gesteld zijn. Dit kan met een notificatie of met een
            openklapbare hulptekst. Voor meer informatie zie:
            <a href="/library/components/notifications/notification-explanation"
                >toelichting - paragraaf</a
            >
            en <a href="/library/components/forms/form-help">hulpteksten</a>.
        </p>
        <p>
            Om berichten visueel te koppelen aan een inputveld kunnen de
            <code>&lt;input&gt;</code> en het bericht gegroepeerd worden binnen een
            <code>&lt;div&gt;</code>.
        </p>
</div>

<h2 id="examples">Voorbeelden</h2>

<form action="" method="post">
    <div>
        <label for="input-password-1">Wachtwoord</label>
        <p class="explanation" id="input-password-1-message">
            <span class="notification-type">
                <span class="icon icon-informative" aria-hidden="true"></span>
                Aandachtspunten
            </span>
            Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
            1 kleine letter en 1 cijfer.
        </p>
        <input
        id="input-password-1"
        name="input-password-1"
        pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
        type="password"
        aria-describedby="input-password-1-message"
        />
    </div>
    <button type="submit">Verzend</button>
</form>

```html
<form action="" method="post">
    <div>
        <label for="input-password-1">Wachtwoord</label>
        <p class="explanation" id="input-password-1-message">
            <span class="notification-type">
                <span class="icon icon-informative" aria-hidden="true"></span>
                Aandachtspunten
            </span>
            Wachtwoord moet minimaal 8 tekens bevatten waarvan minimaal 1 hoofdletter,
            1 kleine letter en 1 cijfer.
        </p>
        <input
        id="input-password-1"
        name="input-password-1"
        pattern={"^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"}
        type="password"
        aria-describedby="input-password-1-message"
        />
    </div>
    <button type="submit">Verzend</button>
</form>
```
