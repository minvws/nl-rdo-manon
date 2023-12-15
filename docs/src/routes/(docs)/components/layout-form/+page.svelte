<script context="module">
  export const breadcrumb = "Layout form";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Layout form</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Layout form</h1>
        <p>Weergave opties voor pagina's met als formulieren als hoofdfunctie.</p>
        <p>
          Het is ook mogelijk om de weergave van alle formulieren aan te passen. Gebruik daarvoor: <a
            href="{base}/components/form-base">Basis formulieren</a
          >.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het overzicht
            met <a href="#variables">instelbare variabelen</a>.
          </li>
          <li>
            Voeg de class <code>de-emphasized</code> toe aan de gewenste elementen. Voor meer
            informatie zie: <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Div</h3>
        <div class="layout-form">
          <form class="background-color-offset">
            <div>
              <label for="example-div-name-1">User name</label>
              <input type="text" id="example-div-name-1" />
            </div>
            <div>
              <label for="example-div-password-1">Password</label>
              <input type="password" id="example-div-password-1" />
            </div>
            <button type="submit">Lorem ipsum</button>
          </form>
        </div>

        <h3>HTML-voorbeeld:</h3>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<div class="layout-form">
  <!-- Content -->
</div>
`}
        />

        <h4><code>section</code>:</h4>
        <Code
          language="html"
          code={`
<section class="layout-form">
  <div>
    <!-- Content -->
  </div>
</section>
`}
        />

        <h4><code>article</code>:</h4>
        <Code
          language="html"
          code={`
<article class="layout-form">
  <div>
    <!-- Content -->
  </div>
</article>
`}
        />

        <h4><code>form</code>:</h4>
        <Code
          language="html"
          code={`
<form class="layout-form">
  <!-- Content -->
</form>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via NPM</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/layout-form";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>
          <strong>Let op:</strong> De uitlijning van horizontaal uitgelijnde tags werken alleen in
          combinatie met de class <code>horizotal-view</code>.
        </p>
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
                <td>--layout-form-padding</td>
                <td><a href="{base}/variables#padding">padding</a></td>
                <td>var(--content-padding-top, 0)</td>
                <td rowspan="5" scope="rowgroup">-</td>
                <td rowspan="15" scope="rowgroup">layout-form</td>
              </tr>

              <tr>
                <td>--layout-form-padding-right</td>
                <td><a href="{base}/variables#padding-right">padding-right</a></td>
                <td>var(--content-padding-right, 0)</td>
              </tr>

              <tr>
                <td>--layout-form-padding-bottom</td>
                <td><a href="{base}/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--content-padding-bottom, 0)</td>
              </tr>

              <tr>
                <td>--layout-form-padding-left</td>
                <td><a href="{base}/variables#padding-left">padding-left</a></td>
                <td>var(--content-padding-left, 0)</td>
              </tr>

              <tr>
                <td>--layout-form-max-width</td>
                <td><a href="{base}/variables#max-width">max-width</a></td>
                <td>50rem</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-1-padding</td>
                <td><a href="{base}/variables#padding">padding</a></td>
                <td>var(--layout-form-padding-top)</td>
                <td rowspan="5" scope="rowgroup">24rem</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-1-padding-right</td>
                <td><a href="{base}/variables#padding-right">padding-right</a></td>
                <td>var(--layout-form-padding-right)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-1-padding-bottom</td>
                <td><a href="{base}/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--layout-form-padding-bottom)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-1-padding-left</td>
                <td><a href="{base}/variables#padding-left">padding-left</a></td>
                <td>var(--layout-form-padding-left)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-1-max-width</td>
                <td><a href="{base}/variables#max-width">max-width</a></td>
                <td>var(--layout-form-max-width)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-2-padding-top</td>
                <td><a href="{base}/variables#padding-top">padding-top</a></td>
                <td>var(--layout-form-breakpoint-1-padding-top)</td>
                <td rowspan="5" scope="rowgroup">42rem</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-2-padding-right</td>
                <td><a href="{base}/variables#padding-right">padding-right</a></td>
                <td>var(--layout-form-breakpoint-1-padding-right)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-2-padding-bottom</td>
                <td><a href="{base}/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--layout-form-breakpoint-1-padding-bottom)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-2-padding-left</td>
                <td><a href="{base}/variables#padding-left">padding-left</a></td>
                <td>var(--layout-form-breakpoint-1-padding-left)</td>
              </tr>

              <tr>
                <td>--layout-form-breakpoint-2-max-width</td>
                <td><a href="{base}/variables#max-width">max-width</a></td>
                <td>var(--layout-form-breakpoint-1-max-width)</td>
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
    --layout-form-padding-top: ;
    --layout-form-padding-right: ;
    --layout-form-padding-bottom: ;
    --layout-form-padding-left: ;
    --layout-form-max-width: ;

    /* After breakpoint 1 */
    --layout-form-breakpoint-1-padding-top: ;
    --layout-form-breakpoint-1-padding-right: ;
    --layout-form-breakpoint-1-padding-bottom: ;
    --layout-form-breakpoint-1-padding-left: ;
    --layout-form-breakpoint-1-max-width: ;

    /* After breakpoint 2 */
    --layout-form-breakpoint-2-padding-top: ;
    --layout-form-breakpoint-2-padding-right: ;
    --layout-form-breakpoint-2-padding-bottom: ;
    --layout-form-breakpoint-2-padding-left: ;
    --layout-form-breakpoint-2-max-width: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
