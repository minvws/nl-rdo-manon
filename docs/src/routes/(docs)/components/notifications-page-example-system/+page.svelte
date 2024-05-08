<script context="module">
  export const breadcrumb = "Pagina-notificatie systeembericht voorbeeld";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Pagina-notificatie systeembericht voorbeeld</title>
</svelte:head>

<main>
  <section class="system" role="group" aria-label="systeembericht">
    <div>
      <span>Systeembericht:</span>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </section>

  <article>
    <div>
      <section id="introduction">
        <h1>Pagina-notificatie systeembericht voorbeeld</h1>
        <p>Voor het weergeven van notificaties op paginaniveau.</p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <p>Voor het voorbeeld zie bovenaan deze pagina.</p>

        <h3>HTML-voorbeeld:</h3>
        <h4><code>section</code></h4>
        <Code
          language="html"
          code={`
<p class="system" role="group" aria-label="systeembericht"><span>Systeembericht:</span> Lorem ipsum dolor sit.</p>
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
@use "@minvws/manon/notification";
@use "@minvws/manon/notification-system-message";
@use "@minvws/manon/notification-system-page";
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
                <td>--notification-system-page-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--system-background-color)</td>
                <td>-</td>
                <th rowspan="24" scope="rowgroup">system</th>
              </tr>

              <tr>
                <td>--notification-system-page-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>var(--system-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>var(--notification-border-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>var(--notification-border-style)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>var(--system-border-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--page-whitespace-right)</td>
                <td>-</td>
              </tr>

              <tr>
                <td> --notification-system-page-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--page-whitespace-left)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-span-font-weight</td>
                <td><a href="{base}/documentation/variables#span-font-weight">span-font-weight</a></td>
                <td>var(--notification-span-font-weight)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-pagecontent-wrapper-padding-top</td>
                <td><a href="{base}/documentation/variables#padding-top">padding-top</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-pagecontent-wrapper-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--content-padding-right)</td>
                <td>-</td>
              </tr>

              <tr>
                <td> --notification-system-pagecontent-wrapper-padding-bottom</td>
                <td><a href="{base}/documentation/variables#padding-bottom">padding-bottom</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-pagecontent-wrapper-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--content-padding-left)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-pagecontent-wrapper-gap</td>
                <td><a href="{base}/documentation/variables#gap">gap</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-pagecontent-wrapper-span-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>0.5rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon-font-family</td>
                <td><a href="{base}/documentation/variables#font-family">font-family</a></td>
                <td>var(--notification-icon-font-family)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var(--notification-icon-font-size)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">color</a></td>
                <td>var(--notification-icon-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon-padding-right</td>
                <td><a href="{base}/documentation/variables#padding-right">padding-right</a></td>
                <td>var(--notification-icon-padding-right)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon-padding-left</td>
                <td><a href="{base}/documentation/variables#padding-left">padding-left</a></td>
                <td>var(--notification-icon-padding-left)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon-margin-right</td>
                <td><a href="{base}/documentation/variables#margin-right">margin-right</a></td>
                <td>var(--notification-icon-margin-right)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--notification-system-page-icon</td>
                <td><a href="{base}/documentation/variables#content">content</a></td>
                <td>var(--notification-icon)</td>
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
`}
        />
      </section>
    </div>
  </article>
</main>
