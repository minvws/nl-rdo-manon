export async function initManon() {
  return Promise.all([
    import("@minvws/manon/js/accordion.js"),
    import("@minvws/manon/js/expando-rows.js"),
    import("@minvws/manon/js/filters.js"),
    import("@minvws/manon/js/form-help.js"),
    import("@minvws/manon/js/language-selector.js"),
    import("@minvws/manon/js/tabs.js"),
  ]);
}

export async function initCollapsible() {
  const { initCollapsible } = await import("@minvws/manon/js/collapsible.js");
  initCollapsible();
}

export async function initSidemenus() {
  const { initSidemenus } = await import("@minvws/manon/js/sidemenu.js");
  initSidemenus();
}
