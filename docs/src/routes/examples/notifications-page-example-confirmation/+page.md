---
title: Pagina-notificatie bevestiging voorbeeld
breadcrumb: Pagina-notificatie bevestiging voorbeeld
---

<section class="confirmation" role="group" aria-label="bevestiging">
  <div>
    <span>Bevestiging:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h1 id="introduction">Pagina-notificatie bevestiging voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="confirmation" role="group" aria-label="bevestiging"><span>Bevestiging:</span> Lorem ipsum dolor sit.</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-confirmation-page";
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
        <td>--notification-confirmation-page-background-color</td>
        <td><a href="/getting-started/installation#background-color">background-color</a></td>
        <td>var(--confirmation-background-color)</td>
        <td>-</td>
        <th rowspan="24" scope="rowgroup">confirmation</th>
      </tr>

      <tr>
        <td>--notification-confirmation-page-text-color</td>
        <td><a href="/getting-started/installation#text-color">color</a></td>
        <td>var(--confirmation-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-border-width</td>
        <td><a href="/getting-started/installation#border-width">border-width</a></td>
        <td>var(--notification-border-width)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-border-style</td>
        <td><a href="/getting-started/installation#border-style">border-style</a></td>
        <td>var(--notification-border-style)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-border-color</td>
        <td><a href="/getting-started/installation#border-color">border-color</a></td>
        <td>var(--confirmation-border-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-padding-top</td>
        <td><a href="/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-padding-right</td>
        <td><a href="/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--page-whitespace-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-confirmation-page-padding-bottom</td>
        <td><a href="/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-padding-left</td>
        <td><a href="/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--page-whitespace-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-gap</td>
        <td><a href="/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-span-font-weight</td>
        <td><a href="/getting-started/installation#font-weight">span-font-weight</a></td>
        <td>var(--notification-span-font-weight)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-pagecontent-wrapper-padding-top</td>
        <td><a href="/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-pagecontent-wrapper-padding-right</td>
        <td><a href="/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--content-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-confirmation-pagecontent-wrapper-padding-bottom</td>
        <td><a href="/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-pagecontent-wrapper-padding-left</td>
        <td><a href="/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--content-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-pagecontent-wrapper-gap</td>
        <td><a href="/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-pagecontent-wrapper-span-font-weight</td>
        <td><a href="/getting-started/installation#font-weight">font-weight</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon-font-family</td>
        <td><a href="/getting-started/installation#font-family">font-family</a></td>
        <td>var(--notification-icon-font-family)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon-font-size</td>
        <td><a href="/getting-started/installation#font-size">font-size</a></td>
        <td>var(--notification-icon-font-size)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon-text-color</td>
        <td><a href="/getting-started/installation#text-color">color</a></td>
        <td>var(--notification-icon-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon-padding-right</td>
        <td><a href="/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--notification-icon-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon-padding-left</td>
        <td><a href="/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--notification-icon-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon-margin-right</td>
        <td><a href="/getting-started/installation#margin-right">margin-right</a></td>
        <td>var(--notification-icon-margin-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-confirmation-page-icon</td>
        <td><a href="/getting-started/installation#content">content</a></td>
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
    --notification-confirmation-page-background-color: ;
    --notification-confirmation-page-text-color: ;
    --notification-confirmation-page-border-width: ;
    --notification-confirmation-page-border-style: ;
    --notification-confirmation-page-border-color: ;
    --notification-confirmation-page-padding-top: ;
    --notification-confirmation-page-padding-right: ;
    --notification-confirmation-page-padding-bottom: ;
    --notification-confirmation-page-padding-left: ;
    --notification-confirmation-page-gap: ;

    /* First span */
    --notification-confirmation-page-span-font-weight: ;


    /* Content wrapper */
    --notification-confirmation-page-content-wrapper-padding-top: ;
    --notification-confirmation-page-content-wrapper-padding-right: ;
    --notification-confirmation-page-content-wrapper-padding-bottom: ;
    --notification-confirmation-page-content-wrapper-padding-left: ;
    --notification-confirmation-page-content-wrapper-gap: ;

    /* First span */
    --notification-confirmation-page-content-wrapper-span-font-weight: ;

    /* Icon */
    --notification-confirmation-page-icon-font-family: ;
    --notification-confirmation-page-icon-font-size: ;
    --notification-confirmation-page-icon-text-color: ;
    --notification-confirmation-page-icon-padding-right: ;
    --notification-confirmation-page-icon-padding-left: ;
    --notification-confirmation-page-icon-margin-right: ;
    --notification-confirmation-page-icon: ;
}
```
