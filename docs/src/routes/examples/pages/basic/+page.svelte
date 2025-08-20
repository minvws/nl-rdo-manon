<script lang="ts">
  import { base } from "$app/paths";
  import { Header, Footer } from "$lib/pages";
  const BaseUrl = `${base}/examples/pages/basic`;
</script>

<Header url={BaseUrl} />

<main id="main-content">
  <section>
    <div></div>
  </section>
</main>

<Footer url={BaseUrl} />
