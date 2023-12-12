<script context="module">
  export const breadcrumb = "Basis-layout instellen";
</script>

<svelte:head>
  <title>Basis-layout instellen</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section id="introduction">
        <h1>Basis-layout instellen</h1>
        <p>
          Binnen het bestand <code>layout-base-variables.scss</code> kunnen algemene stijlkeuzes
          ingevuld worden die door alle hoofdelementen gebruikt worden zodra dit variabelen-bestand
          aanwezig is. Ieder hoofdelement heeft een eigen basisbestand waarbinnen unieke waardes
          ingevuld kunnen worden voor het specifieke element. Voor meer informatie zie
          <a href="./layout-base-options">Basisweergave kiezen en instellen</a>.
        </p>
      </section>

      <section id="requirements">
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="../import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h2>Benodigd</h2>
        <ul>
          <li><code>layout-base-variables.scss</code></li>
        </ul>

        <h2>Optioneel</h2>
        <p>
          Voor het volledige overzicht van bestanden die op basis van dit variabelen-bestand werken
          zie:
          <a href="layouts#layout-base">Basisweergaven</a>.
        </p>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li>
            Algemene weergave:
            <ul>
              <li>
                <a href="../variables#padding-top">padding-top</a>
              </li>
              <li>
                <a href="../variables#padding-right">padding-right</a>
              </li>
              <li>
                <a href="../variables#padding-bottom">padding-bottom</a>
              </li>
              <li>
                <a href="../variables#padding-left">padding-left</a>
              </li>
              <li><a href="../variables#max-width">max-width</a></li>
              <li>
                Op titels en subtitels:
                <ul>
                  <li>
                    <a href="../variables#margin">margin</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Witruimte tussen elementen:
            <ul>
              <li>
                Content-blok:
                <ul>
                  <li><a href="../variables#gap">gap</a></li>
                </ul>
              </li>
              <li>
                Binnen dieper gelegen blok-elementen:
                <ul>
                  <li><a href="../variables#gap">gap</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  </article>
</main>
