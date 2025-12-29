---
title: Notifactie op een paragraaf
breadcrumb: Notifactie op een paragraaf
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van notificatie op paragrafen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification";
```

<h2 id="examples">Voorbeelden</h2>

### paragraaf

<manon-tabs>
  <ul>
    <li><a href="#error">Error</a></li>
    <li><a href="#explanation">Explanation</a></li>
    <li><a href="#warning">Warning</a></li>
    <li><a href="#confirmation">Confirmation</a></li>
    <li><a href="#system">System</a></li>
  </ul>

  <div id="error">
    <p class="error">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit.
    </p>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;p class="error">
  &lt;span class="notification-type">
    &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
    Foutmelding:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/p>
      </code>
    </pre>
  </div>

  <div id="explanation">
    <p class="explanation">
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Toelichting:
      </span>
      Lorem ipsum dolor sit.
    </p>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;p class="explanation">
  &lt;span class="notification-type">
    &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
    Toelichting:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/p>
      </code>
    </pre>
  </div>

  <div id="warning">
    <p class="warning">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit.
    </p>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;p class="warning">
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
    Waarschuwing:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/p>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <p class="confirmation">
      <span class="notification-type">
        <span class="icon icon-confirmation" aria-hidden="true"></span>
        Bevestiging:
      </span>
      Lorem ipsum dolor sit.
    </p>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;p class="confirmation">
  &lt;span class="notification-type">
    &lt;span class="icon icon-confirmation" aria-hidden="true">&lt;/span>
    Bevestiging:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/p>
      </code>
    </pre>
  </div>

  <div id="system">
    <p class="system">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Systeembericht:
      </span>
      Lorem ipsum dolor sit.
    </p>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;p class="system">
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
    Systeembericht:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/p>
      </code>
    </pre>
  </div>

</manon-tabs>

### span

<manon-tabs>
  <ul>
    <li><a href="#error">Error</a></li>
    <li><a href="#explanation">Explanation</a></li>
    <li><a href="#warning">Warning</a></li>
    <li><a href="#confirmation">Confirmation</a></li>
    <li><a href="#system">System</a></li>
  </ul>

  <div id="error">
    <span class="error">
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      Lorem ipsum dolor sit.
    </span>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;span class="error">
  &lt;span class="notification-type">
    &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
    Foutmelding:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/span>
      </code>
    </pre>
  </div>

  <div id="explanation">
    <span class="explanation">
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Toelichting:
      </span>
      Lorem ipsum dolor sit.
    </span>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;span class="explanation">
  &lt;span class="notification-type">
    &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
    Toelichting:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/span>
      </code>
    </pre>
  </div>

  <div id="warning">
    <span class="warning">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
      </span>
      Lorem ipsum dolor sit.
    </span>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;span class="warning">
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
    Waarschuwing:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/span>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <span class="confirmation">
      <span class="notification-type">
        <span class="icon icon-confirmation" aria-hidden="true"></span>
        Bevestiging:
      </span>
      Lorem ipsum dolor sit.
    </span>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;span class="confirmation">
  &lt;span class="notification-type">
    &lt;span class="icon icon-confirmation" aria-hidden="true">&lt;/span>
    Bevestiging:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/span>
      </code>
    </pre>
  </div>

  <div id="system">
    <span class="system">
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Systeembericht:
      </span>
      Lorem ipsum dolor sit.
    </span>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;span class="system">
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
    Systeembericht:
  &lt;/span>
  Lorem ipsum dolor sit.
&lt;/span>
      </code>
    </pre>
  </div>

</manon-tabs>
