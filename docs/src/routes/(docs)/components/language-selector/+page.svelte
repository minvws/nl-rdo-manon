<script context="module">
  export const breadcrumb = "Taalselectie";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Taalselectie</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#related">Gerelateerde pagina's</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Taalselectie</h1>
        <p>Een taalselectie element biedt een verticale keuzelijst die openklapt.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="language-selector">
          <p id="language-selector-description">Kies een taal:</p>
          <div
            class="language-selector-options"
            aria-describedby="language-selector-description"
            aria-expanded="false"
          >
            <button aria-haspopup="listbox" aria-current="true"> Papiamentu </button>
            <ul role="listbox">
              <li>
                <a hreflang="nl" href="#" role="option" data-value="Nederlands" lang="nl"
                  >Nederlands</a
                >
              </li>
              <li>
                <a hreflang="en" href="#" role="option" data-value="English" lang="en">English</a>
              </li>
              <li>
                <a hreflang="fy" href="#" role="option" data-value="Frysk" lang="fy">Frysk</a>
              </li>
              <li aria-current="true">
                <a hreflang="pap-CW" href="#" role="option" data-value="Papiamentu" lang="pap-CW"
                  >Papiamentu</a
                >
              </li>
              <li>
                <a hreflang="pap-AW" href="#" role="option" data-value="Papiamento" lang="pap-AW"
                  >Papiamento</a
                >
              </li>
            </ul>
          </div>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="language-selector">
  <p id="language-selector-description">Kies een taal:</p>
  <div class="language-selector-options" aria-describedby="language-selector-description" aria-expanded="false">
    <button aria-haspopup="listbox" aria-current="true">
      Papiamentu
    </button>
    <ul role="listbox">
        <li>
          <a hreflang="nl" href="#" role="option" data-value="Nederlands" lang="nl">Nederlands</a>
        </li>
        <li>
          <a hreflang="en" href="#" role="option" data-value="English" lang="en">English</a>
        </li>
        <li>
          <a hreflang="fy" href="#" role="option" data-value="Frysk" lang="fy">Frysk</a>
        </li>
        <li aria-current="true">
          <a hreflang="pap-CW" href="#" role="option" data-value="Papiamentu" lang="pap-CW">Papiamentu</a>
        </li>
        <li>
          <a hreflang="pap-AW" href="#" role="option" data-value="Papiamento" lang="pap-AW">Papiamento</a>
        </li>
    </ul>
  </div>
</div>
`}
        />

        <h4>Structuurvoorbeeld:</h4>
        <Code
          language="html"
          code={`
<header>
  <nav aria-label="Hoofdnavigatie">

    <!-- Navigatie items -->
    <!-- Taalselectie -->

  </nav>
