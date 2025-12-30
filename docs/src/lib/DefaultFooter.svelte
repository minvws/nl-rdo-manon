<script lang="ts">
  import { base } from "$app/paths";
  import SiteNavLinks from "$lib/SiteNavLinks.svelte";
</script>

<footer class="icore-open">
  <span class="slogan">Manon - iCore Open thema</span>
  <nav aria-label="main navigation">
    <SiteNavLinks />
  </nav>
  <div class="meta">
    <p>v18.0.0-alpha.3</p>
  </div>
</footer>

<footer class="rijkshuisstijl-2008">
  <div class="content-wrapper">
    <span class="slogan">Manon - Rijkshuisstijl 2008 thema</span>
    <nav aria-label="main navigation">
      <SiteNavLinks />
    </nav>
  </div>
  <div class="meta">
    <p>v18.0.0-alpha.3</p>
  </div>
</footer>

<footer class="kat">
  <div class="content-wrapper">
    <div>
      <span class="slogan">Manon - Kat thema</span>
      <div class="meta">
        <p>v18.0.0-alpha.3</p>
      </div>
    </div>
    <nav aria-label="main navigation">
      <SiteNavLinks />
    </nav>
  </div>

</footer>
