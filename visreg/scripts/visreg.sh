#!/bin/bash
# This script manages the visual regression tests for the Manon design system
# themes using Playwright and Docker.
#
# It can be used to run tests, approve changes, and view reports for one or
# all themes.
#
# Arguments:
#   $1: The command to execute. Must be one of:
#       - test: Runs the visual regression tests.
#       - approve: Approves any visual changes and updates the snapshots.
#       - report: Opens the test report for a specific theme.
#   $2: (Optional) The name of the theme to process. If not provided, the
#       command will run for all available themes (for 'test' and 'approve')
#       or open the default report (for 'report').
#
# The script performs the following steps:
#
# 1. Determines the available themes by scanning the `themes` directory.
# 2. Based on the command and optional theme argument, it identifies which
#    theme(s) to process.
# 3. For the 'test' and 'approve' commands, it iterates through the selected
#    themes and runs the corresponding Docker Compose service (`visreg-test` or
#    `visreg-update`). The theme name is passed as an environment variable (`THEME`)
#    to the Docker container.
# 4. For the 'report' command, it opens the generated Playwright report for the
#    specified theme (or a default) in the default web browser.
# 5. Helper functions are used for printing formatted output and handling themes.
set -e

# Prints a message inside a decorative box.
#
# Arguments:
#   $1: The message to display.
print_box() {
  local WIDTH=80
  local msg="$1"

  local inner=$((WIDTH - 2))

  # Truncate if message is too long
  if ((${#msg} > inner)); then
    msg="${msg:0:$((inner - 3))}..."
  fi

  local padding=$((inner - ${#msg}))
  local left=$((padding / 2))
  local right=$((padding - left))

  local top bottom middle

  top="╔$(printf '═%.0s' $(seq 1 $inner))╗"
  bottom="╚$(printf '═%.0s' $(seq 1 $inner))╝"
  middle="║$(printf ' %.0s' $(seq 1 $left))$msg$(printf ' %.0s' $(seq 1 $right))║"

  echo ""
  echo "$top"
  echo "$middle"
  echo "$bottom"
  echo ""
}

# Prints the script's usage instructions and exits.
usage() {
  echo "Usage: $0 {test|approve|report} [theme]"
  exit 1
}

# Scans the `themes` directory to find all available theme names.
# It excludes common non-theme directories.
#
# Returns:
#   A space-separated string of theme names.
get_available_themes() {
  local themes=()
  for dir in themes/*/; do
    dir=${dir%*/} # remove the trailing slash
    theme_name=$(basename "$dir")

    # Exclude non-theme directories
    if [[ ! " dist LICENSES node_modules scripts " =~ " ${theme_name} " ]]; then
      themes+=("$theme_name")
    fi
  done
  echo "${themes[@]}"
}

# Determines which themes to process based on user input.
# If a specific theme is provided and valid, it's returned. Otherwise, all
# available themes are returned.
#
# Arguments:
#   $1: The theme name provided by the user (optional).
#   $@: The list of all available themes.
#
# Returns:
#   A space-separated string of theme names to process.
get_themes_to_process() {
  local theme_arg=$1
  shift
  local available_themes=("$@")
  local themes_to_process=()

  if [ -n "$theme_arg" ]; then
    if [[ " ${available_themes[*]} " =~ " $theme_arg " ]]; then
      themes_to_process=("$theme_arg")
    else
      echo "Invalid theme: $theme_arg"
      echo "Available themes: ${available_themes[*]}"
      exit 1
    fi
  else
    themes_to_process=("${available_themes[@]}")
  fi
  echo "${themes_to_process[@]}"
}

# Runs the visual regression tests for the specified theme(s).
# It iterates through the themes, setting the `THEME` environment variable and
# running the `visreg-test` service via Docker Compose.
#
# Arguments:
#   $1: The theme name provided by the user (optional).
#   $@: The list of all available themes.
run_test() {
  local theme=$1
  shift
  local available_themes=("$@")
  local themes_to_process=($(get_themes_to_process "$theme" "${available_themes[@]}"))

  local overall_exit_code=0
  for theme_name in "${themes_to_process[@]}"; do
    print_box "Running visual regression tests for theme: $theme_name"
    THEME=$theme_name docker compose -f visreg/compose.yml run --rm visreg-test
    local current_exit_code=$?
    if [ $current_exit_code -ne 0 ]; then
      overall_exit_code=$current_exit_code
    fi
  done

  docker compose -f visreg/compose.yml down
  return $overall_exit_code
}

# Approves visual changes and updates snapshots for the specified theme(s).
# It iterates through the themes, setting the `THEME` environment variable and
# running the `visreg-update` service via Docker Compose.
#
# Arguments:
#   $1: The theme name provided by the user (optional).
#   $@: The list of all available themes.
run_approve() {
  local theme=$1
  shift
  local available_themes=("$@")
  local themes_to_process=($(get_themes_to_process "$theme" "${available_themes[@]}"))

  local overall_exit_code=0
  for theme_name in "${themes_to_process[@]}"; do
    print_box "Updating visual regression snapshots for theme: $theme_name"
    THEME=$theme_name docker compose -f visreg/compose.yml run --rm visreg-update
    local current_exit_code=$?
    if [ $current_exit_code -ne 0 ]; then
      overall_exit_code=$current_exit_code
    fi
  done

  docker compose -f visreg/compose.yml down
  return $overall_exit_code
}

# Opens the Playwright test report for a specific theme.
# Defaults to 'icore-open' if no theme is specified.
#
# Arguments:
#   $1: The theme name for which to open the report.
#   $@: The list of all available themes.
run_report() {
  local theme_to_open=$1
  shift
  local available_themes=("$@")

  if [ -z "$theme_to_open" ]; then
    print_box "No theme specified. Opening report for default theme: icore-open"
    theme_to_open="icore-open"
  fi

  if [[ " ${available_themes[*]} " =~ " ${theme_to_open} " ]]; then
    local report_path="visreg/report/${theme_to_open}/index.html"
    if [ -f "$report_path" ]; then
      print_box "Opening report for theme: $theme_to_open"
      xdg-open "$report_path" || open "$report_path"
    else
      echo "Report for theme '$theme_to_open' not found at '$report_path'"
      exit 1
    fi
  else
    echo "Invalid theme: $theme_to_open"
    echo "Available themes: ${available_themes[*]}"
    exit 1
  fi
}

main() {
  local command=$1
  local theme=$2
  local available_themes=($(get_available_themes))

  case "$command" in
  test)
    run_test "$theme" "${available_themes[@]}"
    ;;
  approve)
    run_approve "$theme" "${available_themes[@]}"
    ;;
  report)
    run_report "$theme" "${available_themes[@]}"
    ;;
  *)
    usage
    ;;
  esac
}

main "$@"
