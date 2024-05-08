<script context="module">
  export const breadcrumb = "Verbergen";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Verbergen</title>
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

  <article>
    <div>
      <section id="introduction">
        <h1>Verbergen - <dfn>hidden</dfn></h1>
        <p>
          Object verbergen. Door middel van een <code>display:none</code> wordt het object verborgen.
        </p>
        <p>
          <strong>Let op:</strong> Screenreaders slaan over het algemeen ook objecten met
          <code>"display: none"</code> over voor hun gebruikers.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de class <code>hidden</code> aan het gewenste element.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeeld</h2>
        <p>Onderstaand voorbeeld bevat drie paragrafen waarvan er twee verborgen worden.</p>

        <div>
          <p class="hidden">Voorbeeld paragraaf 1.</p>
          <p hidden>Voorbeeld paragraaf 2.</p>
          <p>Voorbeeld paragraaf 3.</p>
        </div>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<div>
  <p class="hidden">Voorbeeld paragraaf 1.</p>
  <p hidden>Voorbeeld paragraaf 2.</p>
  <p>Voorbeeld paragraaf 3.</p>
</div>
`}
        />
      </section>

      <section id="requirements">
        <h2>Bijbehorende bestanden</h2>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling">Componenten gebruiken en styling toevoegen</a>
        </p>
        <h3>Benodigd</h3>
        <ul>
          <li><code>hidden.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <p>Dit element heeft zelf geen instelbare variabelen.</p>
      </section>
    </div>
  </article>
</main>
