import type { ThemesConfig } from '$lib/types';
import HeaderLogoInside from "$lib/HeaderLogoInside.svelte";

export const themes: ThemesConfig = {
  "icore-open": {
    name: "iCore Open",
    header: {
      component: HeaderLogoInside,
      data: {
        logo: "../img/logo.svg",
        title: "Manon - iCore Open",
        ariaLabel: "Manon met iCore Open thema",
      },
    }
  }
};
