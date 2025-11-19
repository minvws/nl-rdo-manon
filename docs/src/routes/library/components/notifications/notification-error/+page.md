---
title: Foutmelding
breadcrumb: Foutmelding
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Gebruik om de gebruiker te attenderen op een fout. Bijvoorbeeld bij het
incorrect invoeren van data of een systeemfout.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification";
```

<h2 id="examples">Voorbeelden</h2>

<manon-tabs>
  <ul>
    <li><a href="#paragraph">Paragraaf</a></li>
    <li><a href="#span">span</a></li>
    <li><a href="#div">div</a></li>
    <li><a href="#section">section</a></li>
  </ul>

  <div id="paragraph">
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

  <div id="span">
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

  <div id="div">
    <div class="error">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
        facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
        Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
        efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
        bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
        Mauris euismod a augue sit amet condimentum.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
          consequat facilisis ac eu velit.
          <a href="/library/components/notifications/notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
        </li>
      </ul>
      <button type="button">Lorem</button>
    </div>

    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>

&lt;div class="error">
&lt;h2>Lorem ipsum dolor sit&lt;/h2>
&lt;span class="notification-type">
&lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
Foutmelding:
&lt;/span>
&lt;p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
Mauris euismod a augue sit amet condimentum.
&lt;/p>
&lt;ul>
&lt;li>Lorem ipsum&lt;/li>
&lt;li>Lorem ipsum&lt;/li>
&lt;li>Lorem ipsum&lt;/li>
&lt;li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
consequat facilisis ac eu velit.
&lt;a href="/library/components/notifications/notifications-block-element">Lorem ipsum&lt;/a> consectetur adipiscing elit.
&lt;/li>
&lt;/ul>
&lt;button type="button">Lorem&lt;/button>
&lt;/div>
</code>

</pre>

  </div>

  <div id="section">
    <section class="error">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-error" aria-hidden="true"></span>
        Foutmelding:
      </span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
        facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
        Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
        efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
        bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
        Mauris euismod a augue sit amet condimentum.
      </p>
      <ul>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
          consequat facilisis ac eu velit.
          <a href="/library/components/notifications/notifications-block-element">Lorem ipsum</a> consectetur adipiscing elit.
        </li>
      </ul>
      <button type="button">Lorem</button>
    </section>

    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>

&lt;section class="error">
&lt;h2>Lorem ipsum dolor sit&lt;/h2>
&lt;span class="notification-type">
&lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
Foutmelding:
&lt;/span>
&lt;p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi consequat
facilisis ac eu velit. Donec luctus metus a lacus dictum, a porta ligula pellentesque.
Phasellus ultricies purus id viverra ultrices. Proin sagittis rhoncus tempor. Nam
efficitur elit commodo elit feugiat scelerisque. Nullam consectetur felis mi, ac
bibendum urna convallis a. Ut maximus volutpat ligula, et accumsan ipsum varius eget.
Mauris euismod a augue sit amet condimentum.
&lt;/p>
&lt;ul>
&lt;li>Lorem ipsum&lt;/li>
&lt;li>Lorem ipsum&lt;/li>
&lt;li>Lorem ipsum&lt;/li>
&lt;li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ante a nisi
consequat facilisis ac eu velit.
&lt;a href="/library/components/notifications/notifications-block-element">Lorem ipsum&lt;/a> consectetur adipiscing elit.
&lt;/li>
&lt;/ul>
&lt;button type="button">Lorem&lt;/button>
&lt;/section>
</code>

</pre>

  </div>
</manon-tabs>

### Form elementen

<manon-tabs>
  <ul>
    <li><a href="#textarea">textarea</a></li>
    <li><a href="#select">select</a></li>
    <li><a href="#datalist">datalist</a></li>
    <li><a href="#checklist">checklist</a></li>
    <li><a href="#radio">radio</a></li>
  </ul>

  <div id="textarea">
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

  <div id="select">
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
  
  <div id="datalist">
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
      &lt;/span>
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

  <div id="checklist">
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

  <div id="radio">
    <form action="" method="post">
      <div>
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="error" id="radio-example-error-message">
          <span class="notification-type">
            <span class="icon icon-error" aria-hidden="true"></span>
            Foutmelding:
          </span> Lorem ipsum dolor sit amet
        </p>
      </div>
    </form>
    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>
&lt;form action="" method="post">
  &lt;div>
    &lt;div class="radio">
      &lt;input type="radio" id="radio-example-base" name="standaard-radio" />
      &lt;label for="radio-example-base">Lorem ipsum dolor sit amet&lt;/label>
    &lt;/div>
    &lt;p class="error" id="radio-example-error-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-error" aria-hidden="true">&lt;/span>
        Foutmelding:
      &lt;/span> Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>
</manon-tabs>
