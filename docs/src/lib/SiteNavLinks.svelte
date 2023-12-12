<script>
  import NavLink from "$lib/NavLink.svelte";
</script>

<ul {...$$props}>
  <li><NavLink href="/">Home</NavLink></li>
  <li><NavLink href="/components">Componenten</NavLink></li>
  <li><NavLink href="/documentation">Documentatie</NavLink></li>
</ul>
