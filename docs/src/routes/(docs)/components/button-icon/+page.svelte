<script context="module">
  export const breadcrumb = "Icoonknoppen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Icoonknoppen</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>

  <article id="button-base" class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Icoonknoppen</h1>
        <p>Subtiele knopweergave.</p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de class <code>icon</code> toe aan de knop om gebruik te maken van de visuele weergave
            van een icoonknop.
          </li>
          <li>
            Voeg de class van het gewenste icoon toe op de knop. Voor meer informatie zie:
            <a href="{base}/components/icons">Iconen</a>.
          </li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Icoonknoppen geven geen tekst weer. Voeg wel altijd de knoptekst toe voor gebruikers die
            gebruik maken van hulptechnologiën.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <h3><code>button</code></h3>
        <h4>Visueel voorbeeld pseudo-element op button</h4>
        <p class="warning" role="group" aria-label="waarschuwing">
          <span>Waarschuwing:</span> Het voorbeeld met een pseudo-element direct op button wordt uitgefaseerd
          omdat het niet de voorkeur heeft omwille van toegankelijkheid. Gebruik in plaats hiervan een
          van de overige voorbeelden.
        </p>
        <button class="icon icon-on-off" aria-label="Aan- of uitschakelen"
          >Aan- of uitschakelen</button
        >
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<button class="icon icon-on-off" aria-label="Aan- of uitschakelen">Aan- of uitschakelen</button>`}
        />

        <h4>Visueel voorbeeld <code>button</code> met <code>span</code></h4>
        <button>
          <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
        </button>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button>
  <span class="icon icon-on-off" aria-hidden="true"></span>Aan- of uitschakelen
</button>
          `}
        />

        <h4>Visueel voorbeeld <code>svg</code> binnen een <code>button</code></h4>
        <p>
          Voorbeeld met een svg-icoon uit de <a href="https://tabler.io/icons" rel="external"
            >tabler iconen set</a
          >.
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-power"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M7 6a7.75 7.75 0 1 0 10 0"
            /><path d="M12 4l0 8" /></svg
          >
          Aan- of uitschakelen
        </button>
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<button>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-power"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
    <path d="M12 4l0 8" />
    </svg>
  Aan- of uitschakelen
</button>
          `}
        />

        <h3>Icoon binnen link<code>a</code> visueel weergegeven als knop</h3>
        <h4>Visueel voorbeeld</h4>
        <a href="./button-icon" class="button"
          ><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a
        >
        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<a href="./button-icon" class="button"><span class="icon icon-user" aria-hidden="true"></span>Inloggen</a>`}
        />

        <h4>Visueel voorbeeld, <code>svg</code> binnen een link, visueel weergegeven als knop</h4>
        <p>
          Voorbeeld met een svg-icoon uit de <a href="https://tabler.io/icons" rel="external"
            >tabler iconen set</a
          >.
        </p>
        <a href="./button-icon" class="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-user"
            aria-hidden="true"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
              d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
            /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg
          >
          Inloggen
        </a>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`
<a href="./button-icon" class="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-user"
    aria-hidden="true">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
  Inloggen
</a>
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
@use "@minvws/manon/button-base";
@use "@minvws/manon/icon";
@use "@minvws/manon/button-icon";
      `}
        />
      </section>
    </div>
  </article>
</main>
