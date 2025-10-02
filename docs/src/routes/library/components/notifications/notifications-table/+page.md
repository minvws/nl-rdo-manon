---
title: Notificatie binnen tabellen
breadcrumb: Notificatie binnen tabellen
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Voor het weergeven van notificaties binnen tabellen.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-table";
```

<h2 id="examples">Voorbeelden</h2>

<div class="horizontal-scroll">
  <table>
    <caption> Table with titlebar and title example: </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr class="warning">
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td class="explanation">Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="notification">Table footer heading 1</th>
        <th>Table footer heading 2</th>
        <th>Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>

```html
<div class="horizontal-scroll">
  <table>
    <caption>
      Table with titlebar and title example:
    </caption>
    <thead>
      <tr>
        <th scope="col">Table header heading 1</th>
        <th scope="col">Table header heading 2</th>
        <th scope="col">Table header heading 3</th>
      </tr>
    </thead>
    <tbody>
      <tr class="warning">
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
      <tr>
        <td class="explanation">Lorem</td>
        <td>Ipsum</td>
        <td>Dolor sit</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th class="notification">Table footer heading 1</th>
        <th>Table footer heading 2</th>
        <th>Table footer heading 3</th>
      </tr>
      <tr>
        <td>Table footer 1</td>
        <td>Table footer 2</td>
        <td>Table footer 3</td>
      </tr>
    </tfoot>
  </table>
</div>
```
