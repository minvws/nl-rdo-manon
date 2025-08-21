---
title: Horizontale scroll
breadcrumb: Horizontale scroll
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h1 id="introduction">Horizontale scroll</h1>

Voor componenten die breder zijn dan het scherm maar wel horizontaal weergegeven
dienen te worden.

<h2 id="quick-start">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/horizontal-scroll";

// Optioneel: voor het voorkomen van tekstomloop
@use "@minvws/manon/nowrap";
```

Voeg de class `horizontal-scroll` toe om het element over de horizontale as te
laten scrollen als de content niet meer binnen de breedte van het scherm past.

<h2 id="examples">Voorbeelden</h2>

### Voorbeeld: Tabeltitel op een regel

<div class="horizontal-scroll">
  <table>
    <caption> Basisvoorbeeld tabel: </caption>
    <thead class="nowrap">
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead class="nowrap">
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
```

<p class="explanation">
  <strong>Tip:</strong> Om te voorkomen dat de tabeltitels op meerdere regels getoond
  kan de class <code>nowrap</code> toegevoegd worden aan de <code>&lt;thead&gt;</code>.
</p>

### Voorbeeld: Tabeltitel en content op een regel

<div class="horizontal-scroll nowrap">
  <table>
    <caption> Basisvoorbeeld tabel: </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<div class="horizontal-scroll nowrap">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
        <th scope="col">Table header heading 4</th>
        <th scope="col">Table header heading 5</th>
        <th scope="col">Table header heading 6</th>
        <th scope="col">Table header heading 7</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
        <td>Dolor set</td>
      </tr>
    </tbody>
  </table>
</div>
```

<p class="explanation">
  <strong>Tip:</strong> Om te voorkomen dat de tabeltitels op meerdere regels getoond
  kan de class <code>nowrap</code> toegevoegd worden aan de <code>&lt;thead&gt;</code>.
</p>
