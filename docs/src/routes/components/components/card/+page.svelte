<script module>
  export const breadcrumb = "Kaart";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kaart</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
      <li><a href="#examples">Voorbeelden</a></li>
      <li><a href="#requirements">Bijbehorende bestanden</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Kaart</h1>
        <p>Groepeer bij elkaar horende elementen visueel in een kaart.</p>
        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie: <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Vul de variabelen met de gewenste stijlkeuzes. Voor meer informatie zie het overzicht
            met <a href="#variables">instelbare variabelen</a>.
          </li>
          <li>
            Voeg de class <code>card</code> toe aan de gewenste elementen. Voor meer informatie zie:
            <a href="#examples">Voorbeelden</a>.
          </li>
        </ol>
      </section>

      <section id="examples">
        <h2>Voorbeelden:</h2>

        <h3>Paragraaf</h3>
        <h4>Visueel voorbeeld:</h4>
        <div class="card" role="group" aria-label="Voorbeeldkaart">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor set</li>
          </ul>
          <button>Lorem ipsum</button>
        </div>

        <h4>HTML-voorbeeld:</h4>
        <Code
          language="html"
          code={`
<div class="card" role="group" aria-label="Voorbeeldkaart">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ul>
        <li>Lorem ipsum</li>
        <li>Dolor set</li>
    </ul>
    <button>Lorem ipsum</button>
</div>
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

        <h3>Aandachtspunten:</h3>
        <ul>
          <li>
            De standaard ingestelde waarden binnen Manon maken gebruik van de <a
              href="body-text-set">Body text set</a
            >. Om gebruik te maken van deze set. Laad de set eenmalig in voordat overige componenten
            er gebruik van maken. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ul>

        <h3>Importeer component via npm</h3>

        <h4>CSS-voorbeeld:</h4>
        <Code
          language="css"
          code={`
@use "@minvws/manon/card";
`}
        />
      </section>
    </div>
  </article>
</main>
