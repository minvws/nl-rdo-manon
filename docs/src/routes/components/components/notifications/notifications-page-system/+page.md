---
title: Pagina-notificatie systeembericht voorbeeld
breadcrumb: Pagina-notificatie systeembericht voorbeeld
---

<section class="system" role="group" aria-label="systeembericht">
  <div>
    <span>Systeembericht:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h1 id="introduction">Pagina-notificatie systeembericht voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="system" role="group" aria-label="systeembericht">
  <span>Systeembericht:</span> Lorem ipsum dolor sit.
</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen]({base}/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-system-message";
@use "@minvws/manon/notification-system-page";
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
        <td>--notification-system-page-background-color</td>
        <td><a href="{base}/getting-started/installation#background-color">background-color</a></td>
        <td>var(--system-background-color)</td>
        <td>-</td>
        <th rowspan="24" scope="rowgroup">system</th>
      </tr>

      <tr>
        <td>--notification-system-page-text-color</td>
        <td><a href="{base}/getting-started/installation#text-color">color</a></td>
        <td>var(--system-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-border-width</td>
        <td><a href="{base}/getting-started/installation#border-width">border-width</a></td>
        <td>var(--notification-border-width)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-border-style</td>
        <td><a href="{base}/getting-started/installation#border-style">border-style</a></td>
        <td>var(--notification-border-style)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-border-color</td>
        <td><a href="{base}/getting-started/installation#border-color">border-color</a></td>
        <td>var(--system-border-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-padding-top</td>
        <td><a href="{base}/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--page-whitespace-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-system-page-padding-bottom</td>
        <td><a href="{base}/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--page-whitespace-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-gap</td>
        <td><a href="{base}/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-span-font-weight</td>
        <td><a href="{base}/getting-started/installation#font-weight">span-font-weight</a></td>
        <td>var(--notification-span-font-weight)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-pagecontent-wrapper-padding-top</td>
        <td><a href="{base}/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-pagecontent-wrapper-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--content-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-system-pagecontent-wrapper-padding-bottom</td>
        <td><a href="{base}/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-pagecontent-wrapper-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--content-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-pagecontent-wrapper-gap</td>
        <td><a href="{base}/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-pagecontent-wrapper-span-font-weight</td>
        <td><a href="{base}/getting-started/installation#font-weight">font-weight</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon-font-family</td>
        <td><a href="{base}/getting-started/installation#font-family">font-family</a></td>
        <td>var(--notification-icon-font-family)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon-font-size</td>
        <td><a href="{base}/getting-started/installation#font-size">font-size</a></td>
        <td>var(--notification-icon-font-size)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon-text-color</td>
        <td><a href="{base}/getting-started/installation#text-color">color</a></td>
        <td>var(--notification-icon-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--notification-icon-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--notification-icon-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon-margin-right</td>
        <td><a href="{base}/getting-started/installation#margin-right">margin-right</a></td>
        <td>var(--notification-icon-margin-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-system-page-icon</td>
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
  --notification-system-page-background-color: ;
  --notification-system-page-text-color: ;
  --notification-system-page-border-width: ;
  --notification-system-page-border-style: ;
  --notification-system-page-border-color: ;
  --notification-system-page-padding-top: ;
  --notification-system-page-padding-right: ;
  --notification-system-page-padding-bottom: ;
  --notification-system-page-padding-left: ;
  --notification-system-page-gap: ;

  /* First span */
  --notification-system-page-span-font-weight: ;

  /* Content wrapper */
  --notification-system-page-content-wrapper-padding-top: ;
  --notification-system-page-content-wrapper-padding-right: ;
  --notification-system-page-content-wrapper-padding-bottom: ;
  --notification-system-page-content-wrapper-padding-left: ;
  --notification-system-page-content-wrapper-gap: ;

  /* First span */
  --notification-system-page-content-wrapper-span-font-weight: ;

  /* Icon */
  --notification-system-page-icon-font-family: ;
  --notification-system-page-icon-font-size: ;
  --notification-system-page-icon-text-color: ;
  --notification-system-page-icon-padding-right: ;
  --notification-system-page-icon-padding-left: ;
  --notification-system-page-icon-margin-right: ;
  --notification-system-page-icon: ;
}
```
