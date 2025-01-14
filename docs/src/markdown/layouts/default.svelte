<script module lang="ts">
  export { default as Code } from "$lib/Code.svelte";
  export { default as a } from "../components/A.svelte";
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import { parseNav, type MarkdownNav, type ParsedNav } from "$lib/markdown-nav";
  import SideMenu from "$lib/SideMenu.svelte";

  interface Props {
    title?: string;
    nav?: MarkdownNav;
    children?: Snippet;
  }

  let { title, nav, children }: Props = $props();
  let parsedNav = $derived(parseNav(nav));
</script>

<svelte:head>
  <title>{title || "Manon"}</title>
</svelte:head>

{#snippet navlist(items: ParsedNav)}
  <ul>
    {#each items as { link, children }}
      <li><a href={link.href}>{link.name}</a></li>
      {#if children}{@render navlist(children)}{/if}
    {/each}
  </ul>
{/snippet}

<main class:sidemenu={!!parsedNav} id="main-content" tabindex="-1">
  {#if parsedNav}
    <SideMenu>{@render navlist(parsedNav)}</SideMenu>
  {/if}
  <section class="visually-grouped">
    {@render children?.()}
  </section>
</main>
