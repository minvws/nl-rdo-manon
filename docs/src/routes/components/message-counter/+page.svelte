<script module>
  export const breadcrumb = "Notificatie-teller";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Notificatie-teller</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
      <li><a href="#variables">Instelbare variabelen</a></li>
    </ul>
  </SideMenu>

  <article class="visually-grouped">
    <div>
      <section id="introduction">
        <h1>Notificatie-teller</h1>
        <p>
          De notificatie-teller is bedoeld om de gebruiker te attenderen en te informeren over
          nieuwe berichten of notificaties.
        </p>

        <ul>
          <li>
            Voeg de <code>class</code> "message-counter" toe om het aantal berichten visueel weer te
            geven als een notificatie-teller.
          </li>
          <li>
            Overweeg of het nodig is een toegankelijk label toe te voegen.
            <ul>
              <li>
                <strong>Let op</strong>: in vorige versies van deze documentatie werd aangeraden om
                de notificatie-teller een <code>aria-label</code> te geven.
                <strong>Dat was incorrect.</strong>
              </li>
              <li>
                Is uit context duidelijk waar de teller bij hoort? Bijvoorbeeld in een link zoals: <a
                  href="message-counter">Berichten <span class="message-counter">42</span></a
                >, of in een tabel met duidelijke headers? Dan is het <b>niet</b> nodig een extra label
                toe te voegen.
              </li>
              <li>
                Wordt de teller gebruikt in combinatie met bijvoorbeeld een icoon? Zorg dan dat het
                icoon een duidelijk tekst-alternatief heeft.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Als los element</h3>
        <h4>Visueel voorbeeld</h4>
        <span class="message-counter">1</span>

        <h4>HTML-voorbeeld</h4>
        <Code language="html" code={`<span class="message-counter">1</span>`} />

        <h3><code>In een link</code></h3>
        <h4>Visueel voorbeeld</h4>
        <a href="message-counter">Berichten <span class="message-counter">42</span></a>

        <h4>HTML-voorbeeld</h4>
        <Code
          language="html"
          code={`<a href="message-counter">Berichten <span class="message-counter">42</span></a>`}
        />

        <h3>Lang getal</h3>
        <h4>Visueel voorbeeld</h4>
        <span class="message-counter">12.830</span>

        <h4>HTML-voorbeeld</h4>
        <Code language="html" code={`<span class="message-counter">12.830</span>`} />
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
@use "@minvws/manon/message-counter-base";
      `}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#padding">padding</a></li>
          <li>
            <a href="{base}/documentation/variables#border-radius">border-radius</a>
          </li>
          <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
          <li>
            <a href="{base}/documentation/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
          <li><a href="{base}/documentation/variables#height">height</a></li>
          <li><a href="{base}/documentation/variables#min-width">min-width</a></li>
          <li><a href="{base}/documentation/variables#border-width">border-width</a></li>
          <li><a href="{base}/documentation/variables#border-style">border-style</a></li>
          <li><a href="{base}/documentation/variables#border-color">border-color</a></li>
        </ul>
      </section>
    </div>
  </article>
</main>
