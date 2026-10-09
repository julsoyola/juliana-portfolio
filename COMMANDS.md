# Local commands

Run these commands from the website folder:

```bash
cd /Users/julso/Developer/juliana-portfolio/portfolio
```

## Run the portfolio

Install dependencies when setting up the project:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000. Press Control-C to stop the server.

## Check and build the site

```bash
npm run lint
npm run build
```

After a successful build, run the production server locally:

```bash
npm run start
```

## Generate portfolio PDFs

Requires `pdflatex`, provided by MacTeX.
Generate the Backend, Platform, and Product PDFs:

```bash
npm run build:resumes
```

Or generate one PDF:

```bash
npm run build:resume -- resumes/JulianaOBackend.tex
npm run build:resume -- resumes/JulianaOPlatform.tex
npm run build:resume -- resumes/JulianaOProduct.tex
```

Resume sources stay in the repository’s `resumes/` folder.
The build script resolves the source paths shown above.

PDFs are saved in `portfolio/public/resumes` from the repository root.
Temporary LaTeX files are removed automatically.
Keep `resumes/resume.sty`; it is required.

## Generate the local UX PDF

```bash
npm run build:resume -- resumes/JulianaOyolaUX.tex
```

The PDF is saved in `portfolio/public/resumes/JulianaOyolaUX.pdf`.
The UX source and PDF are ignored by Git and excluded from
the default portfolio PDF build.

## Remove leftover LaTeX build artifacts

```bash
npm run clean:latex
```

This keeps `.tex`, `.sty`, and `.pdf` files.
