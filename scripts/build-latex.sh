#!/bin/bash
set -euo pipefail

root=$(cd "$(dirname "$0")/.." && pwd)
output_dir=${LATEX_OUTPUT_DIR:-"$root/public/resumes"}

if [[ ${1:-} == --clean ]]; then
  for dir in "$root/resumes" "$root/public/resumes" "$root/.resume-build"; do
    [[ -d "$dir" ]] || continue
    find "$dir" -type f \( -name '*.aux' -o -name '*.log' -o -name '*.out' \
      -o -name '*.toc' -o -name '*.fls' -o -name '*.fdb_latexmk' \
      -o -name '*.synctex.gz' \) -delete
  done
  exit 0
fi

command -v pdflatex >/dev/null || { echo 'pdflatex is required.' >&2; exit 1; }
build_dir=$(mktemp -d "${TMPDIR:-/tmp}/portfolio-latex.XXXXXX")
trap 'rm -rf "$build_dir"' EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

if [[ $# == 0 ]]; then
  set -- "$root"/resumes/*.tex
fi

mkdir -p "$output_dir"
for source in "$@"; do
  [[ "$source" == /* ]] || source="$root/$source"
  [[ -f "$source" && "$source" == *.tex ]] || {
    echo "Expected a .tex file: $source" >&2
    exit 1
  }
  name=$(basename "$source" .tex)
  source_dir=$(dirname "$source")
  for pass in 1 2; do
    if ! (cd "$source_dir" && TEXINPUTS="$source_dir//:$root/resumes//:${TEXINPUTS:-}" \
      pdflatex -interaction=nonstopmode -halt-on-error \
      -output-directory="$build_dir" "$source") >"$build_dir/compiler.txt" 2>&1; then
      cat "$build_dir/compiler.txt" >&2
      exit 1
    fi
  done
  cp "$build_dir/$name.pdf" "$output_dir/$name.pdf"
  echo "Generated $output_dir/$name.pdf"
done
