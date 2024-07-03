<script context="module">
  export const breadcrumb = "Kleuren";
</script>

<script>
  import { base } from "$app/paths";
  import SideMenu from "$lib/SideMenu.svelte";
</script>

<svelte:head>
  <title>Kleuren</title>
</svelte:head>

<main class="sidemenu" id="main-content" tabindex="-1">
  <SideMenu>
    <ul>
      <li><a href="#introduction">Introductie</a></li>
    </ul>
  </SideMenu>
  <article>
    <div>
      <section id="introduction">
        <h1>Kleurensets</h1>

        <div class="column-2">
          <nav>
            <h2>Finn</h2>
            <p>Set met gelijkwaardige kleuren</p>
            <ul>
              <li><a href="{base}/components/finn-small">Klein (twee kleuren)</a></li>
              <li><a href="{base}/components/finn-medium">Middel (drie kleuren)</a></li>
              <li><a href="{base}/components/finn-large">Groot (vijf kleuren)</a></li>
            </ul>
          </nav>

          <nav id="form-types">
            <h2>Spot</h2>
            <p>Huisstijlkleuren met accentkleuren</p>
            <ul>
              <li><a href="{base}/components/spot-mini">Spot mini (twee hoofdkleuren en een accentkleur)</a></li>
              <li>
                <a href="{base}/components/spot-small">Spot klein (twee hoofdkleuren en twee accentkleuren)</a>
              </li>
              <li>
                <a href="{base}/components/spot-medium">Spot middel (twee hoofdkleuren en drie accentkleuren)</a>
              </li>
              <li>
                <a href="{base}/components/spot-large">Spot groot (twee hoofdkleuren en vijf accentkleuren)</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </article>
</main>
