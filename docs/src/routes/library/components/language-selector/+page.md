---
title: Taalselectie
breadcrumb: Taalselectie
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Een taalselectie is een dropdown-menu waarmee gebruikers uit een verticale lijst van talen kunnen kiezen door het menu uit te klappen.

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/language-selector";
```

<h2 id="examples">Voorbeelden:</h2>

### Voorbeeld: Basis

<div class="language-selector">
  <p id="language-selector-description">Kies een taal:</p>
  <div
    class="language-selector-options"
    aria-describedby="language-selector-description"
    aria-expanded="false"
  >
    <button aria-haspopup="listbox" aria-current="true"> Papiamentu </button>
    <ul role="listbox">
      <li role="option" aria-selected="false">
        <a hreflang="nl" href="language-selector" data-value="Nederlands" lang="nl"
          >Nederlands</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="en" href="language-selector" data-value="English" lang="en">English</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="fy" href="language-selector" data-value="Frysk" lang="fy">Frysk</a>
      </li>
      <li role="option" aria-selected="true" aria-current="true">
        <a hreflang="pap-CW" href="language-selector" data-value="Papiamentu" lang="pap-CW"
          >Papiamentu</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="pap-AW" href="language-selector" data-value="Papiamento" lang="pap-AW"
          >Papiamento</a
        >
      </li>
    </ul>
  </div>
</div>

```html
<div class="language-selector">
  <p id="language-selector-description">Kies een taal:</p>
  <div
    class="language-selector-options"
    aria-describedby="language-selector-description"
    aria-expanded="false"
  >
    <button aria-haspopup="listbox" aria-current="true">Papiamentu</button>
    <ul role="listbox">
      <li role="option" aria-selected="false">
        <a hreflang="nl" href="#0" data-value="Nederlands" lang="nl">Nederlands</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="en" href="#0" data-value="English" lang="en">English</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="fy" href="#0" data-value="Frysk" lang="fy">Frysk</a>
      </li>
      <li role="option" aria-selected="true" aria-current="true">
        <a hreflang="pap-CW" href="#0" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="pap-AW" href="#0" data-value="Papiamento" lang="pap-AW">Papiamento</a>
      </li>
    </ul>
  </div>
</div>
```
