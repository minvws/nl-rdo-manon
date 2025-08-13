---
title: Taalselectie
breadcrumb: Taalselectie
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Taalselectie</h1>

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/language-selector";
```

Een taalselectie element biedt een verticale keuzelijst die openklapt.

## Benodigde stappen:

1.  Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
    benodigde en optionele bestanden zie:
    [Bijbehorende bestanden](#requirements).
2.  Voeg de benodigde HTML toe. Voor meer informatie zie:
    [Voorbeelden](#examples).

<h2 id="examples">Voorbeelden:</h2>

### Paragraaf

#### Visueel voorbeeld:

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

#### HTML-voorbeeld:

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
        <a hreflang="nl" href="#" data-value="Nederlands" lang="nl"
          >Nederlands</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="en" href="#" data-value="English" lang="en">English</a>
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="fy" href="#" data-value="Frysk" lang="fy">Frysk</a>
      </li>
      <li role="option" aria-selected="true" aria-current="true">
        <a hreflang="pap-CW" href="#" data-value="Papiamentu" lang="pap-CW"
          >Papiamentu</a
        >
      </li>
      <li role="option" aria-selected="false">
        <a hreflang="pap-AW" href="#" data-value="Papiamento" lang="pap-AW"
          >Papiamento</a
        >
      </li>
    </ul>
  </div>
</div>
```

#### Structuurvoorbeeld:

```html
<header>
  <nav aria-label="Hoofdnavigatie">
    <!-- Navigatie items -->
    <!-- Taalselectie -->
  </nav>
</header>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

<h2 id="related">Gerelateerde pagina's</h2>

<a href="/components/language-selector-test">Test- en voorbeelden-pagina</a>
