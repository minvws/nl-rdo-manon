# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Changes for releases up to and including v18.6.2 are documented in the
[GitHub releases](https://github.com/minvws/nl-rdo-manon/releases).

## [Unreleased]

### Fixed

- Sidemenu: nested lists no longer add extra space below the item that contains
  them, so all items in the menu are spaced evenly ([#1569](https://github.com/minvws/nl-rdo-manon/pull/1569))

## [19.0.0] - 2026-10-05

### Added

- `publiccode.yml` describing the project
  ([#1543](https://github.com/minvws/nl-rdo-manon/pull/1543)).
- No-JS documentation for interactive components, describing their behavior
  without JavaScript
  ([#1506](https://github.com/minvws/nl-rdo-manon/pull/1506)).
- Browser support policy based on the Rijksoverheid browser support guideline,
  defined in `.browserslistrc`; linting now fails on CSS features unsupported by
  these browsers ([#1546](https://github.com/minvws/nl-rdo-manon/pull/1546)).
- npm packages are now published with provenance
  ([#1439](https://github.com/minvws/nl-rdo-manon/pull/1439),
  [#1519](https://github.com/minvws/nl-rdo-manon/pull/1519)).
- This changelog
  ([#1547](https://github.com/minvws/nl-rdo-manon/pull/1547)).
- `$form-fieldset-group-margin-bottom` and `$form-fieldset-label-display`
  variables to space labels, fields and groups inside a fieldset
  ([#1548](https://github.com/minvws/nl-rdo-manon/pull/1548)).
- `$skip-to-content-position`, `$skip-to-content-top`, `$skip-to-content-left`,
  `$skip-to-content-transform` and `$skip-to-content-z-index` variables to
  position the focused skip link
  ([#1548](https://github.com/minvws/nl-rdo-manon/pull/1548)).

### Changed

- **BREAKING:** Accordion items now use heading markup; the toggle button is
  generated inside the item heading by JavaScript instead of being part of the
  HTML. Items with a `<button>` instead of a heading are no longer styled or
  initialized ([#1515](https://github.com/minvws/nl-rdo-manon/pull/1515)). To
  migrate:
  - Replace the item's `<button>` with an `<h2>`–`<h6>` containing the button
    text; do not put a `<button>` inside the heading.
  - Replace `aria-expanded` on the button with `data-expanded` on the heading to
    set the initial state.
- Improved accessibility of the language selector. The `aria-expanded` state
  moved from `.language-selector-options` to its `<button>`, so custom styles or
  scripts that target `div[aria-expanded]` need updating. Without JavaScript the
  list of languages is always visible
  ([#1469](https://github.com/minvws/nl-rdo-manon/pull/1469),
  [#1505](https://github.com/minvws/nl-rdo-manon/pull/1505)).
- The sidemenu breakpoint changed from `50rem` to `25rem` for all themes, so the
  sidemenu is shown next to the content on smaller screens
  ([#1459](https://github.com/minvws/nl-rdo-manon/pull/1459)).
- Improved accessibility of expando rows and the relation between the button and
  the expanded details row
  ([#1468](https://github.com/minvws/nl-rdo-manon/pull/1468),
  [#1496](https://github.com/minvws/nl-rdo-manon/pull/1496)).
- Improved accessibility of table checkboxes by linking labels and checkboxes,
  and of table headers with a select-all checkbox
  ([#1467](https://github.com/minvws/nl-rdo-manon/pull/1467),
  [#1504](https://github.com/minvws/nl-rdo-manon/pull/1504)).

### Fixed

- Buttons, inputs, selects and textareas now use the font of the page when the
  theme does not set a font for them
  ([#1548](https://github.com/minvws/nl-rdo-manon/pull/1548)).
- Icore Open: spacing between label and field, and between groups, inside a
  fieldset now matches forms without a fieldset
  ([#1548](https://github.com/minvws/nl-rdo-manon/pull/1548)).
- Icore Open: the focused skip link is shown on top of the header instead of
  being squeezed into it, so the navigation no longer shifts
  ([#1548](https://github.com/minvws/nl-rdo-manon/pull/1548)).
- Secondary link buttons keep their styling after the link has been visited
  ([#1548](https://github.com/minvws/nl-rdo-manon/pull/1548)).
- Sidemenu nav gap calculation no longer fails when the element is missing
  ([#1538](https://github.com/minvws/nl-rdo-manon/pull/1538)).
- Removed unnecessary whitespace within the sidemenu in Rijkshuisstijl 2008
  ([#1459](https://github.com/minvws/nl-rdo-manon/pull/1459)).
- The `.horizontal-center` utility now compiles standalone and uses
  `$horizontal-center-max-width`
  ([#1511](https://github.com/minvws/nl-rdo-manon/pull/1511)).
- Type checking no longer fails on dependency declaration files
  ([#1545](https://github.com/minvws/nl-rdo-manon/pull/1545)).
- Documentation: code examples no longer show literal backticks, and the copy
  button no longer copies an empty string
  ([#1512](https://github.com/minvws/nl-rdo-manon/pull/1512)).
- Documentation: corrected SCSS import paths in the quick start guide
  ([#1511](https://github.com/minvws/nl-rdo-manon/pull/1511)).

[unreleased]: https://github.com/minvws/nl-rdo-manon/compare/v19.0.0...HEAD
[19.0.0]: https://github.com/minvws/nl-rdo-manon/compare/v18.6.2...v19.0.0
