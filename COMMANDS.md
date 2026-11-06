# Local commands

Run website commands from `portfolio/` inside the downloaded repository.
Use npm; LaTeX commands additionally require Bash and `pdflatex`.
See the README for platform setup.

```sh
cd juliana-portfolio/portfolio
npm ci
npm run dev
```

Open http://localhost:3000. Stop with Control-C.

## Validate and build

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

## Generate private resume previews

```sh
npm run build:resumes
```

Or generate one PDF:

```sh
npm run build:resume -- .private/resumes/JulianaOBackend.tex
npm run build:resume -- .private/resumes/JulianaOUX.tex
npm run build:resume -- .private/resumes/JulianaOProduct.tex
```

Paths resolve from the repository root. Editable sources and unpublished
PDFs stay in ignored `.private/resumes/`. Generated PDFs go to
`.private/resumes/generated/` by default. Keep the private `resume.sty`.
The original UX source is currently absent; the default three-resume
build remains blocked for that source. Build available sources individually.

Publishing a reviewed PDF is an explicit separate operation:

```sh
LATEX_OUTPUT_DIR="$PWD/public/resumes" npm run build:resume -- .private/resumes/JulianaOBackend.tex
```

Only do this for an intentionally public PDF. The existing public PDFs
are preserved byte-for-byte by this cleanup.
The build script runs two passes and removes temporary files.

## Clean leftover LaTeX artifacts

```sh
npm run clean:latex
```

This keeps `.tex`, `.sty`, and `.pdf` files.
