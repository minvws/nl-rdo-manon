<script context="module">
  export const breadcrumb = '"inline"-formulier';
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>"inline"-formulier</title>
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
        <h1>"inline"-formulier</h1>
        <p>
          In sommige gevallen is er om technische redenen een formulier nodig rondom een knop maar
          is het niet nodig om deze visueel binnen een formulier te plaatsen. Voor die situaties is
          dit voorbeeld geschikt.
        </p>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>Voeg <code>class="inline"</code> toe aan het formulier.</li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>
        <p>Het basisvoorbeeld met een invoerveld en een verzendknop.</p>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post" class="inline">
          <button type="submit">Haal gegevens op</button>
        </form>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<form action="" method="post" class="inline">
  <button type="submit">Haal gegevens op</button>
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
@use "@minvws/manon/form-base";
@use "@minvws/manon/form-inline";
`}
        />
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-inline-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
