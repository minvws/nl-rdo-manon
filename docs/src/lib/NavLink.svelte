<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { page } from "$app/stores";

  interface Props {
    children: Snippet;
    href: string;
  }

  let { href = "", children, ...rest }: Props & HTMLAnchorAttributes = $props();
  let ariaCurrent = $derived($page.url.pathname === href ? ("page" as const) : undefined);
</script>

<a {href} aria-current={ariaCurrent} {...rest}>
  {@render children?.()}
</a>
