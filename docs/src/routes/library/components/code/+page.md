---
title: Code & Code block
breadcrumb: Code & Code block
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>
Code(blokken) kunnen gebruikt worden voor het weergevan van code. Bij het weergeven van code worden de volgende punten meestal gehanteerd.

- Rgels worden niet afgebroken maar exact getoond zoals ze in de code staan
- Tekst wordt weergegeven in een monospace font (Alle letters gebruiken dezelfde breedte)
- Visueel wordt er een onderscheid gemaakt tussen tekst en code-voorbeelden

<h2 id="quickstart">Snelstart</h2>

```scss
@use "@minvws/manon/components/code";
@use "@minvws/manon/components/code-block";
```

<h2 id="examples">Voorbeelden</h2>

### Code

<code>&lt;div class="message-counter"></code>

```html
 <code><div class="message-counter"></code>
```

### Code block

<pre>
  <code>
    &lt;form action="" method="post">
      &lt;label for="voorbeeld-text-input-1">Voorbeeld text input&lt;/label>
      &lt;input id="voorbeeld-text-input-1" name="voorbeeld-text-input-1" placeholder="voorbeeld text input" type="text">

      &lt;button type="submit">Verzend&lt;/button>
    &lt;/form>
  </code>
</pre>

```html
<pre>
  <code>
    <form action="" method="post">
      <label for="voorbeeld-text-input-1">Voorbeeld text input</label>
      <input id="voorbeeld-text-input-1" name="voorbeeld-text-input-1" placeholder="voorbeeld text input" type="text">

      <button type="submit">Verzend</button>
    </form>
  </code>
</pre>
```
