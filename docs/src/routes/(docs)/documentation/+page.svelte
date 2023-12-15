<script context="module">
  export const breadcrumb = "Documentatie";
</script>

<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Documentatie</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction" class="branding-color-accent-5">
    <div>
      <h1>Documentatie</h1>
      <p>
        Gebruik de gewenste componenten. Voeg de bijbehorende CSS bestanden en html toe aan het
        project. Veel componenten zijn instelbaar qua vormgeving zodat ze aan kunnen sluiten bij de
        huisstijl.
      </p>
    </div>
  </section>

  <section>
    <div>
      <h1>Overzicht</h1>

      <nav aria-label="Zijbalknavigatie" id="table-of-contents">
        <ul>
          <li>
            <a href="#manon-quick-start">Manon gebruiken binnen een project</a>
          </li>
          <li><a href="{base}/add-fonts">Lettertype toevoegen</a></li>
          <li><a href="{base}/add-js">JavaScript toevoegen</a></li>
          <li><a href="{base}/variables">Variabelen</a></li>
          <li>
            <a href="{base}/import-styling">Componenten gebruiken en styling toevoegen</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>

  <section id="manon-quick-start">
    <div>
      <h2>Manon gebruiken binnen een project.</h2>
      <p class="warning" role="group" aria-label="let op">
        <span>Let op:</span> Aan deze instructies wordt nog gewerkt.
      </p>
      <h2>Manon installeren (lokaal docs bekijken)</h2>
      <p>
        Manon maakt gebruik van <a href="https://git-scm.com/" rel="external">git</a> en de package
        manager <a href="https://pnpm.io" rel="external">pnpm</a>.
      </p>
      <ol>
        <li>
          Download Manon: <code>git clone https://github.com/minvws/nl-rdo-manon.git</code>
        </li>
        <li>
          Open de folder waar Manon is geïnstalleerd, bijvoorbeeld: <code>cd nl-rdo-manon</code>
        </li>
        <li>
          Installeer de dependencies: <code>pnpm install</code>
        </li>
        <li>
          Open de Manon documentatie-folder: <code>cd docs</code>
        </li>
        <li>
          Bouw en open de documentatie:
          <ul>
            <li>
              Wil je interactief aan Manon en/of de documentatie werken?
              <ul>
                <li>Start een development-server: <code>pnpm run dev</code></li>
                <li>
                  Open de genoemde URL, meestal is dat <a
                    href="http://localhost:5173"
                    rel="external">http://localhost:5173</a
                  >
                </li>
              </ul>
            </li>
            <li>
              Wil je een productie-versie van de documentatie bouwen?
              <ul>
                <li>Draai een build: <code>pnpm run build</code></li>
                <li>Het resultaat is te vinden in de folder <code>docs/build</code></li>
                <li>
                  Gebruik <code>pnpm preview</code> om de gebouwde documentatie lokaal in te zien
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</main>
