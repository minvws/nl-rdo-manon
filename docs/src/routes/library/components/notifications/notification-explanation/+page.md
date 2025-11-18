---
title: Toelichting
breadcrumb: Toelichting
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

  <div id="span">
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

  <div id="div">
    <div class="explanation">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Toelichting:
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
Toelichting:
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
    <section class="explanation">
      <h2>Lorem ipsum dolor sit</h2>
      <span class="notification-type">
        <span class="icon icon-informative" aria-hidden="true"></span>
        Toelichting:
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
Toelichting:
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

  <div id="select">
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
  
  <div id="datalist">
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
      &lt;/span>
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

  <div id="checklist">
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

  <div id="radio">
    <form action="" method="post">
      <div>
        <div class="radio">
          <input type="radio" id="radio-example-base" name="standaard-radio" />
          <label for="radio-example-base">Lorem ipsum dolor sit amet</label>
        </div>
        <p class="explanation" id="radio-example-explanation-message">
          <span class="notification-type">
            <span class="icon icon-informative" aria-hidden="true"></span>
            Toelichting:
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
    &lt;p class="explanation" id="radio-example-explanation-message">
      &lt;span class="notification-type">
        &lt;span class="icon icon-informative" aria-hidden="true">&lt;/span>
        Toelichting:
      &lt;/span> Lorem ipsum dolor sit amet
    &lt;/p>
  &lt;/div>
&lt;/form>
      </code>
    </pre>
  </div>
</manon-tabs>
