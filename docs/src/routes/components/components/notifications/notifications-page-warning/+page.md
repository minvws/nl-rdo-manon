---
title: Pagina-notificatie waarschuwing voorbeeld
breadcrumb: Pagina-notificatie waarschuwing voorbeeld
---

<section class="warning" role="group" aria-label="waarschuwing">
  <div>
    <span>Waarschuwing:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h1 id="introduction">Pagina-notificatie waarschuwing voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="warning" role="group" aria-label="waarschuwing">
  <span>Waarschuwing:</span> Lorem ipsum dolor sit.
</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen]({base}/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-warning-message";
@use "@minvws/manon/notification-warning-page";
```

<h2 id="variables">Instelbare variabelen</h2>

<div class="horizontal-scroll">
  <table class="nowrap">
    <caption>Beschikbare instelbare variabelen:</caption>
    <thead>
      <tr>
        <th scope="col">Variabele</th>
        <th scope="col">CSS-attribuut</th>
        <th scope="col">Manon ingestelde waarde</th>
        <th scope="col">Breekpunt</th>
        <th scope="col">Class</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>--notification-warning-page-background-color</td>
        <td><a href="{base}/getting-started/installation#background-color">background-color</a></td>
        <td>var(--warning-background-color)</td>
        <td>-</td>
        <th rowspan="24" scope="rowgroup">warning</th>
      </tr>

      <tr>
        <td>--notification-warning-page-text-color</td>
        <td><a href="{base}/getting-started/installation#text-color">color</a></td>
        <td>var(--warning-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-border-width</td>
        <td><a href="{base}/getting-started/installation#border-width">border-width</a></td>
        <td>var(--notification-border-width)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-border-style</td>
        <td><a href="{base}/getting-started/installation#border-style">border-style</a></td>
        <td>var(--notification-border-style)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-border-color</td>
        <td><a href="{base}/getting-started/installation#border-color">border-color</a></td>
        <td>var(--warning-border-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-padding-top</td>
        <td><a href="{base}/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--page-whitespace-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-warning-page-padding-bottom</td>
        <td><a href="{base}/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--page-whitespace-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-gap</td>
        <td><a href="{base}/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-span-font-weight</td>
        <td><a href="{base}/getting-started/installation#font-weight">span-font-weight</a></td>
        <td>var(--notification-span-font-weight)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-pagecontent-wrapper-padding-top</td>
        <td><a href="{base}/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-pagecontent-wrapper-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--content-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-warning-pagecontent-wrapper-padding-bottom</td>
        <td><a href="{base}/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-pagecontent-wrapper-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--content-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-pagecontent-wrapper-gap</td>
        <td><a href="{base}/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-pagecontent-wrapper-span-font-weight</td>
        <td><a href="{base}/getting-started/installation#font-weight">font-weight</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon-font-family</td>
        <td><a href="{base}/getting-started/installation#font-family">font-family</a></td>
        <td>var(--notification-icon-font-family)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon-font-size</td>
        <td><a href="{base}/getting-started/installation#font-size">font-size</a></td>
        <td>var(--notification-icon-font-size)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon-text-color</td>
        <td><a href="{base}/getting-started/installation#text-color">color</a></td>
        <td>var(--notification-icon-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--notification-icon-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--notification-icon-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon-margin-right</td>
        <td><a href="{base}/getting-started/installation#margin-right">margin-right</a></td>
        <td>var(--notification-icon-margin-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-warning-page-icon</td>
        <td><a href="{base}/getting-started/installation#content">content</a></td>
        <td>var(--notification-icon)</td>
        <td>-</td>
      </tr>
    </tbody>

  </table>
</div>

### CSS

Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
project. Kies en gebruik de benodigde variabelen.

```css
:root {
  --notification-warning-page-background-color: ;
  --notification-warning-page-text-color: ;
  --notification-warning-page-border-width: ;
  --notification-warning-page-border-style: ;
  --notification-warning-page-border-color: ;
  --notification-warning-page-padding-top: ;
  --notification-warning-page-padding-right: ;
  --notification-warning-page-padding-bottom: ;
  --notification-warning-page-padding-left: ;
  --notification-warning-page-gap: ;

  /* First span */
  --notification-warning-page-span-font-weight: ;

  /* Content wrapper */
  --notification-warning-page-content-wrapper-padding-top: ;
  --notification-warning-page-content-wrapper-padding-right: ;
  --notification-warning-page-content-wrapper-padding-bottom: ;
  --notification-warning-page-content-wrapper-padding-left: ;
  --notification-warning-page-content-wrapper-gap: ;

  /* First span */
  --notification-warning-page-content-wrapper-span-font-weight: ;

  /* Icon */
  --notification-warning-page-icon-font-family: ;
  --notification-warning-page-icon-font-size: ;
  --notification-warning-page-icon-text-color: ;
  --notification-warning-page-icon-padding-right: ;
  --notification-warning-page-icon-padding-left: ;
  --notification-warning-page-icon-margin-right: ;
  --notification-warning-page-icon: ;
}
```
