---
title: Waarschuwing
breadcrumb: Waarschuwing
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

  <div id="span">
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

  <div id="div">
    <div class="warning">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
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
Waarschuwing:
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
    <section class="warning">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-warning" aria-hidden="true"></span>
        Waarschuwing:
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
Waarschuwing:
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

  <div id="select">
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
  
  <div id="datalist">
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
      &lt;/span>
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

  <div id="checklist">
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

  <div id="radio">
    <form action="" method="post">
      <div>
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="warning" id="radio-example-warning-message">
          <span class="notification-type">
            <span class="icon icon-warning" aria-hidden="true"></span>
            Waarschuwing:
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
    &lt;p class="warning" id="radio-example-warning-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-warning" aria-hidden="true">&lt;/span>
        Waarschuwing:
      &lt;/span> Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>
</manon-tabs>
