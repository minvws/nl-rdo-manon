---
title: Article content wrapper
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Article content wrapper</h1>

## Benodigde stappen:

- Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
  benodigde en optionele bestanden zie: [Bijbehorende bestanden](#requirements).
- Maak gebruik van en layout set om stijlkeuzes voor de layout centraal vast te
  leggen en in verschillende componenten te gebruiken. Denk bijvoorbeeld aan het
  vastleggen van de afstand tussen de blokken binnen de `main`, een `article` en
  een `section`. Voor meer informatie zie:
  [Gebruik maken van een layout-set](#layout-set).

<h2 id="layout-set">Gebruik maken van een layout-set</h2>

Layout-sets kunnen gebruikt worden om op een centrale plek de stijlkeuzes vast
te leggen voor layout-gerelateerde keuzes.

Beschikbare styling sets voor layout zijn:

- [Layout-basisset](/components/layout-set)

<h2 id="examples">Voorbeelden</h2>

### HTML-voorbeeld:

<h4><code>article</code>:</h4>

```html
<article class="visually-grouped">
  <div> <!-- Content wrapper -->
    <!-- Content -->
  <div>
</article>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

<h4>CSS-voorbeeld:</h4>

```css
@use "@minvws/manon/article-content-wrapper";
```

<h2 id="variables">Instelbare variabelen</h2>

<div class="horizontal-scroll">
  <table class="nowrap">
    <caption>Instelbare variabelen tabel:</caption>
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
        <td>--article-content-wrapper-flex-direction</td>
        <td><a href="/documentation/variables#flex-direction">flex-direction</a></td>
        <td>var(--content-flex-direction)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-justify-content</td>
        <td><a href="/documentation/variables#justify-content">justify-content</a></td>
        <td>var(--content-justify-content)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-align-items</td>
        <td><a href="/documentation/variables#align-items">align-items</a></td>
        <td>var(--content-align-items)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-gap</td>
        <td><a href="/documentation/variables#gap">gap</a></td>
        <td>var(--content-gap)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-padding-top</td>
        <td><a href="/documentation/variables#padding-top">padding-top</a></td>
        <td>var(--content-padding-top)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-padding-right</td>
        <td><a href="/documentation/variables#padding-right">padding-right</a></td>
        <td>var(--content-padding-right)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-padding-bottom</td>
        <td><a href="/documentation/variables#padding-bottom">padding-bottom</a></td>
        <td>var(--content-padding-bottom)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-padding-left</td>
        <td><a href="/documentation/variables#padding-left">padding-left</a></td>
        <td>var(--content-padding-left)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-content-wrapper-max-width</td>
        <td><a href="/documentation/variables#max-width">max-width</a></td>
        <td>var(--content-max-width)</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>

  </table>
</div>

### CSS

Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van
jouw project. Kies en gebruik de benodigde variabelen.

```css
:root {
  --article-content-wrapper-flex-direction: ;
  --article-content-wrapper-justify-content: ;
  --article-content-wrapper-align-items: ;
  --article-content-wrapper-gap: ;
  --article-content-wrapper-padding-top: ;
  --article-content-wrapper-padding-right: ;
  --article-content-wrapper-padding-bottom: ;
  --article-content-wrapper-padding-left: ;
  --article-content-wrapper-max-width: ;
}
```

<h2 id="related">Gerelateerde pagina's</h2>

- [Sectie content wrapper test](/components/article-content-wrapper-test)
  Testpagina met de content gegroepeerd binnen `article`'s met een content
  wrapper.
- [Article](/components/article) Content zonder content wrapper.
