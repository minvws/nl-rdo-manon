<script lang="ts">
  import { base } from "$app/paths";
  import { Header, Footer } from "$lib/pages";
  const BaseUrl = `${base}/examples/pages/basic`;
</script>

<Header url={BaseUrl} />

<main id="main-content" tabindex="-1">
  <section class="hero">
    <img src="$img/strand.jpg" alt="Foto van een strand" />
    <div><h1>Lorem ipsum dolor set</h1></div>
  </section>
</main>

<Footer url={BaseUrl} />
