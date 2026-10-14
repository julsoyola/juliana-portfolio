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

## Generate the three published resume PDFs

```sh
npm run build:resumes
```

Or generate one PDF:

```sh
npm run build:resume -- resumes/JulianaOBackend.tex
npm run build:resume -- resumes/JulianaOPlatform.tex
npm run build:resume -- resumes/JulianaOProduct.tex
```

Paths resolve from the repository root. PDFs are saved in
`portfolio/public/resumes/`. Keep `resumes/resume.sty`.
The build script runs two passes and removes temporary files.

## Clean leftover LaTeX artifacts

```sh
npm run clean:latex
```

This keeps `.tex`, `.sty`, and `.pdf` files.
