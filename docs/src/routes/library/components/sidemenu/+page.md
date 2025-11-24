---
title: Zijmenu
breadcrumb: Zijmenu
nav:
  - Introductie: "#introduction"
  - Snelstart: "#quickstart"
  - Voorbeelden: "#examples"
---

<h2 id="introduction">Introductie</h2>

Bij lange documenten of pagina's kan een zijmenu gebruikt worden om het
navigeren voor de gebruiker toegankelijk en overzichtelijk te houden.

<h2 id="quickstart">Snelstart</h2>

SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```

JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```

<h2 id="examples">Voorbeelden</h2>

### Hoofdnavigatie

<manon-tabs>
  <ul>
    <li><a href="#page-navigation-collapsible">Inklapbaar</a></li>
    <li><a href="#page-navigation-expandable">Openklapbaar</a></li>
    <li><a href="#page-navigation-static">Statisch</a></li>
  </ul>

  <div id="page-navigation-collapsible">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu/page-navigation/collapsible"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <h4>Implementatiedetails</h4>
    <manon-tabs>
      <ul>
        <li><a href="#page-navigation-collapsible-html">HTML</a></li>
        <li><a href="#page-navigation-collapsible-structure">Structuur</a></li>
        <li><a href="#page-navigation-collapsible-implementation">Instructies</a></li>
        <li><a href="#page-navigation-collapsible-imports">Imports</a></li>
      </ul>
      <div id="page-navigation-collapsible-html">
        <Components.Snippet path="sidemenu/page-navigation/collapsible/code-example.html" as="code" language="html"/>
      </div>
      <div id="page-navigation-collapsible-structure">
        <Components.Snippet path="sidemenu/page-navigation/collapsible/structure.html" as="code" language="html"/>
        
      </div>
      <div id="page-navigation-collapsible-implementation">
        <ol>
          <li>Voeg de class `sidemenu` toe aan de `body`.</li>
          <li>Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.</li>
          <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
            is. Bijvoorbeeld: `div` 'article' of 'section'. Eventueel met de class page-content.</li>
        </ol>
      </div>
      <div id="page-navigation-collapsible-imports">
        SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```
      JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```
      </div>
    </manon-tabs>
  </div>
  <div id="page-navigation-expandable">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu/page-navigation/expandable"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <h4>Instructiesdetails</h4>
    <manon-tabs>
      <ul>
        <li><a href="#page-navigation-expandable-html">HTML</a></li>
        <li><a href="#page-navigation-expandable-structure">Structuur</a></li>
        <li><a href="#page-navigation-expandable-implementation">Instructies</a></li>
        <li><a href="#page-navigation-expandable-imports">Imports</a></li>
      </ul>
      <div id="page-navigation-expandable-html">
        <Components.Snippet path="sidemenu/page-navigation/expandable/code-example.html" as="code" language="html"/>
      </div>
      <div id="page-navigation-expandable-structure">
        <Components.Snippet path="sidemenu/page-navigation/expandable/structure.html" as="code" language="html"/>
        
      </div>
      <div id="page-navigation-expandable-implementation">
        <ol>
          <li>Voeg de class `sidemenu-closed` toe aan de body.</li>
          <li>Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.</li>
          <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
            is. Bijvoorbeeld: `div` 'article' of 'section'. Eventueel met de class page-content.</li>
        </ol>
      </div>
      <div id="page-navigation-expandable-imports">
        SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```
      JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```
      </div>
    </manon-tabs>
  </div>
  <div id="page-navigation-static">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu/page-navigation/static"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <h4>Instructiesdetails</h4>
    <manon-tabs>
      <ul>
        <li><a href="#page-navigation-static-html">HTML</a></li>
        <li><a href="#page-navigation-static-structure">Structuur</a></li>
        <li><a href="#page-navigation-static-implementation">Instructies</a></li>
        <li><a href="#page-navigation-static-imports">Imports</a></li>
      </ul>
      <div id="page-navigation-static-html">
        <Components.Snippet path="sidemenu/page-navigation/static/code-example.html" as="code" language="html"/>
      </div>
      <div id="page-navigation-static-structure">
        <Components.Snippet path="sidemenu/page-navigation/static/structure.html" as="code" language="html"/>
        
      </div>
      <div id="page-navigation-static-implementation">
        <ol>
          <li>Voeg de class `sidemenu` toe aan de `body`.</li>
          <li>Voeg direct binnen de `body` een `nav` toe met de gewenste inhoud.</li>
          <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
            is. Bijvoorbeeld: `div` 'article' of 'section'. Eventueel met de class page-content.</li>
        </ol>
      </div>
      <div id="page-navigation-static-imports">
        SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```
      </div>
    </manon-tabs>
  </div>
</manon-tabs>

### Content navigatie

<manon-tabs>
  <ul>
    <li><a href="#content-navigation-collapsible">Inklapbaar</a></li>
    <li><a href="#content-navigation-expandable">Openklapbaar</a></li>
    <li><a href="#content-navigation-static">Statisch</a></li>
  </ul>

  <div id="content-navigation-collapsible">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu/content-navigation/collapsible"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <h4>Implementatiedetails</h4>
    <manon-tabs>
      <ul>
        <li><a href="#content-navigation-collapsible-html">HTML</a></li>
        <li><a href="#content-navigation-collapsible-structure">Structuur</a></li>
        <li><a href="#content-navigation-collapsible-implementation">Instructies</a></li>
        <li><a href="#content-navigation-collapsible-imports">Imports</a></li>
      </ul>
      <div id="content-navigation-collapsible-html">
        <Components.Snippet path="sidemenu/content-navigation/collapsible/code-example.html" as="code" language="html"/>
      </div>
      <div id="content-navigation-collapsible-structure">
        <Components.Snippet path="sidemenu/content-navigation/collapsible/structure.html" as="code" language="html"/>
        
      </div>
      <div id="content-navigation-collapsible-implementation">
        <ol>
          <li>Voeg de class `sidemenu` toe aan de `main`.</li>
          <li>Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.</li>
          <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
            is. Bijvoorbeeld: `div` 'article' of 'section'. Eventueel met de class page-content.</li>
        </ol>
      </div>
      <div id="content-navigation-collapsible-imports">
        SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```
      JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```
      </div>
    </manon-tabs>
  </div>
  <div id="content-navigation-expandable">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu/content-navigation/expandable"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <h4>Instructiesdetails</h4>
    <manon-tabs>
      <ul>
        <li><a href="#content-navigation-expandable-html">HTML</a></li>
        <li><a href="#content-navigation-expandable-structure">Structuur</a></li>
        <li><a href="#content-navigation-expandable-implementation">Instructies</a></li>
        <li><a href="#content-navigation-expandable-imports">Imports</a></li>
      </ul>
      <div id="content-navigation-expandable-html">
        <Components.Snippet path="sidemenu/content-navigation/expandable/code-example.html" as="code" language="html"/>
      </div>
      <div id="content-navigation-expandable-structure">
        <Components.Snippet path="sidemenu/content-navigation/expandable/structure.html" as="code" language="html"/>
        
      </div>
      <div id="content-navigation-expandable-implementation">
        <ol>
          <li>Voeg de class `sidemenu-closed` toe aan de main.</li>
          <li>Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.</li>
          <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
            is. Bijvoorbeeld: `div` 'article' of 'section'. Eventueel met de class page-content.</li>
        </ol>
      </div>
      <div id="content-navigation-expandable-imports">
        SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```
      JavaScript importeren:

