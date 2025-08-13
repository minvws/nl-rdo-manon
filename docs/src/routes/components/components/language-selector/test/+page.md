---
title: Taalselectie testpagina
breadcrumb: Taalselectie testpagina
---

<h1 id="introduction">Taalselectie testpagina</h1>

Overzicht van het element in mogelijke structuren om te testen.

<h2 id="tests">Tests</h2>

### Basis

#### Visueel voorbeeld:

<div class="language-selector">
  <p>Kies een taal:</p>
  <p class="visually-hidden" id="language-selector-description">Select your language</p>
  <div
    class="language-selector-options"
    aria-describedby="language-selector-description"
    aria-expanded="false"
  >
    <button aria-haspopup="listbox" aria-current="true"> Papiamentu </button>
    <ul role="listbox">
      <li role="option" aria-selected="false">
        <a hreflang="nl" href="language-selector-test" data-value="Nederlands" lang="nl"
          >Nederlands</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="en" href="language-selector-test" data-value="English" lang="en"
          >English</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="fy" href="language-selector-test" data-value="Frysk" lang="fy">Frysk</a
        >
      </li>
      <li role="option" aria-selected="true">
        <a
          hreflang="pap-CW"
          href="language-selector-test"
          aria-current="true"
          data-value="Papiamentu"
          lang="pap-CW">Papiamentu</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a
          hreflang="pap-AW"
          href="language-selector-test"
          data-value="Papiamento"
          lang="pap-AW">Papiamento</a
        >
      </li>
    </ul>
  </div>
</div>

#### HTML-voorbeeld:

```html
<div class="language-selector">
  <p>Kies een taal:</p>
  <p class="visually-hidden" id="language-selector-description">Select your language</p>
  <div class="language-selector-options" aria-describedby="language-selector-description" aria-expanded="false">
    <button aria-haspopup="listbox" aria-current="true">
      Papiamentu
    </button>
    <ul role="listbox">
        <li role="option" aria-selected="false">
          <a hreflang="nl" href="#" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="en" href="#" data-value="English" lang="en">English</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="fy" href="#" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li role="option" aria-selected="true" aria-current="true">
          <a hreflang="pap-CW" href="#" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li role="option" aria-selected="false">
          <a hreflang="pap-AW" href="#" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
    </ul>
  </div>
</div>
```
