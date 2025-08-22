---
title: Notificatie binnen tabellen
breadcrumb: Notificatie binnen tabellen
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
---

<h1 id="introduction">Notificatie binnen tabellen</h1>

<h2 id="quick-start">Snelstart</h2>

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
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td class="explanation">Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
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
        <td>Dolor set</td>
      </tr>
      <tr>
        <td>Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
      </tr>
      <tr>
        <td class="explanation">Lorem</td>
        <td>Ipsum</td>
        <td>Dolor set</td>
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
