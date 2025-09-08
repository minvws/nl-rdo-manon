---
title: Pagina-notificatie toelichting voorbeeld
breadcrumb: Pagina-notificatie toelichting voorbeeld
---

<section class="explanation" role="group" aria-label="toelichting">
  <div>
    <span>Toelichting:</span>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</section>

<h1 id="introduction">Pagina-notificatie toelichting voorbeeld</h1>

Voor het weergeven van notificaties op paginaniveau.

<h2 id="examples">Voorbeelden</h2>

### Visueel voorbeeld:

Voor het voorbeeld zie bovenaan deze pagina.

### HTML-voorbeeld:

#### `section`

```html
<p class="explanation" role="group" aria-label="toelichting"><span>Toelichting:</span> Lorem ipsum dolor sit.</p>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen]({base}/getting-started/installation)

### Importeer component via npm

#### CSS-voorbeeld:

```css
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-explanation-message";
@use "@minvws/manon/notification-explanation-page";
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
        <td>--notification-explanation-page-background-color</td>
        <td><a href="{base}/getting-started/installation#background-color">background-color</a></td>
        <td>var(--explanation-background-color)</td>
        <td>-</td>
        <th rowspan="24" scope="rowgroup">explanation</th>
      </tr>

      <tr>
        <td>--notification-explanation-page-text-color</td>
        <td><a href="{base}/getting-started/installation#text-color">color</a></td>
        <td>var(--explanation-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-border-width</td>
        <td><a href="{base}/getting-started/installation#border-width">border-width</a></td>
        <td>var(--notification-border-width)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-border-style</td>
        <td><a href="{base}/getting-started/installation#border-style">border-style</a></td>
        <td>var(--notification-border-style)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-border-color</td>
        <td><a href="{base}/getting-started/installation#border-color">border-color</a></td>
        <td>var(--explanation-border-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-padding-top</td>
        <td><a href="{base}/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--page-whitespace-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-explanation-page-padding-bottom</td>
        <td><a href="{base}/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--page-whitespace-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-gap</td>
        <td><a href="{base}/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-span-font-weight</td>
        <td><a href="{base}/getting-started/installation#font-weight">span-font-weight</a></td>
        <td>var(--notification-span-font-weight)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-pagecontent-wrapper-padding-top</td>
        <td><a href="{base}/getting-started/installation#padding-top">padding-top</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-pagecontent-wrapper-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--content-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td> --notification-explanation-pagecontent-wrapper-padding-bottom</td>
        <td><a href="{base}/getting-started/installation#padding-bottom">padding-bottom</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-pagecontent-wrapper-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--content-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-pagecontent-wrapper-gap</td>
        <td><a href="{base}/getting-started/installation#gap">gap</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-pagecontent-wrapper-span-font-weight</td>
        <td><a href="{base}/getting-started/installation#font-weight">font-weight</a></td>
        <td>0.5rem</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon-font-family</td>
        <td><a href="{base}/getting-started/installation#font-family">font-family</a></td>
        <td>var(--notification-icon-font-family)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon-font-size</td>
        <td><a href="{base}/getting-started/installation#font-size">font-size</a></td>
        <td>var(--notification-icon-font-size)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon-text-color</td>
        <td><a href="{base}/getting-started/installation#text-color">color</a></td>
        <td>var(--notification-icon-text-color)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon-padding-right</td>
        <td><a href="{base}/getting-started/installation#padding-right">padding-right</a></td>
        <td>var(--notification-icon-padding-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon-padding-left</td>
        <td><a href="{base}/getting-started/installation#padding-left">padding-left</a></td>
        <td>var(--notification-icon-padding-left)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon-margin-right</td>
        <td><a href="{base}/getting-started/installation#margin-right">margin-right</a></td>
        <td>var(--notification-icon-margin-right)</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--notification-explanation-page-icon</td>
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
    --notification-explanation-page-background-color: ;
    --notification-explanation-page-text-color: ;
    --notification-explanation-page-border-width: ;
    --notification-explanation-page-border-style: ;
    --notification-explanation-page-border-color: ;
    --notification-explanation-page-padding-top: ;
    --notification-explanation-page-padding-right: ;
    --notification-explanation-page-padding-bottom: ;
    --notification-explanation-page-padding-left: ;
    --notification-explanation-page-gap: ;

    /* First span */
    --notification-explanation-page-span-font-weight: ;


    /* Content wrapper */
    --notification-explanation-page-content-wrapper-padding-top: ;
    --notification-explanation-page-content-wrapper-padding-right: ;
    --notification-explanation-page-content-wrapper-padding-bottom: ;
    --notification-explanation-page-content-wrapper-padding-left: ;
    --notification-explanation-page-content-wrapper-gap: ;

    /* First span */
    --notification-explanation-page-content-wrapper-span-font-weight: ;

    /* Icon */
    --notification-explanation-page-icon-font-family: ;
    --notification-explanation-page-icon-font-size: ;
    --notification-explanation-page-icon-text-color: ;
    --notification-explanation-page-icon-padding-right: ;
    --notification-explanation-page-icon-padding-left: ;
    --notification-explanation-page-icon-margin-right: ;
    --notification-explanation-page-icon: ;
}
```
