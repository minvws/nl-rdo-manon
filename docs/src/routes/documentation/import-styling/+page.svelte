<script module>
  export const breadcrumb = "Componenten gebruiken en styling toevoegen";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Componenten gebruiken en styling toevoegen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <div>
      <h1>Componenten gebruiken en styling toevoegen</h1>
      <p>
        Overzicht van de stappen om styling te importeren en componenten te gebruiken binnen een
        project.
      </p>

      <ol>
        <li>
          Voeg binnen het bestand <code>manon.scss</code> een referentie toe naar het gewenste component
          of stylebestand.
        </li>
        <li>Voeg indien gewenst ook een referentie toe naar het ingevulde variabelen bestand.</li>
      </ol>

      <p>Aandachtspunten:</p>
      <ul>
        <li>Als er een basis-component aanwezig is dient deze altijd ingeladen te worden.</li>
        <li>
          Het basisbestand dient altijd ingeladen te worden voordat de uitzonderingen of
          alternatieve weergaven ingeladen worden.
        </li>
      </ul>

      <h2 id="examples">Voorbeelden</h2>

      <p>
        Importeer in de <code>.sass</code> of <code>.scss</code> van je project de gewenste componenten:
      </p>
      <Code
        language="scss"
        code={`
@use "@minvws/manon/layout/layout-base";
`}
      />

      <p>
        <strong>Let op:</strong> Indien er een basisbestand beschikbaar is dient deze altijd ingeladen
        te worden voordat de uitzonderingen en speciale weergaven geimporteerd worden.
      </p>

      <Code
        language="css"
        code={`
@use "@minvws/manon/layout/layout-base";
@use "@minvws/manon/layout/layout-column-2";
`}
      />
    </div>
  </section>

  <section>
    <div>
      <h2>Eigen component toevoegen aan een project</h2>
      <p>
        Het is ook mogelijk om eigen componenten te schrijven en toe te voegen aan het project. Voeg
        in dat geval een referentie naar het benodigde css- of scss-bestand toe aan het
        <code>manon.scss</code>-bestand. Het is ook mogelijk om meerdere "stylesheets" in te laden
        via de <code>head</code>.
      </p>
    </div>
  </section>

  <section id="styling-override-variables">
    <div>
      <h2>De styling van een component aanpassen</h2>
      <p>Aanpassen van het component via beschikbare variabelen:</p>
      <ol>
        <li>
          Voeg een kopie van het variabelenbestand van het component toe aan het project en vol deze
          in met de gewenste stijlkeuzes om de styling van een component te overschrijven via de
          beschikbare variabelen.
        </li>
        <li>
          Vul het gekopieerde variabelenbestand in met de gewenste stijlkeuzes om de styling van een
          component te overschrijven via de beschikbare variabelen. Voor informatie over het
          aanpassen en overschrijven van variabelen zie
          <a href="{base}/documentation/variables">variabelen</a>
        </li>
        <li>
          Voeg de referentie naar het nieuwe bestand toe aan het
          <code>manon.scss</code>-bestand.
        </li>
      </ol>
    </div>
  </section>

  <section id="styling-override">
    <div>
      <h2>De styling van een component overschrijven</h2>
      <ul>
        <li>Voeg de css met de gewenste overschrijvingen toe aan het project.</li>
      </ul>
    </div>
  </section>
</main>
