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
  <section>
    <h1 class="page-title">Utility classes</h1>
    <div class="content-wrapper">
      <section id="introduction">
        <p>
          Utility classes zijn kleine, herbruikbare CSS-klassen die specifieke stijlen toepassen op
          elementen. Ze zijn ontworpen om snel en eenvoudig toe te passen, waardoor je meer controle
          hebt over de opmaak van je HTML.
        </p>
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
            <li><a href="{base}/utility/one-third-two-thirds">one-third-two-thirds</a></li>
            <li><a href="{base}/utility/two-thirds-one-third">two-thirds-one-third</a></li>
            <li><a href="{base}/utility/columns">columns</a></li>
            <li><a href="{base}/utility/container">container</a></li>
          </ul>
        </nav>

        <nav>
          <h2>Uitlijning</h2>
          <ul>
            <li>
              <a href="{base}/utility/horizontal">horizontal</a>
            </li>
            <li>
              <a href="{base}/utility/centered">centered</a>
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
              <a href="{base}/utility/horizontal-scroll">horizontal-scroll</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h2>Overig</h2>
          <ul>
            <li>
              <a href="{base}/utility/background-color-offset">background-color-offset</a>
            </li>
            <li>
              <a href="{base}/utility/overlay">overlay</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </section>
</main>
