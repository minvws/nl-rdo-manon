<script module>
  export const breadcrumb = "Utility classes";
</script>

<script lang="ts">
  import { base } from "$app/paths";
  import NavLink from "$lib/NavLink.svelte";
</script>

<svelte:head>
  <title>Utility classes</title>
</svelte:head>

<main id="main-content" tabindex="-1">
  <section id="introduction">
    <div>
      <h1>Utility classes</h1>
    </div>
  </section>

  <section id="utility" class="column-3">
    <nav aria-labelledby="utility-classes-heading">
      <h2>Zichtbaarheid</h2>
      <ul>
        <li>
          <a href="{base}/utility/focus-only">focus-only</a>
        </li>
        <li>
          <a href="{base}/utility/hidden">hidden</a>
        </li>
        <li>
          <a href="{base}/utility/visually-hidden">visually-hidden</a>
        </li>
      </ul>
    </nav>

    <nav>
      <h2>Layout</h2>
      <ul>
        <li><a href="{base}/utility/one-third-two-thirds">Eenderde tweederde</a></li>
        <li><a href="{base}/utility/two-thirds-one-third">Tweederde eenderde</a></li>
        <li><a href="{base}/utility/fifty-fifty">50/50</a></li>
        <li><a href="{base}/utility/column-2">Twee kolommen</a></li>
        <li><a href="{base}/utility/column-3">Drie kolommen</a></li>
        <li><a href="{base}/utility/column-4">Vier kolommen</a></li>
      </ul>
    </nav>

    <nav>
      <h2>Uitlijning</h2>
      <ul>
        <li>
          <a href="{base}/utility/horizontal">Horizontaal</a>
        </li>
        <li>
          <a href="{base}/utility/centered">Gecentreerd</a>
        </li>
      </ul>
    </nav>

    <nav>
      <h2>Gedrag</h2>
      <ul>
        <li>
          <a href="{base}/utility/nowrap">nowrap</a>
        </li>
        <li>
          <a href="{base}/utility/horizontal-scroll">Horizontale scroll</a>
        </li>
      </ul>
    </nav>

    <nav>
      <h2>Overig</h2>
      <ul>
        <li>
          <a href="{base}/utility/background-color-offset">background-color-offset</a>
        </li>
      </ul>
    </nav>
  </section>
</main>
