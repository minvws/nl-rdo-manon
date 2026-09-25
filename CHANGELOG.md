# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Changes for releases up to and including v18.6.2 are documented in the
[GitHub releases](https://github.com/minvws/nl-rdo-manon/releases).

## [Unreleased]

### Added

- `publiccode.yml` describing the project
  ([#1543](https://github.com/minvws/nl-rdo-manon/pull/1543)).
- No-JS documentation for interactive components, describing their behavior
  without JavaScript
  ([#1506](https://github.com/minvws/nl-rdo-manon/pull/1506)).

### Changed

- Accordion items now use heading markup; the toggle button is generated inside
  the item heading by JavaScript instead of being part of the HTML. The previous
  markup is still supported
  ([#1515](https://github.com/minvws/nl-rdo-manon/pull/1515)).
- Improved accessibility of the language selector
  ([#1469](https://github.com/minvws/nl-rdo-manon/pull/1469),
  [#1505](https://github.com/minvws/nl-rdo-manon/pull/1505)).
- Improved accessibility of expando rows and the relation between the button and
  the expanded details row
  ([#1468](https://github.com/minvws/nl-rdo-manon/pull/1468),
  [#1496](https://github.com/minvws/nl-rdo-manon/pull/1496)).
- Improved accessibility of table checkboxes by linking labels and checkboxes,
  and of table headers with a select-all checkbox
  ([#1467](https://github.com/minvws/nl-rdo-manon/pull/1467),
  [#1504](https://github.com/minvws/nl-rdo-manon/pull/1504)).

### Fixed

- Sidemenu nav gap calculation no longer fails when the element is missing
  ([#1538](https://github.com/minvws/nl-rdo-manon/pull/1538)).
- Removed unnecessary whitespace within the sidemenu in Rijkshuisstijl 2008
  ([#1459](https://github.com/minvws/nl-rdo-manon/pull/1459)).
- Type checking no longer fails on dependency declaration files
  ([#1545](https://github.com/minvws/nl-rdo-manon/pull/1545)).
- Documentation: code examples no longer show literal backticks, and the copy
  button no longer copies an empty string
  ([#1512](https://github.com/minvws/nl-rdo-manon/pull/1512)).
- Documentation: corrected SCSS import paths in the quick start guide
  ([#1511](https://github.com/minvws/nl-rdo-manon/pull/1511)).

[unreleased]: https://github.com/minvws/nl-rdo-manon/compare/v18.6.2...HEAD
