<script lang="ts">
  import { themes } from "$lib/themes.config";
  import type { ThemeConfig } from "$lib/types";

  let currentTheme: string = "icore-open";

  const themeConfig: ThemeConfig = themes[currentTheme];
</script>

<svelte:component this={themeConfig.header.component} data={themeConfig.header.data} />