</header>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/language-selector"
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
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
                <td>--language-selector-list-label-font-size</td>
                <td><a href="{base}/variables#font-size">font-size</a></td>
                <td>var(--de-emphasized-font-size)</td>
                <td>-</td>
                <td rowspan="34" scope="rowgroup">language</td>
              </tr>

              <tr>
                <td>--language-selector-list-label-text-color</td>
                <td><a href="{base}/variables#text-color">text-color</a></td>
                <td>var(--de-emphasized-text-color, inherit)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-font-size</td>
                <td><a href="{base}/variables#font-size">font-size</a></td>
                <td>var(--de-emphasized-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-font-weight</td>
                <td><a href="{base}/variables#font-weight">font-weight</a></td>
                <td>var(--application-base-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-width</td>
                <td><a href="{base}/variables#width">width</a></td>
                <td>100%</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-max-width</td>
                <td><a href="{base}/variables#max-width">max-width</a></td>
                <td>100%</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-border-width</td>
                <td><a href="{base}/variables#border-width">border-width</a></td>
                <td>1px</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-border-style</td>
                <td><a href="{base}/variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-border-color</td>
                <td><a href="{base}/variables#border-color">border-color</a></td>
                <td>var(--grey-2)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-border-radius</td>
                <td><a href="{base}/variables#border-radius">border-radius</a></td>
                <td>0px</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
                <td>var(--application-base-background-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-text-color</td>
                <td><a href="{base}/variables#text-color">text-color</a></td>
                <td>var(--application-base-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-link-border-width</td>
                <td><a href="{base}/variables#border-width">border-width</a></td>
                <td>1px</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-link-border-style</td>
                <td><a href="{base}/variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-link-border-color</td>
                <td><a href="{base}/variables#border-color">border-color</a></td>
                <td>var(--grey-2)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-hover-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
                <td>var(--branding-color-1-background-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-hover-text-color</td>
                <td><a href="{base}/variables#text-color">text-color</a></td>
                <td>var(--branding-color-1-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-hover-font-size</td>
                <td><a href="{base}/variables#font-size">font-size</a></td>
                <td>var(--language-selector-list-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-hover-font-weight</td>
                <td><a href="{base}/variables#font-weight">font-weight</a></td>
                <td>var(--language-selector-list-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-active-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
                <td>var(--branding-color-2-background-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-active-text-color</td>
                <td><a href="{base}/variables#text-color">text-color</a></td>
                <td>var(--branding-color-2-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-active-font-size</td>
                <td><a href="{base}/variables#font-size">font-size</a></td>
                <td>var(--language-selector-list-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-item-active-font-weight</td>
                <td><a href="{base}/variables#font-weight">font-weight</a></td>
                <td>var(--language-selector-list-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-background-color</td>
                <td><a href="{base}/variables#background-color">background-color</a></td>
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-text-color</td>
                <td><a href="{base}/variables#text-color">text-color</a></td>
                <td>var(--de-emphasized-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-font-size</td>
                <td><a href="{base}/variables#font-size">font-size</a></td>
                <td>var(--de-emphasized-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-border-width</td>
                <td><a href="{base}/variables#border-width">border-width</a></td>
                <td>1px</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-border-style</td>
                <td><a href="{base}/variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-border-color</td>
                <td><a href="{base}/variables#border-color">border-color</a></td>
                <td>var(--grey-2)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-padding-top</td>
                <td><a href="{base}/variables#padding-top">padding-top</a></td>
                <td>0.125rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-padding-right</td>
                <td><a href="{base}/variables#padding">padding</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-padding-bottom</td>
                <td><a href="{base}/variables#padding-bottom">padding-bottom</a></td>
                <td>0.125rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-padding-left</td>
                <td><a href="{base}/variables#padding">padding</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--language-selector-list-button-line-height</td>
                <td><a href="{base}/variables#line-height">line-height</a></td>
                <td>1.5rem</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CSS</h3>
        <p>
          Overzicht van de beschikbare variabelen om te kunnen gebruiken binnen de CSS van jouw
          project. Kies en gebruik de benodigde variabelen.
        </p>
        <Code
          language="css"
          code={`
:root {
  /* Label */
  --language-selector-list-label-font-size: ;
  --language-selector-list-label-text-color: ;

  /* List */
  --language-selector-list-font-size: ;
  --language-selector-list-font-weight: ;

  --language-selector-list-width: ;
  --language-selector-list-max-width: ;

  --language-selector-list-border-width: ;
  --language-selector-list-border-style: ;
  --language-selector-list-border-color: ;
  --language-selector-list-border-radius: ;

  /* List item */
  --language-selector-list-item-background-color: ;
  --language-selector-list-item-text-color: ;

  /* List item link */
  --language-selector-list-item-link-border-width: ;
  --language-selector-list-item-link-border-style: ;
  --language-selector-list-item-link-border-color: ;

  /* List item hover */
  --language-selector-list-item-hover-background-color: ;
  --language-selector-list-item-hover-text-color: ;
  --language-selector-list-item-hover-font-size: ;
  --language-selector-list-item-hover-font-weight: ;

  /* List item active */
  --language-selector-list-item-active-background-color: ;
  --language-selector-list-item-active-text-color: ;
  --language-selector-list-item-active-font-size: ;
  --language-selector-list-item-active-font-weight: ;

  /* Dropdown button */
  --language-selector-list-button-background-color: ;
  --language-selector-list-button-text-color: ;
  --language-selector-list-button-font-size: ;

  --language-selector-list-button-border-width: ;
  --language-selector-list-button-border-style: ;
  --language-selector-list-button-border-color: ;

  --language-selector-list-button-padding-top: ;
  --language-selector-list-button-padding-right: ;
  --language-selector-list-button-padding-bottom: ;
  --language-selector-list-button-padding-left: ;

  --language-selector-list-button-line-height: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/language-selector-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
