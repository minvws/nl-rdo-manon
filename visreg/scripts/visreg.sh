#!/bin/bash
set -e

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

usage() {
  echo "Usage: $0 {test|approve|report} [theme]"
  exit 1
}

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

run_test() {
  local theme=$1
  shift
  local available_themes=("$@")
  local themes_to_process=($(get_themes_to_process "$theme" "${available_themes[@]}"))

  local overall_exit_code=0
  for theme_name in "${themes_to_process[@]}"; do
    print_box "Running visual regression tests for theme: $theme_name"
    THEME=$theme_name docker-compose -f visreg/compose.yml run --rm visreg-test
    local current_exit_code=$?
    if [ $current_exit_code -ne 0 ]; then
      overall_exit_code=$current_exit_code
    fi
  done

  docker-compose -f visreg/compose.yml down
  return $overall_exit_code
}

run_approve() {
  local theme=$1
  shift
  local available_themes=("$@")
  local themes_to_process=($(get_themes_to_process "$theme" "${available_themes[@]}"))

  local overall_exit_code=0
  for theme_name in "${themes_to_process[@]}"; do
    print_box "Updating visual regression snapshots for theme: $theme_name"
    THEME=$theme_name docker-compose -f visreg/compose.yml run --rm visreg-update
    local current_exit_code=$?
    if [ $current_exit_code -ne 0 ]; then
      overall_exit_code=$current_exit_code
    fi
  done

  docker-compose -f visreg/compose.yml down
  return $overall_exit_code
}

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
