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
@use "@minvws/manon/components/notification";
@use "@minvws/manon/components/notification-form";
```

<h2 id="examples">Voorbeelden</h2>

### Input field

<manon-tabs>
  <ul>
    <li><a href="#error">error</a></li>
    <li><a href="#warning">warning</a></li>
    <li><a href="#explanation">explanation</a></li>
    <li><a href="#confirmation">confirmation</a></li>
    <li><a href="#system">system</a></li>
  </ul>

  <div id="error">
    <form action="" method="post">
      <label for="input-error">Voornaam</label>
      <div>
        <input
          id="input-error"
          class="error"
          aria-describedby="input-error-message"
          aria-invalid="true"
        />
        <p class="error" id="input-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span>
          Het veld mag niet leeggelaten worden. Vul uw voornaam in
        </p>
      </div>
      <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="input-error">Voornaam&lt;/label>
  &lt;div>
    &lt;input
      id="input-error"
      class="error"
      aria-describedby="input-error-message"
      aria-invalid="true"
    />
    &lt;p class="error" id="input-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/span>
      Het veld mag niet leeggelaten worden. Vul uw voornaam in
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="warning">
    <form action="" method="post">
      <label for="input-warning">Voornaam</label>
      <div>
        <input
          id="input-warning"
          class="warning"
          aria-describedby="input-warning-message"
          aria-invalid="true"
        />
        <p class="warning" id="input-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
          </span>
          Het veld is leeg. Als u berichten met uw eigen naam wilt ontvangen. Vul dan uw voornaam in
        </p>
      </div>
      <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="input-warning">Voornaam&lt;/label>
  &lt;div>
    &lt;input
      id="input-warning"
      class="warning"
      aria-describedby="input-warning-message"
      aria-invalid="true"
    />
    &lt;p class="warning" id="input-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/span>
      Het veld is leeg. Als u berichten met uw eigen naam wilt ontvangen. Vul dan uw voornaam in
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="explanation">
    <form action="" method="post">
      <label for="input-explanation">Voornaam</label>
      <div>
        <input
          id="input-explanation"
          class="explanation"
          aria-describedby="input-explanation-message"
          aria-invalid="true"
        />
        <p class="explanation" id="input-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
          </span>
          Vul uw voornaam in zoals deze ook in uw paspoort staat
        </p>
      </div>
      <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="input-explanation">Voornaam&lt;/label>
  &lt;div>
    &lt;input
      id="input-explanation"
      class="explanation"
      aria-describedby="input-explanation-message"
      aria-invalid="true"
    />
    &lt;p class="explanation" id="input-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/span>
      Vul uw voornaam in zoals deze ook in uw paspoort staat
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <form action="" method="post">
      <label for="input-confirmation">Voornaam</label>
      <div>
        <input
          id="input-confirmation"
          class="confirmation"
          aria-describedby="input-confirmation-message"
          aria-invalid="true"
        />
        <p class="confirmation" id="input-confirmation-message">
          <span class="notification-type">
            <span class="icon icon-check" aria-hidden="true"></span>
            Bevestiging:
          </span>
          Uw voornaam is succesvol ingevoerd
        </p>
      </div>
      <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="input-confirmation">Input&lt;/label>
  &lt;div>
    &lt;input
      id="input-confirmation"
      class="confirmation"
      aria-describedby="input-confirmation-message"
      aria-invalid="true"
    />
    &lt;p class="confirmation" id="input-confirmation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
        Bevestiging:
      &lt;/span>
      Uw voornaam is succesvol ingevoerd
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="system">
    <form action="" method="post">
      <label for="input-system">Voornaam</label>
      <div>
        <input
          id="input-system"
          class="system"
          aria-describedby="input-system-message"
          aria-invalid="true"
        />
        <p class="system" id="input-system-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Systeembericht:
          </span>
          Uw voornaam is niet (meer) bekend bij ons. Vul uw gegevens aan
        </p>
      </div>
      <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="input-system">Voornaam&lt;/label>
  &lt;div>
    &lt;input
      id="input-system"
      class="system"
      aria-describedby="input-system-message"
      aria-invalid="true"
    />
    &lt;p class="system" id="input-system-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Systeembericht:
      &lt;/span>
      Uw voornaam is niet (meer) bekend bij ons. Vul uw gegevens aan
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

</manon-tabs>

### Textarea

<manon-tabs>
  <ul>
    <li><a href="#error">error</a></li>
    <li><a href="#warning">warning</a></li>
    <li><a href="#explanation">explanation</a></li>
    <li><a href="#confirmation">confirmation</a></li>
    <li><a href="#system">system</a></li>
  </ul>

  <div id="error">
    <form action="" method="post">
      <label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld</label>
      <div>
        <textarea
          id="voorbeeld-tekstveld-error"
          name="voorbeeld-tekstveld-error"
          class="error"
          aria-describedby="voorbeeld-tekstveld-error-message">
        </textarea>
        <p class="error" id="voorbeeld-tekstveld-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="voorbeeld-tekstveld-error">Voorbeeld tekstveld&lt;/label>
  &lt;div>
    &lt;textarea
      id="voorbeeld-tekstveld-error"
      name="voorbeeld-tekstveld-error"
      class="error"
      aria-describedby="voorbeeld-tekstveld-error-message">
    &lt;/textarea>
    &lt;p class="error" id="voorbeeld-tekstveld-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="warning">
    <form action="" method="post">
      <label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld</label>
      <div>
        <textarea
          id="voorbeeld-tekstveld-warning"
          name="voorbeeld-tekstveld-warning"
          class="warning"
          aria-describedby="voorbeeld-tekstveld-warning-message">
        </textarea>
        <p class="warning" id="voorbeeld-tekstveld-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="voorbeeld-tekstveld-warning">Voorbeeld tekstveld&lt;/label>
  &lt;div>
    &lt;textarea
      id="voorbeeld-tekstveld-warning"
      name="voorbeeld-tekstveld-warning"
      class="warning"
      aria-describedby="voorbeeld-tekstveld-warning-message">
    &lt;/textarea>
    &lt;p class="warning" id="voorbeeld-tekstveld-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="explanation">
        <form action="" method="post">
      <label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld</label>
      <div>
        <textarea
          id="voorbeeld-tekstveld-explanation"
          name="voorbeeld-tekstveld-explanation"
          class="explanation"
          aria-describedby="voorbeeld-tekstveld-explanation-message">
        </textarea>
        <p class="explanation" id="voorbeeld-tekstveld-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="voorbeeld-tekstveld-explanation">Voorbeeld tekstveld&lt;/label>
  &lt;div>
    &lt;textarea
      id="voorbeeld-tekstveld-explanation"
      name="voorbeeld-tekstveld-explanation"
      class="explanation"
      aria-describedby="voorbeeld-tekstveld-explanation-message">
    &lt;/textarea>
    &lt;p class="explanation" id="voorbeeld-tekstveld-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <form action="" method="post">
      <label for="voorbeeld-tekstveld-confirmation">Voorbeeld tekstveld</label>
      <div>
        <textarea
          id="voorbeeld-tekstveld-confirmation"
          name="voorbeeld-tekstveld-confirmation"
          class="confirmation"
          aria-describedby="voorbeeld-tekstveld-confirmation-message">
        </textarea>
        <p class="confirmation" id="voorbeeld-tekstveld-confirmation-message">
          <span class="notification-type">
            <span class="icon icon-check" aria-hidden="true"></span>
            Bevestiging:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="voorbeeld-tekstveld-confirmation">Voorbeeld tekstveld&lt;/label>
  &lt;div>
    &lt;textarea
      id="voorbeeld-tekstveld-confirmation"
      name="voorbeeld-tekstveld-confirmation"
      class="confirmation"
      aria-describedby="voorbeeld-tekstveld-confirmation-message">
    &lt;/textarea>
    &lt;p class="confirmation" id="voorbeeld-tekstveld-confirmation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
        Bevestiging:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="textarea">
    <form action="" method="post">
      <label for="voorbeeld-tekstveld-system">Voorbeeld tekstveld</label>
      <div>
        <textarea
          id="voorbeeld-tekstveld-system"
          name="voorbeeld-tekstveld-system"
          class="system"
          aria-describedby="voorbeeld-tekstveld-system-message">
        </textarea>
        <p class="system" id="voorbeeld-tekstveld-system-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Systeembericht:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    <button type="submit">Verzend</button>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="voorbeeld-tekstveld-system">Voorbeeld tekstveld&lt;/label>
  &lt;div>
    &lt;textarea
      id="voorbeeld-tekstveld-system"
      name="voorbeeld-tekstveld-system"
      class="system"
      aria-describedby="voorbeeld-tekstveld-system-message">
    &lt;/textarea>
    &lt;p class="system" id="voorbeeld-tekstveld-system-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Systeembericht:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;button type="submit">Verzend&lt;/button>
&lt;/form>
      </code>
    </pre>
  </div>
  
</manon-tabs>

### Select

<manon-tabs>
  <ul>
    <li><a href="#error">error</a></li>
    <li><a href="#warning">warning</a></li>
    <li><a href="#explanation">explanation</a></li>
    <li><a href="#confirmation">confirmation</a></li>
    <li><a href="#system">system</a></li>
  </ul>

  <div id="error">
    <form action="" method="post">
      <label for="select-error">Selectielijst</label>
      <div>
        <select
          id="select-error"
          name="select"
          class="error"
          aria-describedby="select-error-message"
        >
          <option value="1">Optie 1</option>
          <option value="2">Optie 2</option>
          <option value="3">Optie 3</option>
        </select>
        <p class="error" id="select-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="select-error">Selectielijst&lt;/label>
  &lt;div>
    &lt;select
      id="select-error"
      name="select"
      class="error"
      aria-describedby="select-error-message"
    >
      &lt;option value="1">Optie 1&lt;/option>
      &lt;option value="2">Optie 2&lt;/option>
      &lt;option value="3">Optie 3&lt;/option>
    &lt;/select>
    &lt;p class="error" id="select-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="warning">
    <form action="" method="post">
      <label for="select-warning">Selectielijst</label>
      <div>
        <select
          id="select-warning"
          name="select"
          class="warning"
          aria-describedby="select-warning-message"
        >
          <option value="1">Optie 1</option>
          <option value="2">Optie 2</option>
          <option value="3">Optie 3</option>
        </select>
        <p class="warning" id="select-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="select-warning">Selectielijst&lt;/label>
  &lt;div>
    &lt;select
      id="select-warning"
      name="select"
      class="warning"
      aria-describedby="select-warning-message"
    >
      &lt;option value="1">Optie 1&lt;/option>
      &lt;option value="2">Optie 2&lt;/option>
      &lt;option value="3">Optie 3&lt;/option>
    &lt;/select>
    &lt;p class="warning" id="select-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="explanation">
    <form action="" method="post">
      <label for="select-explanation">Selectielijst</label>
      <div>
        <select
          id="select-explanation"
          name="select"
          class="explanation"
          aria-describedby="select-explanation-message"
        >
          <option value="1">Optie 1</option>
          <option value="2">Optie 2</option>
          <option value="3">Optie 3</option>
        </select>
        <p class="explanation" id="select-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="select-explanation">Selectielijst&lt;/label>
  &lt;div>
    &lt;select
      id="select-explanation"
      name="select"
      class="explanation"
      aria-describedby="select-explanation-message"
    >
      &lt;option value="1">Optie 1&lt;/option>
      &lt;option value="2">Optie 2&lt;/option>
      &lt;option value="3">Optie 3&lt;/option>
    &lt;/select>
    &lt;p class="explanation" id="select-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <form action="" method="post">
      <label for="select-confirmation">Selectielijst</label>
      <div>
        <select
          id="select-confirmation"
          name="select"
          class="confirmation"
          aria-describedby="select-confirmation-message"
        >
          <option value="1">Optie 1</option>
          <option value="2">Optie 2</option>
          <option value="3">Optie 3</option>
        </select>
        <p class="confirmation" id="select-confirmation-message">
          <span class="notification-type">
            <span class="icon icon-check" aria-hidden="true"></span>
            Bevestiging:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="select-confirmation">Selectielijst&lt;/label>
  &lt;div>
    &lt;select
      id="select-confirmation"
      name="select"
      class="confirmation"
      aria-describedby="select-confirmation-message"
    >
      &lt;option value="1">Optie 1&lt;/option>
      &lt;option value="2">Optie 2&lt;/option>
      &lt;option value="3">Optie 3&lt;/option>
    &lt;/select>
    &lt;p class="confirmation" id="select-confirmation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
        Bevestiging:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="system">
    <form action="" method="post">
      <label for="select-system">Selectielijst</label>
      <div>
        <select
          id="select-system"
          name="select"
          class="system"
          aria-describedby="select-system-message"
        >
          <option value="1">Optie 1</option>
          <option value="2">Optie 2</option>
          <option value="3">Optie 3</option>
        </select>
        <p class="system" id="select-system-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Systeembericht:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;label for="select-system">Selectielijst&lt;/label>
  &lt;div>
    &lt;select
      id="select-system"
      name="select"
      class="system"
      aria-describedby="select-system-message"
    >
      &lt;option value="1">Optie 1&lt;/option>
      &lt;option value="2">Optie 2&lt;/option>
      &lt;option value="3">Optie 3&lt;/option>
    &lt;/select>
    &lt;p class="system" id="select-system-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Systeembericht:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

</manon-tabs>

### Datalist

<manon-tabs>
  <ul>
    <li><a href="#error">error</a></li>
    <li><a href="#warning">warning</a></li>
    <li><a href="#explanation">explanation</a></li>
    <li><a href="#confirmation">confirmation</a></li>
    <li><a href="#system">system</a></li>
  </ul>

  <div id="error">
    <form action="" method="post">
      <label for="datalist-error">Input</label>
      <div>
        <input
          id="datalist-error"
          class="error"
          list="example-list-error"
          aria-describedby="datalist-error-message"
        />
        <p class="error" id="datalist-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <datalist id="example-list-error">
        <option value="Appel"></option>
        <option value="Peer"></option>
        <option value="Druiven"></option>
      </datalist>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
 &lt;form action="" method="post">
  &lt;label for="datalist-error">Input&lt;/label>
  &lt;div>
    &lt;input
      id="datalist-error"
      class="error"
      list="example-list-error"
      aria-describedby="datalist-error-message"
    />
    &lt;p class="error" id="datalist-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/s``pan>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;datalist id="example-list-error">
    &lt;option value="Optie 1">&lt;/option>
    &lt;option value="Optie 2">&lt;/option>
    &lt;option value="Optie 3">&lt;/option>
  &lt;/datalist>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="warning">
    <form action="" method="post">
      <label for="datalist-warning">Input</label>
      <div>
        <input
          id="datalist-warning"
          class="warning"
          list="example-list-warning"
          aria-describedby="datalist-warning-message"
        />
        <p class="warning" id="datalist-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <datalist id="example-list-warning">
        <option value="Appel"></option>
        <option value="Peer"></option>
        <option value="Druiven"></option>
      </datalist>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
 &lt;form action="" method="post">
  &lt;label for="datalist-warning">Input&lt;/label>
  &lt;div>
    &lt;input
      id="datalist-warning"
      class="warning"
      list="example-list-warning"
      aria-describedby="datalist-warning-message"
    />
    &lt;p class="warning" id="datalist-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/s``pan>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;datalist id="example-list-warning">
    &lt;option value="Optie 1">&lt;/option>
    &lt;option value="Optie 2">&lt;/option>
    &lt;option value="Optie 3">&lt;/option>
  &lt;/datalist>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="explanation">
    <form action="" method="post">
      <label for="datalist-explanation">Input</label>
      <div>
        <input
          id="datalist-explanation"
          class="explanation"
          list="example-list-explanation"
          aria-describedby="datalist-explanation-message"
        />
        <p class="explanation" id="datalist-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <datalist id="example-list-explanation">
        <option value="Appel"></option>
        <option value="Peer"></option>
        <option value="Druiven"></option>
      </datalist>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
 &lt;form action="" method="post">
  &lt;label for="datalist-explanation">Input&lt;/label>
  &lt;div>
    &lt;input
      id="datalist-explanation"
      class="explanation"
      list="example-list-explanation"
      aria-describedby="datalist-explanation-message"
    />
    &lt;p class="explanation" id="datalist-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/s``pan>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;datalist id="example-list-explanation">
    &lt;option value="Optie 1">&lt;/option>
    &lt;option value="Optie 2">&lt;/option>
    &lt;option value="Optie 3">&lt;/option>
  &lt;/datalist>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <form action="" method="post">
      <label for="datalist-confirmation">Input</label>
      <div>
        <input
          id="datalist-confirmation"
          class="confirmation"
          list="example-list-confirmation"
          aria-describedby="datalist-confirmation-message"
        />
        <p class="confirmation" id="datalist-confirmation-message">
          <span class="notification-type">
            <span class="icon icon-check" aria-hidden="true"></span>
            Bevestiging:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <datalist id="example-list-confirmation">
        <option value="Appel"></option>
        <option value="Peer"></option>
        <option value="Druiven"></option>
      </datalist>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
 &lt;form action="" method="post">
  &lt;label for="datalist-confirmation">Input&lt;/label>
  &lt;div>
    &lt;input
      id="datalist-confirmation"
      class="confirmation"
      list="example-list-confirmation"
      aria-describedby="datalist-confirmation-message"
    />
    &lt;p class="confirmation" id="datalist-confirmation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
        Bevestiging:
      &lt;/s``pan>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;datalist id="example-list-confirmation">
    &lt;option value="Optie 1">&lt;/option>
    &lt;option value="Optie 2">&lt;/option>
    &lt;option value="Optie 3">&lt;/option>
  &lt;/datalist>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="system">
    <form action="" method="post">
      <label for="datalist-system">Input</label>
      <div>
        <input
          id="datalist-system"
          class="system"
          list="example-list-system"
          aria-describedby="datalist-system-message"
        />
        <p class="system" id="datalist-system-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Systeembericht:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <datalist id="example-list-system">
        <option value="Appel"></option>
        <option value="Peer"></option>
        <option value="Druiven"></option>
      </datalist>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
 &lt;form action="" method="post">
  &lt;label for="datalist-system">Input&lt;/label>
  &lt;div>
    &lt;input
      id="datalist-system"
      class="system"
      list="example-list-system"
      aria-describedby="datalist-system-message"
    />
    &lt;p class="system" id="datalist-system-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Systeembericht:
      &lt;/s``pan>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
  &lt;datalist id="example-list-system">
    &lt;option value="Optie 1">&lt;/option>
    &lt;option value="Optie 2">&lt;/option>
    &lt;option value="Optie 3">&lt;/option>
  &lt;/datalist>
&lt;/form>
      </code>
    </pre>
  </div>

</manon-tabs>

### Checklist

<manon-tabs>
  <ul>
    <li><a href="#error">error</a></li>
    <li><a href="#warning">warning</a></li>
    <li><a href="#explanation">explanation</a></li>
    <li><a href="#confirmation">confirmation</a></li>
    <li><a href="#system">system</a></li>
  </ul>

  <div id="error">
    <form action="" method="post">
      <div aria-describedby="checkbox-error-message">
        <div class="checkbox">
          <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
          <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="error" id="checkbox-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="checkbox-error-message">
    &lt;div class="checkbox">
      &lt;input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      &lt;label for="checkbox-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="error" id="checkbox-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="warning">
    <form action="" method="post">
      <div aria-describedby="checkbox-warning-message">
        <div class="checkbox">
          <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
          <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="warning" id="checkbox-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="checkbox-warning-message">
    &lt;div class="checkbox">
      &lt;input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      &lt;label for="checkbox-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="warning" id="checkbox-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>
  
  <div id="explanation">
    <form action="" method="post">
      <div aria-describedby="checkbox-explanation-message">
        <div class="checkbox">
          <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
          <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="explanation" id="checkbox-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="checkbox-explanation-message">
    &lt;div class="checkbox">
      &lt;input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      &lt;label for="checkbox-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="explanation" id="checkbox-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <form action="" method="post">
      <div aria-describedby="checkbox-confirmation-message">
        <div class="checkbox">
          <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
          <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="confirmation" id="checkbox-confirmation-message">
          <span class="notification-type">
            <span class="icon icon-check" aria-hidden="true"></span>
            Bevestiging:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="checkbox-confirmation-message">
    &lt;div class="checkbox">
      &lt;input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      &lt;label for="checkbox-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="confirmation" id="checkbox-confirmation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
        Bevestiging:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="system">
    <form action="" method="post">
      <div aria-describedby="checkbox-system-message">
        <div class="checkbox">
          <input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
          <label for="checkbox-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="system" id="checkbox-system-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Systeembericht:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="checkbox-system-message">
    &lt;div class="checkbox">
      &lt;input type="checkbox" id="checkbox-example-base" name="standaard-checkbox" />
      &lt;label for="checkbox-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="system" id="checkbox-system-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Systeembericht:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  </manon-tabs>

### Radio button

<manon-tabs>
  <ul>
    <li><a href="#error">error</a></li>
    <li><a href="#warning">warning</a></li>
    <li><a href="#explanation">explanation</a></li>
    <li><a href="#confirmation">confirmation</a></li>
    <li><a href="#system">system</a></li>
  </ul>

  <div id="error">
    <form action="" method="post">
      <div aria-describedby="radio-error-message">
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="error" id="radio-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="radio-error-message">
    &lt;div class="radio">
      &lt;input type="radio" id="radio-example-base" name="standaard-radio" />
      &lt;label for="radio-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="error" id="radio-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="warning">
    <form action="" method="post">
      <div aria-describedby="radio-warning-message">
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="warning" id="radio-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="radio-warning-message">
    &lt;div class="radio">
      &lt;input type="radio" id="radio-example-base" name="standaard-radio" />
      &lt;label for="radio-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="warning" id="radio-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>
  
  <div id="explanation">
    <form action="" method="post">
      <div aria-describedby="radio-explanation-message">
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="explanation" id="radio-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="radio-explanation-message">
    &lt;div class="radio">
      &lt;input type="radio" id="radio-example-base" name="standaard-radio" />
      &lt;label for="radio-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="explanation" id="radio-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="confirmation">
    <form action="" method="post">
      <div aria-describedby="radio-confirmation-message">
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="confirmation" id="radio-confirmation-message">
          <span class="notification-type">
            <span class="icon icon-check" aria-hidden="true"></span>
            Bevestiging:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="radio-confirmation-message">
    &lt;div class="radio">
      &lt;input type="radio" id="radio-example-base" name="standaard-radio" />
      &lt;label for="radio-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="confirmation" id="radio-confirmation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
        Bevestiging:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  <div id="system">
    <form action="" method="post">
      <div aria-describedby="radio-system-message">
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="system" id="radio-system-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Systeembericht:
          </span>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div aria-describedby="radio-system-message">
    &lt;div class="radio">
      &lt;input type="radio" id="radio-example-base" name="standaard-radio" />
      &lt;label for="radio-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="system" id="radio-system-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Systeembericht:
      &lt;/span>
      Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>

  </manon-tabs>

<!-- datalist, checklist, radio toevoegen> -->

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
