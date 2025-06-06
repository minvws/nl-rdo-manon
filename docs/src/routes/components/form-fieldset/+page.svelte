<script module>
  export const breadcrumb = "Fieldset";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Fieldset</title>
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
        <h1>Fieldset - <code>fieldset</code></h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de benodigde HTML toe. Voor meer informatie zie: <a href="#examples">Voorbeelden</a
            >.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <h4>Basis</h4>
        <form action="" method="post">
          <fieldset>
            <legend>Titel</legend>
            <label for="example-input-base">Voorbeeld invoerveld</label>
            <input id="example-input-base" name="example-input-base" type="text" />
          </fieldset>
          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <fieldset>
    <legend>Titel</legend>
    <label for="example-input-base">Voorbeeld invoerveld</label>
    <input
      id="example-input-base"
      name="example-input-base"
      type="text"
    />
  </fieldset>
  <button type="submit">Verzend</button>
</form>
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
@use "@minvws/manon/fieldset";
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
                <td>--form-fieldset-fields-margin-top</td>
                <td><a href="{base}/documentation/variables#margin-top">margin-top</a></td>
                <td>var(--application-base-gap, 1rem)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--form-fieldset-legend-font-weight</td>
                <td><a href="{base}/documentation/variables#font-weight">font-weight</a></td>
                <td>var(--headings-font-weight, bold)</td>
                <td>-</td>
                <td>-</td>
              </tr>

              <tr>
                <td>--form-fieldset-legend-margin-bottom</td>
                <td><a href="{base}/documentation/variables#margin-bottom">margin-bottom</a></td>
                <td>var(--application-base-gap, 1rem)</td>
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
  /* Fields within the fieldset */
  --form-fieldset-fields-margin-top: ;

  /* Legend */
  --form-fieldset-legend-font-weight: ;
  --form-fieldset-legend-margin-bottom: ;
}
`}
        />
      </section>
    </div>
  </article>
</main>
