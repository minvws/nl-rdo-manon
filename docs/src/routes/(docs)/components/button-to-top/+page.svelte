<script context="module">
  export const breadcrumb = "Terug naar hoofdmenu knop";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Terug naar hoofdmenu knop</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Terug naar hoofdmenu knop</h1>

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
          <li>Voeg de knop aan het einde van de <code>&lt;main&gt;</code> toe.</li>
          <li>
            Voeg de link naar de hoofdnavigatie toe.
            <ul>
              <li>Voeg aan de hoofdnavigatie een id toe. Bijvoorbeeld: "main-content".</li>
              <li>
                Voeg binnen de link de corresponderende verwijzing toe. Zie het HTML-voorbeeld voor
                meer informatie.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Visueel voorbeeld:</h3>
        <p>Zie de knop rechtsonder in beeld voor het visuele voorbeeld.</p>

        <h3>HTML-voorbeeld:</h3>
        <h4>To-top link</h4>
        <Code
          language="html"
          code={`
<a href="#main-content" class="button to-top icon icon-ascending" title="Terug naar het hoofdmenu">Terug naar het hoofdmenu</a>
`}
        />

        <h4>Structuur</h4>
        <Code
          language="html"
          code={`
<main id="main-content">
  <!-- content within the main component -->
  <a href="#main-content" class="button to-top icon icon-ascending" title="Terug naar het hoofdmenu">Terug naar het hoofdmenu</a>
</main>
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
@use "@minvws/manon/button-to-top";
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
                <td>--button-to-top-position</td>
                <td><a href="{base}/documentation/variables#position">position</a></td>
                <td>fixed</td>
                <td>-</td>
                <th rowspan="4" scope="rowgroup">to-top</th>
              </tr>

              <tr>
                <td>--button-to-top-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--application-base-accent-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-text-color</td>
                <td><a href="{base}/documentation/variables#color">color</a></td>
                <td>var(--application-base-accent-color-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-bottom</td>
                <td><a href="{base}/documentation/variables#bottom">bottom</a></td>
                <td>1rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-right</td>
                <td><a href="{base}/documentation/variables#right">right</a></td>
                <td>1rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-left</td>
                <td><a href="{base}/documentation/variables#left">left</a></td>
                <td>auto</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-width</td>
                <td><a href="{base}/documentation/variables#width">width</a></td>
                <td>2.75rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-height</td>
                <td><a href="{base}/documentation/variables#height">height</a></td>
                <td>2.75rem</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-min-height</td>
                <td><a href="{base}/documentation/variables#min-height">min-height</a></td>
                <td>var(--button-to-top-width)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-min-width</td>
                <td><a href="{base}/documentation/variables#min-width">min-width</a></td>
                <td>var(--button-to-top-height)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-border-radius</td>
                <td><a href="{base}/documentation/variables#border-radius">border-radius</a></td>
                <td>50%</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-border-width</td>
                <td><a href="{base}/documentation/variables#border-width">border-width</a></td>
                <td>0</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-border-style</td>
                <td><a href="{base}/documentation/variables#border-style">border-style</a></td>
                <td>solid</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">border-color</a></td>
                <td>transparent</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-hover-background-color</td>
                <td><a href="{base}/documentation/variables#background-color">background-color</a></td>
                <td>var(--application-base-accent-color-hover)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-hover-text-color</td>
                <td><a href="{base}/documentation/variables#color">text-color</a></td>
                <td>var(--application-base-accent-color-hover-text-color)</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--button-to-top-hover-border-color</td>
                <td><a href="{base}/documentation/variables#border-color">text-border-color</a></td>
                <td>transparent</td>
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
  --button-to-top-position: ;
  --button-to-top-background-color: ;
  --button-to-top-text-color: ;
  --button-to-top-bottom: ;
  --button-to-top-right: ;
  --button-to-top-left: ;
  --button-to-top-font-size: ;
  --button-to-top-width: ;
  --button-to-top-height: ;
  --button-to-top-min-width: ;
  --button-to-top-min-height: ;
  --button-to-top-border-radius: ;
  --button-to-top-border-width: ;
  --button-to-top-border-style: ;
  --button-to-top-border-color: ;

  /* Hover */
  --button-to-top-hover-background-color: ;
  --button-to-top-hover-text-color: ;
  --button-to-top-hover-border-color: ;
}
`}
        />
      </section>
    </div>
  </article>
  <a href="#main-content" class="button to-top icon icon-ascending" title="Terug naar het hoofdmenu"
    >Terug naar het hoofdmenu</a
  >
</main>
