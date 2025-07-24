<script module>
  export const breadcrumb = "Paragraaf";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Paragraaf</title>
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
  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Paragraaf</h1>

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
        </ol>

        <p>
          Voor leesbaarheid en toegankelijkheid wordt aangeraden om de maximale regellengte te
          beperken tot 80 karakters. Voor meer informatie zie:
          <a href="{base}/components/max-line-length">maximale regellengte</a> en
          <a href="https://www.w3.org/TR/WCAG21/#visual-presentation" rel="external"
            >w3.org - Success Criterion 1.4.8 Visual Presentation</a
          >.
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Visueel voorbeeld:</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero dictum, ultrices
          orci vel, varius ipsum. Aliquam in lorem lectus. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Praesent id accumsan quam. Cras erat diam,
          vestibulum vel congue id, vehicula in purus. Quisque sodales neque augue, at pulvinar
          ligula sodales vestibulum. Nam id tristique nibh, eget porta mauris. Curabitur vitae
          pulvinar quam. Mauris id risus vel diam venenatis pulvinar. Maecenas ultricies id velit
          sed rhoncus. Aliquam erat volutpat. Phasellus et posuere purus. Morbi a viverra risus.
        </p>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec libero dictum, ultrices orci vel, varius ipsum. Aliquam in lorem lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent id accumsan quam. Cras erat diam, vestibulum vel congue id, vehicula in purus. Quisque sodales neque augue, at pulvinar ligula sodales vestibulum. Nam id tristique nibh, eget porta mauris. Curabitur vitae pulvinar quam. Mauris id risus vel diam venenatis pulvinar. Maecenas ultricies id velit sed rhoncus. Aliquam erat volutpat. Phasellus et posuere purus. Morbi a viverra risus.</p>
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

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/p";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>

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
                <td>--p-line-height</td>
                <td><a href="{base}/documentation/variables#line-height">line-height</a></td>
                <td>var($base-line-height)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--p-font-size</td>
                <td><a href="{base}/documentation/variables#font-size">font-size</a></td>
                <td>var($base-font-size)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--p-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var($base-font-weight)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--p-text-color</td>
                <td><a href="{base}/documentation/variables#text-color">text-color</a></td>
                <td>var($base-text-color)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--p-background-color</td>
                <td
                  ><a href="{base}/documentation/variables#background-color">background-color</a
                  ></td
                >
                <td>unset</td>
                <td>-</td>
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
  --p-line-height: ;
  --p-font-size: ;
  --p-font-weight: ;
  --p-text-color: ;
  --p-background-color: ;
}
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/paragraph-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
