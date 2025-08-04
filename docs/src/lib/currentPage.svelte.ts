import { page } from "$app/state";

export const currentPage = () => {
  const current = $derived(page.url.href);
  const unvisited = $derived.by(() => {
    const url = new URL(page.url);
    url.searchParams.set("u", (~~(Math.random() * 1e9) + 1e9).toString(16));
    return url.href;
  });

  return {
    get href() {
      return current;
    },
    get hrefUnvisited() {
      return unvisited;
    },
  };
};
