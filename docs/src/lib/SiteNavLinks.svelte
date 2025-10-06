<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { base } from "$app/paths";
  import NavLink from "$lib/NavLink.svelte";

  let props: HTMLAttributes<HTMLElement> = $props();
</script>

<ul {...props}>
  <li><NavLink href="{base}/">Home</NavLink></li>
  <li><NavLink href="{base}/getting-started">Aan de slag</NavLink></li>
  <li><NavLink href="{base}/library">Bibliotheek</NavLink></li>
  <li><NavLink href="{base}/utility">Utility Classes</NavLink></li>
  <li><NavLink href="{base}/examples">Voorbeelden</NavLink></li>
</ul>

<ul>
  <li><a href="https://github.com/minvws/nl-rdo-manon/" target="_blank">GitHub ↗</a></li>
</ul>
