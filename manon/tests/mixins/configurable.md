# Test: configurable.test.scss

```info
Test for manon/mixins/configurable.scss
```

## Purpose

This test validates a **CSS custom property configuration mixin** that allows components to be themed and configured through CSS variables with fallback chains.

## What the mixin does

The  `configurable.scss` mixin provides a solution for creating **configurable CSS components** using custom properties.

It allows:
1. **Hierarchical theming** - Components can inherit styles from parent themes
2. **Fallback chains** - If a custom property isn't defined, it falls back to defaults
3. **Component isolation** - Each component has its own private namespace

## Key Functions Being Tested

### 1. `is-custom-property()`

**Test**: Checks if a string is a CSS custom property (starts with `--`)

```scss
$_: assert-true(is-custom-property('--test-prop'), 'Should identify custom property');
$_: assert-false(is-custom-property('test-prop'), 'Should reject non-custom property');
```

- `--test-prop` →  `true` (valid custom property)
- `test-prop` → `false` (not a custom property)

### 2. `prefix()`

**Test**: Appends a property name to CSS custom property prefixes

```scss
$result: prefix('color', (--primary, --secondary));
// Returns: (--primary-color, --secondary-color)
```

This creates a list of prefixed custom properties that can be used in fallback chains.

### 3. `property()`

**Test**: Creates nested statements with fallback chains `var()`

```scss
$prop-result: property(--primary-color);
// Returns: var(--_primary-color, var(--primary-color, revert))
```

This creates a **private variable** (`--_primary-color`) that falls back to the **public variable** (`--primary-color`), and finally to `revert`.

### 4. `context()` mixin

**Test**: Sets up configuration contexts for nested components

```scss
@include context((color, background), --base, --theme);
// Generates CSS custom properties that link base component to theme
```

## The Testing Strategy

The test uses **assertion functions** that:
- Compare expected vs actual results
- Use `@debug` for pass messages
- Use  `@error` to stop execution on failures
- Handle Sass data type differences (quoted vs unquoted strings)

## Real-World Example

This mixin enables CSS like:

```scss
.button {
  // Component can be themed at multiple levels
  color: property(--button-color, --theme-primary, blue);
  // Results in: var(--_button-color, var(--button-color, var(--theme-primary, blue)))
}

.dark-theme {
  --theme-primary: white;
}

.custom-button {
  --button-color: red; // Overrides theme
}
```

The test ensures this mixin works correctly by validating each building block function.