```javascript
import "@minvws/manon/js/sidemenu.js";
```
      </div>
    </manon-tabs>
  </div>
  <div id="content-navigation-static">
    <div class="resize">
      <iframe
        src="/snippets/sidemenu/content-navigation/static"
        title="Voorbeeld"
        height="320px"
      ></iframe>
    </div>
    <h4>Instructiesdetails</h4>
    <manon-tabs>
      <ul>
        <li><a href="#content-navigation-static-html">HTML</a></li>
        <li><a href="#content-navigation-static-structure">Structuur</a></li>
        <li><a href="#content-navigation-static-implementation">Instructies</a></li>
        <li><a href="#content-navigation-static-imports">Imports</a></li>
      </ul>
      <div id="content-navigation-static-html">
        <Components.Snippet path="sidemenu/content-navigation/static/code-example.html" as="code" language="html"/>
      </div>
      <div id="content-navigation-static-structure">
        <Components.Snippet path="sidemenu/content-navigation/static/structure.html" as="code" language="html"/>
        
      </div>
      <div id="content-navigation-static-implementation">
        <ol>
          <li>Voeg de class `sidemenu` toe aan de `main`.</li>
          <li>Voeg direct binnen de `main` een `nav` toe met de gewenste inhoud.</li>
          <li>Groepeer de overige content in een enkel element indien dat nog niet gebeurd
            is. Bijvoorbeeld: `div` 'article' of 'section'. Eventueel met de class page-content.</li>
        </ol>
      </div>
      <div id="content-navigation-static-imports">
        SCSS importeren:

```scss
@use "@minvws/manon/components/sidemenu";
```
      </div>
    </manon-tabs>
  </div>
</manon-tabs>


## Kies de juiste HTML-Structuur

<div class="horizontal-scroll">
  <table>
    <caption>
      Basisvoorbeeld tabel:
    </caption>
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Pagina-specifiek</th>
        <th scope="col">Structuur</th>
        <th scope="col">Gebruik</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>De inhoud van de navigatie is hoofdnavigatie.</td>
        <td>Nee, de inhoud van de navigatie wordt op andere pagina's herhaald.</td>
        <td>Plaats het zijmenu buiten de main aangezien het geen content is.</td>
        <td>page navigation</td>
      </tr>
      <tr>
        <td>De inhoud van de navigatie gaat over de inhoud van de pagina.</td>
        <td>Ja, de inhoud van de navigatie is specifiek voor de content op deze pagina. "Table of content" bijvoorbeeld.</td>
        <td>Plaats het zijmenu binnen de main bij de content van de pagina.</td>
        <td>content navigation</td>
      </tr>
    </tbody>
  </table>
</div>

## Toegankelijkheid

### Skip to content link binnen zijnavigatie

<p>Bij een lange table of content kan een <a href="/library/components/skip-to-content">skip to content link</a> toegevoegd worden. Dit geeft oetsenbordgebruikers de mogelijkheid om de inhoud van de table of contents over te slaan. Dit voegt wel een extra tabstop toe dus het is raadzaam om het enkel bij lange table of contents te gebruiken. Screenreader gebruikers maken over het algemeen gebruik van landmarks om te navigeren. Waardoor een losse skip to content link geen tot weinig toegevoegde waarde heeft.</p>

Als er in de header een skip to content link staat. Laat deze in dat geval naar de start van de main verwijzen. Indien er een table of content aanwezig is, zal het zijmenu het eerste component binnen de main zijn.
