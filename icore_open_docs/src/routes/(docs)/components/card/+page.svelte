<script context="module">
  export const breadcrumb = "Kaart";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kaart</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Kaart</h1>
        <p>Groepeer bij elkaar horende elementen visueel in een kaart.</p>
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
            Voeg de class <code>card</code> toe aan de gewenste elementen. Voor meer informatie zie:
            <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="card" role="group" aria-label="Voorbeeldkaart">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor set</li>
          </ul>
          <button>Lorem ipsum</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="card" role="group" aria-label="Voorbeeldkaart">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ul>
        <li>Lorem ipsum</li>
        <li>Dolor set</li>
    </ul>
    <button>Lorem ipsum</button>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
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

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/card";
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
                <td>--card-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>var(--application-base-gap-medium)</td>
                <th rowspan="13" scope="rowgroup">-</th>
                <th rowspan="25" scope="rowgroup">card</th>
              </tr>

              <tr>
                <td>--card-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>2rem</td>
              </tr>

              <tr>
                <td>--card-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>1rem</td>
              </tr>

              <tr>
                <td>--card-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>2rem</td>
              </tr>

              <tr>
                <td>--card-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>1rem</td>
              </tr>

              <tr>
                <td>--card-background-color</td>
                <td><code>--card-background-color</code></td>
                <td>var(--application-base-background-color)</td>
              </tr>

              <tr>
                <td>--card-text-color</td>
                <td><code>--card-text-color</code></td>
                <td>var(--application-base-text-color)</td>
              </tr>

              <tr>
                <td>--card-border-radius</td>
                <td><a href="{base}/documentation/variables#border-radius">border-radius</a></td>
                <td>var(--application-base-border-radius)</td>
              </tr>

              <tr>
                <td>--card-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>100%</td>
              </tr>

              <tr>
                <td>--card-box-shadow</td>
                <td><a href="{base}/documentation/variables#box-shadow">box-shadow</a></td>
                <td>0</td>
              </tr>

              <tr>
                <td>--card-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>1px</td>
              </tr>

              <tr>
                <td>--card-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>solid</td>
              </tr>

              <tr>
                <td>--card-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--grey-2)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-1-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>var(--card-gap)</td>
                <th rowspan="6" scope="rowgroup">24rem</th>
              </tr>

              <tr>
                <td>--card-breakpoint-1-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>var(--card-padding-top)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-1-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--card-padding-right)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-1-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--card-padding-bottom)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-1-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--card-max-width)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-1-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>var(--card-border-radius)/td&gt; </td></tr
              >

              <tr>
                <td>--card-breakpoint-2-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td> var(--card-breakpoint-1-gap)</td>
                <th rowspan="6" scope="rowgroup">42rem</th>
              </tr>

              <tr>
                <td>--card-breakpoint-2-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>var(--card-breakpoint-1-padding-top)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-2-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--card-breakpoint-1-padding-right)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-2-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>var(--card-breakpoint-1-padding-bottom)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-2-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--card-breakpoint-1-padding-left)</td>
              </tr>

              <tr>
                <td>--card-breakpoint-2-max-width</td>
                <td><a href="{base}/documentation/variables#max-width">max-width</a></td>
                <td>var(--card-breakpoint-1-max-width)</td>
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
    --card-gap: ;
    --card-padding-top: ;
    --card-padding-right: ;
    --card-padding-bottom: ;
    --card-padding-left: ;
    --card-background-color: ;
    --card-text-color: ;
    --card-border-radius: ;
    --card-max-width: ;
    --card-box-shad;
    --card-border-width:;
    --card-border-style: ;
    --card-border-color: ;

    /* After breakpoint 1 */
    --card-breakpoint-1-gap: ;
    --card-breakpoint-1-padding-top: ;
    --card-breakpoint-1-padding-right: ;
    --card-breakpoint-1-padding-bottom: ;
    --card-breakpoint-1-padding-left: ;
    --card-breakpoint-1-max-width: ;
    --card-breakpoint-1-border-radius: ;

    /* After breakpoint 2 */
    --card-breakpoint-2-gap: ;
    --card-breakpoint-2-padding-top: ;
    --card-breakpoint-2-padding-right: ;
    --card-breakpoint-2-padding-bottom: ;
    --card-breakpoint-2-padding-left: ;
    --card-breakpoint-2-max-width: ;
    --card-breakpoint-2-border-radius: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
