<script module>
  export const breadcrumb = "Footer";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Footer</title>
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
        <h1>Footer</h1>
        <p>
          De footer wordt vaak gebruikt als extra navigatiepunt en om aan te geven aan de gebruiker
          dat het einde van de pagina bereikt is.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h1>Voorbeelden:</h1>

        <h2>Visueel voorbeeld:</h2>
        <footer>
          <nav aria-labelledby="footer-nav-1-heading">
            <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
            <ul>
              <li><a href="footer">Dolor</a></li>
              <li><a href="footer">Sit</a></li>
              <li><a href="footer">Amet</a></li>
            </ul>
          </nav>
        </footer>

        <h2>HTML-voorbeeld:</h2>
        <Code
          language="html"
          code={`
<footer>
  <nav aria-labelledby="footer-nav-1-heading">
    <h1 id="footer-nav-1-heading">Lorem ipsum</h1>
    <ul>
      <li><a href="{base}/components/footer-base">Dolor</a></li>
      <li><a href="{base}/components/footer-base">Sit</a></li>
      <li><a href="{base}/components/footer-base">Amet</a></li>
    </ul>
  </nav>
</footer>
`}
        />

        <h2>Structuur-voorbeeld:</h2>
        <Code
          language="html"
          code={`
<footer>
  <!-- Content -->
</footer>
`}
        />
      </section>

      <section id="requirements">
        <h1>Bijbehorende bestanden</h1>
        <p>Voeg de (s)css-bestanden toe aan het project of importeer de bestanden.</p>
        <p>
          Voor meer informatie over importeren en instellen van componenten. Zie:
          <a href="{base}/documentation/import-styling"
            >Componenten gebruiken en styling toevoegen</a
          >
        </p>
        <h2>Importeer component via npm</h2>
        <h3>CSS-voorbeeld:</h3>
        <Code
          language="css"
          code={`
@use "@minvws/manon/footer";
`}
        />
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/footer-two-thirds-one-third">Footer tweederde eenderde</a>
      </section>
    </div>
  </article>
</main>
