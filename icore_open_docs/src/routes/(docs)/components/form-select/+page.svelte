<script context="module">
  export const breadcrumb = "Selectielijst";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Selectielijst</title>
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
      <p class="warning" role="group" aria-label="waarschuwing">
        <span>Waarschuwing:</span> Het <code>select</code>-element wordt binnen browsers en
        bestuurssystemen verschillend weergegeven. Hierdoor kan aangepaste styling onverwachte
        resultaten opleveren. Test daarom altijd grondig of gebruik de standaard weergave zonder
        visuele aanpassingen.
      </p>
      <section id="introduction">
        <h1>Selectielijst - <code>select</code></h1>

        <h2>Benodigde stappen:</h2>
        <ol>
          <li>
            Voeg de benodigde bestanden toe aan het project. Voor een overzicht van de benodigde en
            optionele bestanden zie:
            <a href="#requirements">Bijbehorende bestanden</a>.
          </li>
          <li>
            Voeg de <code>&lt;range&gt;</code> toe. Zie onderstaand voorbeeld voor meer informatie.
          </li>
        </ol>

        <h2>Aandachtspunten:</h2>
        <ul>
          <li>
            Als een selectielijst een verplicht invoerveld is, voeg dan altijd als eerste optie een
            lege optie toe:
            <code>&lt;option value=""&gt;--Please choose an option--&lt;/option&gt;</code>
            Zie
            <a href="#form-dropdown-required">Verplichte selectielijst</a>
            voor meer informatie.
          </li>
        </ul>
      </section>

      <section id="examples">
        <h2>Voorbeelden</h2>

        <h3>Basis</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <label for="select-base">Selectielijst</label>
          <select id="select-base" name="select-base">
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-base">Selectielijst</label>
  <select id="select-base" name="select-base">
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3>Horizontaal uitgelijnd</h3>
        <h4>Visueel voorbeeld:</h4>
        <form action="" method="post">
          <div>
            <label for="select-horizontal">Selectielijst</label>
            <select id="select-horizontal" name="select-horizontal">
              <option value="1">Optie 1</option>
              <option value="2">Optie 2</option>
              <option value="3">Optie 3</option>
            </select>
          </div>

          <button type="submit">Verzend</button>
        </form>

        <h3>HTML-voorbeeld:</h3>
        <Code
          language="html"
          code={`
<form action="" method="post">
  <div>
    <label for="select-horizontal">Selectielijst</label>
    <select id="select-horizontal" name="select-horizontal">
      <option value="1">Optie 1</option>
      <option value="2">Optie 2</option>
      <option value="3">Optie 3</option>
    </select>
  </div>

  <button type="submit">Verzend</button>
</form>
`}
        />

        <h3 id="form-dropdown-required">Verplicht</h3>
        <h4>Voorbeeld</h4>
        <p>Visueel voorbeeld:</p>
        <form action="" method="post">
          <label for="select-required">Verplichte selectielijst</label>
          <span class="nota-bene">Dit veld is verplicht</span>
          <select id="select-required" name="select-required" required>
            <option value="">--Please choose an option--</option>
            <option value="1">Optie 1</option>
            <option value="2">Optie 2</option>
            <option value="3">Optie 3</option>
          </select>

          <button type="submit">Verzend</button>
        </form>

        <p>HTML-voorbeeld:</p>

        <Code
          language="html"
          code={`
<form action="" method="post">
  <label for="select-required">Verplichte selectielijst</label>
  <span class="nota-bene">Dit veld is verplicht</span>
  <select id="select-required" name="select-required" required>
    <option value="">--Please choose an option--</option>
    <option value="1">Optie 1</option>
    <option value="2">Optie 2</option>
    <option value="3">Optie 3</option>
  </select>

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
          <li><code>form/form-select-variables.scss</code></li>
        </ul>

        <h3>Optioneel</h3>
        <ul>
          <li><code>form/form-base-variables.scss</code></li>
          <li><code>form/form-select-variables.scss</code></li>
        </ul>
      </section>

      <section id="variables">
        <h2>Instelbare variabelen</h2>

        <p>Bijbehorende elementen:</p>
        <ul>
          <li><a href="{base}/components/form-base">form-base</a></li>
        </ul>
      </section>

      <section id="related">
        <h2>Gerelateerde pagina's</h2>
        <a href="{base}/components/form-select-test">Test- en voorbeelden-pagina</a>
      </section>
    </div>
  </article>
</main>
