<script>
  import { base } from "$app/paths";
  import NavLink from "$lib/NavLink.svelte";
</script>

<ul {...$$props}>
  <li><NavLink href="{base}/">Home</NavLink></li>
  <li><NavLink href="{base}/components">Componenten</NavLink></li>
  <li><NavLink href="{base}/documentation">Documentatie</NavLink></li>
</ul>
