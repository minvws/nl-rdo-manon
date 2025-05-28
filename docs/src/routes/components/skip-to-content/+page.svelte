<script module>
  export const breadcrumb = "Ga direct naar inhoud-knop";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Ga direct naar inhoud-knop</title>
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
        <h1>"Ga direct naar inhoud"-knop</h1>

        <p>Voeg gebruiksvriendelijkheid toe voor gebruikers die gebruik maken van hulptechnologiën of enkel met
          toetsenbord navigeren. Deze knop geeft gebruikers de mogelijkheid om direct naar de inhoud van de pagina te springen. Hiermee
          wordt voorkomen dat de gebruiker langs onnodig veel elementen moet navigeren.</p>

        <h2>Benodigde stappen</h2>

        <h3>Importeer component via npm</h3>
        <Code
          language="scss"
          code={`
@use "@minvws/manon/skip-to-content";
`}
        />

        <ul>
          <li>Voeg de knop als eerste element binnen de header toe.</li>
          <li>Verwijs met een <code>&lt;a></code> naar het blok waar de content begint. Dit zal meestal de
            <code>&lt;main></code> zijn.</li>
          <li><strong>Let op: de knop is alleen zichtbaar wanneer deze focus krijgt. Gebruik <code>tab</code> om de
              knop te zien.</strong></li>
          <li>Voeg <code>tabindex="-1"</code> toe aan de main. De <code>main</code> is een element dat standaard geen
            focus kan accepteren aangezien het geen control of interactieve content is. Het toevoegen van de tabindex
            stelt het in staat om toch focus te accepteren.</li>
        </ul>

      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h4>Visueel voorbeeld</h4>
        <div class="resize">
          <iframe src="{base}/examples/skip-to-content" title="Voorbeeld" height="240px"></iframe>
        </div>

        <div>
          <p>HTML-voorbeeld header:</p>
          <pre>
                <code>
&lt;header>
  &lt;a href="#main-content" class="button focus-only skip-to-content">Ga direct naar inhoud&lt;/a>

  &lt;nav aria-label="Navigatie voorbeeld header">
    &lt;div>
      &lt;ul>
          &lt;li>&lt;a href="" aria-current="page">Voorbeeld-link 1&lt;/a>&lt;/li>
          &lt;li>&lt;a href="">Voorbeeld-link 2&lt;/a>&lt;/li>
          &lt;li>&lt;a href="">Voorbeeld-link 3&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
  &lt;/nav>
&lt;/header>
                </code>
              </pre>

          <p>Voeg aan het naar toe te springen element de corresponderende <code>id</code> toe.</p>

          <pre>
                <code>
&lt;main id="main-content" tabindex="-1">
  &lt;!-- page content -->
&lt;/main>
                </code>
              </pre>
        </div>
      </section>

    </div>
  </article>
</main>
