<script context="module">
  export const breadcrumb = "Tekstveld";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Tekstveld</title>
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
  <article>
    <div>
      <section id="introduction">
        <h1>Tekstveld - <code>textarea</code></h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de <code>&lt;textarea&gt;</code> toe. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Zorg er voor gebruiksvriendelijkheid voor dat het tekstveld een duidelijke vraag en/of
            duidelijk doel heeft. Voeg een omschrijvend <code>&lt;label&gt;</code> toe en stel een
            vraag of geef duidelijke richtlijnen mee door middel van een
            <a href="nota-bene">nota-bene</a>.
          </li>
          <li>
            <code>rows="number"</code> geeft de initiële hoogte van het tekstveld aan in de hoeveelheid
            regels. Als er een langer bericht verwacht of aangemoedigd wordt is het voor de gebruiker
            fijn om een hoger initieel tekstveld te hebben.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Visueel voorbeeld:</h3>
        <h4>Basis</h4>
        <form action="" method="post">
          <label for="voorbeeld-tekstveld-base">Bericht</label>
          <span class="nota-bene" id="voorbeeld-tekstveld-base-explanation"
            >Stel jouw vraag of voeg jouw opmerking toe
          </span>
          <textarea
            id="voorbeeld-tekstveld-base"
            name="voorbeeld-tekstveld-base"
            rows="5"
            aria-describedby="voorbeeld-tekstveld-base-explanation"
          ></textarea>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="voorbeeld-tekstveld-base">Bericht</label>
  <span class="nota-bene" id="voorbeeld-tekstveld-base-explanation">
    Stel jouw vraag of voeg jouw opmerking toe:
  </span>
  <textarea
    id="voorbeeld-tekstveld-base"
    name="voorbeeld-tekstveld-base"
    rows="5"
    aria-describedby="voorbeeld-tekstveld-base-explanation">
  </textarea>

  <button type="submit">Verzend</button>
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
        <h3>Benodigd</h3>
        <ul>
          <li><code>form/form-base.scss</code></li>
          <li><code>form/form-textarea.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>form/form-base-variables.scss</code></li>
          <li><code>form/form-textarea-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>
        <ul>
          <li><a href="{base}/documentation/variables#width">width</a></li>
          <li><a href="{base}/documentation/variables#resize">resize</a></li>
          <li><a href="{base}/documentation/variables#min-height">min-height</a></li>
          <li><a href="{base}/documentation/variables#padding">padding</a></li>
          <li><a href="{base}/documentation/variables#font-size">font-size</a></li>
          <li><a href="{base}/documentation/variables#font-family">font-family</a></li>
          <li><a href="{base}/documentation/variables#text-color">text-color</a></li>
          <li>
            <a href="{base}/documentation/variables#background-color">background-color</a>
          </li>
          <li><a href="{base}/documentation/variables#border-width">border-width</a></li>
          <li><a href="{base}/documentation/variables#border-style">border-style</a></li>
          <li><a href="{base}/documentation/variables#border-color">border-color</a></li>
        </ul>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-input-textarea-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
