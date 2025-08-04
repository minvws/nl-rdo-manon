---
title: Artikel
nav:
  - Introductie: "#introduction"
  - Voorbeelden: "#examples"
  - Bijbehorende bestanden: "#requirements"
  - Gerelateerde pagina's: "#related"
---

<h1 id="introduction">Artikel - <code>article</code></h1>

## Benodigde stappen:

- Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de
  benodigde en optionele bestanden zie: [Bijbehorende bestanden](#requirements).
- Maak gebruik van een layout set om stijlkeuzes voor de layout centraal vast te
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
  <!-- Content -->
</article>
```

<h2 id="requirements">Bijbehorende bestanden</h2>

Voor meer informatie over importeren en instellen van componenten. Zie:
[Componenten gebruiken en styling toevoegen](/documentation/import-styling)

### Importeer component via npm

<h4>CSS-voorbeeld:</h4>

```css
@use "@minvws/manon/article";
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
        <td>--article-flex-direction</td>
        <td><a href="/documentation/variables#flex-direction">flex-direction</a></td>
        <td>var(--content-flex-direction)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-justify-content</td>
        <td><a href="/documentation/variables#justify-content">justify-content</a></td>
        <td>var(--content-justify-content)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-align-items</td>
        <td><a href="/documentation/variables#align-items">align-items</a></td>
        <td>var(--content-align-items)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-gap</td>
        <td><a href="/documentation/variables#gap">gap</a></td>
        <td>0</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-padding-top</td>
        <td><a href="/documentation/variables#padding-top">padding-top</a></td>
        <td>0</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-padding-right</td>
        <td><a href="/documentation/variables#padding-right">padding-right</a></td>
        <td>var(--page-whitespace-right)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-padding-bottom</td>
        <td><a href="/documentation/variables#padding-bottom">padding-bottom</a></td>
        <td>0</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-padding-left</td>
        <td><a href="/documentation/variables#padding-left">padding-left</a></td>
        <td>var(--page-whitespace-left)</td>
        <td>-</td>
        <td>-</td>
      </tr>

      <tr>
        <td>--article-max-width</td>
        <td><a href="/documentation/variables#max-width">max-width</a></td>
        <td>100%</td>
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
  --article-flex-direction: ;
  --article-justify-content: ;
  --article-align-items: ;
  --article-gap: ;
  --article-padding-top: ;
  --article-padding-right: ;
  --article-padding-bottom: ;
  --article-padding-left: ;
  --article-max-width: ;
}
```

<h2 id="related">Gerelateerde pagina's</h2>

- [Article test](/components/article-test) Testpagina met de content gegroepeerd
  binnen `article`'s.
- [Article content wrapper](/components/article-content-wrapper)
