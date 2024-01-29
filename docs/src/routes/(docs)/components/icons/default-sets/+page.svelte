<script context="module">
  export const breadcrumb = "Standaard icoon-sets";
</script>

<script>
  import { base } from "$app/paths";
  import Code from "$lib/Code.svelte";
  import iconSets from "./icon-sets.json";
</script>

<svelte:head>
  <title>Standaard icoon-sets</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <article>
    <div>
      <section>
        <h1>Standaard icoon-sets</h1>
        <p>De volgende icoon-sets zijn standaard beschikbaar:</p>
        <ul>
          <li><a href="#icoonset-basis">Basis</a></li>
          <li><a href="#icoonset-gezondheid">Gezondheid en zorg</a></li>
          <li><a href="#icoonset-computer">Computer en internet</a></li>
          <li><a href="#icoonset-gebouwen">Gebouwen</a></li>
        </ul>
        <p>
          Elk thema zou ernaar moeten streven de iconen in deze sets te implementeren. Iconen die in
          een thema niet beschikbaar zijn, moeten door het thema als &#x25A1; (het unicode-character <code
            >U+25A1</code
          > <span lang="en">"missing glyph"</span>) aangeboden worden.
        </p>
        <h2 id="icoonset-basis">Icoon-set "Basis"</h2>
        <ul class="background-color-offset grid-iconset">
          {#each iconSets.basis || [] as icon}
            <li>
              <span class="icon icon-{icon}" aria-hidden="true" />
              <code lang="en">{icon}</code>
            </li>
          {/each}
        </ul>
        <h2 id="icoonset-gezondheid">Icoon-set "Gezondheid en zorg"</h2>
        <ul class="background-color-offset grid-iconset">
          {#each iconSets.gezondheid || [] as icon}
            <li>
              <span class="icon icon-{icon}" aria-hidden="true" />
              <code lang="nl">{icon}</code>
            </li>
          {/each}
        </ul>
        <h2 id="icoonset-computer">Icoon-set "Computer en internet"</h2>
        <ul class="background-color-offset grid-iconset">
          {#each iconSets.computer || [] as icon}
            <li>
              <span class="icon icon-{icon}" aria-hidden="true" />
              <code lang="nl">{icon}</code>
            </li>
          {/each}
        </ul>
        <h2 id="icoonset-gebouwen">Icoon-set "Gebouwen"</h2>
        <ul class="background-color-offset grid-iconset">
          {#each iconSets.gebouwen || [] as icon}
            <li>
              <span class="icon icon-{icon}" aria-hidden="true" />
              <code lang="nl">{icon}</code>
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </article>
</main>

<style>
  .grid-iconset {
    padding: 1rem;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
  .grid-iconset li {
    padding: 1rem;
    list-style-type: none;
    background: #fff;
    hyphens: none;
    display: grid;
    grid-template-columns: 1rem auto;
    gap: 0.5rem;
  }
</style>
