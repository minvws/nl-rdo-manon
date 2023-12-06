<script context="module">
  export const breadcrumb = "Lettertype toevoegen";
</script>

<script>
  import Code from "$lib/Code.svelte";
</script>

<svelte:head>
  <title>Lettertype toevoegen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <div>
      <h1>Lettertype toevoegen</h1>
      <p>Overzicht van de stappen om een eigen font toe te voegen.</p>

      <ol>
        <li>
          Voeg de gewenste lettertypes toe aan het project. Bijvoorbeeld binnen een
          <code>fonts</code>-map.
        </li>
        <li>
          Kopieer het voorbeeldbestand <code>manon/scss/fonts</code> en plaats het op de gewenste plek
          binnen het project.
        </li>
        <li>
          Vul het voorbeeldbestand in met de gekozen lettertypes. Voeg bij
          <code>src:</code> het pad toe naar de toegevoegde lettertypes binnen het project. Voor
          meer informatie zie: <a href="#examples">Voorbeelden lettertypes toevoegen</a>.
        </li>
      </ol>

      <h2 id="examples">Voorbeelden</h2>

      <h3>Lettertype</h3>
      <Code
        language="css"
        code={`
@font-face {
  font-family: "Naam van het font";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/fontnaam.woff2") format("woff2"),
    url("../fonts/fontnaam.woff") format("woff");
}
`}
      />

      <h3>Lettertype met verschillende varianten</h3>
      <Code
        language="css"
        code={`
/* Naam van het font */
@font-face {
  font-family: "Naam van het font";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/fontnaam.woff2") format("woff2"),
    url("../fonts/fontnaam.woff") format("woff");
}

@font-face {
  font-family: "Naam van het font";
  font-weight: normal;
  font-style: italic;
  src: url("../fonts/fontnaam-italic.woff2") format("woff2"),
    url("../fonts/fontnaam-italic.woff") format("woff");
}
`}
      />

      <h3>Icoonlettertype</h3>
      <Code
        language="css"
        code={`
/* Manon icon font */
@font-face {
  font-family: "Manon icons";
  font-weight: normal;
  font-style: normal;
  src: url("../fonts/manon-icons-0.1.eot");
  src: url("../fonts/manon-icons-0.1.woff") format("woff"),
    url("../fonts/manon-icons-0.1.ttf") format("truetype"),
    url("../fonts/manon-icons-0.1.svg") format("svg");
}
`}
      />
    </div>
  </section>
</main>
