<script module>
  export const breadcrumb = "Layout fifty-fifty";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Layout fifty-fifty</title>
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
        <h1>Layout fifty-fifty</h1>
        <p>Verdeling 50% - 50% vanaf het ingestelde breekpunt.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project.
            <ul>
              <li>
                Voor een overzicht van de benodigde en optionele bestanden zie: <a
                  href="#requirements">Bijbehorende bestanden</a
                >.
              </li>
              <li>
                Voeg de class <code>fifty-fifty</code> toe op het gewenste element. Voor meer
                informatie over het implementeren zie de <a href="#examples">voorbeelden</a>.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <div class="fifty-fifty">
          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>

          <div>
            <h2>Lorem ipsum dolor set</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue ac enim
              luctus, vitae iaculis magna vestibulum. Aenean est mauris, condimentum et molestie
              sed, tempus in massa.
            </p>
          </div>
        </div>

        <h2>HTML-voorbeeld:</h2>

        <h4><code>div</code>:</h4>
        <Code
          language="html"
          code={`
<div class="fifty-fifty">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</div>
`}
        />

        <h4><code>section</code>:</h4>
        <Code
          language="html"
          code={`
<section class="fifty-fifty">
  <div>
    <!-- Content -->
  </div>

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
<article class="fifty-fifty">
  <div>
    <!-- Content -->
  </div>

  <div>
    <!-- Content -->
  </div>
</article>
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

        <h3>Importeer component via npm</h3>

        <p>
          Het is mogelijk om gebruik te maken van de layout-set. Door hier gebruik van te maken
          blijft de breedte tussen de blokken gelijk aan de daar gedefinieerde breedte.
        </p>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
/* Layout set */
@use "@minvws/manon/layout-set"; /* Optional */

/* Headings */
@use "@minvws/manon/fifty-fifty";
`}
        />

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
                  <td>--layout-fifty-fifty-gap</td>
                  <td><a href="{base}/documentation/variables#gap">gap</a></td>
                  <td>var(--content-gap, 2rem)</td>
                  <td>42rem</td>
                  <td>-</td>
                </tr>

                <tr>
                  <td>--layout-fifty-fifty-breakpoint-gap</td>
                  <td><a href="{base}/documentation/variables#gap">gap</a></td>
                  <td>var(--layout-fifty-fifty-gap)</td>
                  <td>42rem</td>
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

          <p>
            Om stijlkeuzes door te voeren op alle titels gebruik de onderstaande variabelen. Hierbij
            kan ook verwezen worden naar stijlkeuzes in heading-sets als deze toegevoegd zijn aan
            het project. Voor een voorbeeld zie: <a href="heading-base-set">heading-base-set</a>.
          </p>
          <Code
            language="css"
            code={`
:root {
  --layout-fifty-fifty-gap: ;
  --layout-fifty-fifty-breakpoint-gap: ;
}
`}
          />
        </section>

        <section id="related">
          <h2>Gerelateerde pagina's</h2>
          <a href="{base}/utility/fifty-fifty-test">Test- en voorbeelden-pagina</a>
        </section>
      </section>
    </div>
  </article>
</main>
