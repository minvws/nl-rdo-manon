<script>
  import { page } from "$app/stores";

  export let href = "";

  /** @type {"page"|undefined} */
  $: ariaCurrent = $page.url.pathname === href ? "page" : undefined;
</script>

<a {href} aria-current={ariaCurrent} {...$$restProps}>
  <slot />
</a>
