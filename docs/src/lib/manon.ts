export async function initManon() {
  return Promise.all([
    import("@minvws/manon/accordion.js"),
    import("@minvws/manon/expando-rows.js"),
    import("@minvws/manon/filters.js"),
    import("@minvws/manon/form-help.js"),
    import("@minvws/manon/language-selector.js"),
  ]);
}

export async function initCollapsible() {
  const { initCollapsible } = await import("@minvws/manon/collapsible.js");
  initCollapsible();
}

export async function initSidemenus() {
  const { initSidemenus } = await import("@minvws/manon/sidemenu.js");
  initSidemenus();
}
