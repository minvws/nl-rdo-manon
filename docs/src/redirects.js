/**
 * Record mapping old URLs to new URLs. The root +layout.ts uses this to
 * generate redirect pages for the old URLs during a build. The keys (old URLs)
 * are added to the kit.prerender.entries array in svelte.config.js to ensure
 * they are included in the build.
 *
 * NB: this needs to be a .js file because it's imported from svelte.config.js.
 *
 * @type {Record<string, string>}
 */
export const redirects = {
  "/documentation/components.html": "/components",
  "/documentation/components/accordion.html": "/components/accordion",
  "/documentation/components/body-text-set.html": "/components/body-text-set",
  "/documentation/components/button.html": "/components/button",
  "/documentation/components/collapsible.html": "/components/collapsible",
  "/documentation/components/description-list.html": "/components/description-list",
  "/documentation/components/fieldset-radio.html": "/components/fieldset-radio",
  "/documentation/components/filter.html": "/components/filter",
  "/documentation/components/focus-only.html": "/components/focus-only",
  "/documentation/components/footer.html": "/components/footer",
  "/documentation/components/form-help.html": "/components/form-help",
  "/documentation/components/form-input-email.html": "/components/form-input-email",
  "/documentation/components/form-input-password.html": "/components/form-input-password",
  "/documentation/components/form-input-range.html": "/components/form-input-range",
  "/documentation/components/form-input-textarea.html": "/components/form-input-textarea",
  "/documentation/components/form-notification.html": "/components/form-notification",
  "/documentation/components/form-select.html": "/components/form-select",
  "/documentation/components/header-example-language-select-list.html":
    "/components/header-navigation/example-language-select-list",
  "/documentation/components/icons.html": "/components/icons",
  "/documentation/components/image-cover.html": "/components/image-cover",
  "/documentation/components/message-counter.html": "/components/message-counter",
  "/documentation/components/nota-bene.html": "/components/nota-bene",
  "/documentation/components/notification-error.html": "/components/notification-error",
  "/documentation/components/pagination.html": "/components/pagination",
  "/documentation/components/table-checkbox.html": "/components/table-checkbox",
  "/documentation/components/table-expando-row.html": "/components/table-expando-row",
  "/documentation/components/table-notifications.html": "/components/table-notifications",
  "/documentation/components/table-sortable.html": "/components/table-sortable",
  "/documentation/components/tabs.html": "/components/tabs",
  "/documentation/components/tiles.html": "/components/tiles",
};
