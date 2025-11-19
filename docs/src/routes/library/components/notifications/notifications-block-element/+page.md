---
title: Blok-element
breadcrumb: Blok-element
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van grotere notificaties.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/notification";
```

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: `div`

<manon-tabs>
  <ul>
    <li><a href="#error">Error</a></li>
    <li><a href="#explanation">Explanation</a></li>
    <li><a href="#warning">Warning</a></li>
    <li><a href="#confirmation">Confirmation</a></li>
    <li><a href="#system">System</a></li>
  </ul>

  <div id="error">
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

  <div id="explanation">
    <div class="explanation">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
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
&lt;div class="explanation">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
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

  <div id="warning">
    <div class="warning">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
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
&lt;div class="warning">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
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

  <div id="confirmation">
    <div class="confirmation">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-check" aria-hidden="true"></span>
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
&lt;div class="confirmation">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
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

  <div id="system">
    <div class="system">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
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
&lt;div class="system">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
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
</manon-tabs>

### Voorbeeld: `section`

<manon-tabs>
  <ul>
    <li><a href="#structure">Structure</a></li>
    <li><a href="#error">Error</a></li>
    <li><a href="#explanation">Explanation</a></li>
    <li><a href="#warning">Warning</a></li>
    <li><a href="#confirmation">Confirmation</a></li>
    <li><a href="#system">System</a></li>
  </ul>

  <div id="structure">
    <section class="confirmation">
      <span class="notification-type">
        <span class="icon icon-check" aria-hidden="true"></span>
        Bevestiging:
      </span>
      <!-- content -->
    </section>

    <p>HTML-Voorbeeld:</p>
    <pre>
      <code>

&lt;section class="confirmation">
&lt;span class="notification-type">
&lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
Bevestiging:
&lt;/span>
&lt;!-- content -->
&lt;/section>
</code>

</pre>

  </div>

  <div id="error">
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

  <div id="explanation">
    <section class="explanation">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
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
&lt;section class="explanation">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
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

  <div id="warning">
    <section class="warning">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
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
&lt;section class="warning">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
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

  <div id="confirmation">
    <section class="confirmation">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-check" aria-hidden="true"></span>
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
&lt;section class="confirmation">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-check" aria-hidden="true">&lt;/span>
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

  <div id="system">
    <section class="system">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
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
&lt;section class="system">
  &lt;h2>Lorem ipsum dolor sit&lt;/h2>
  &lt;span class="notification-type">
    &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
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
