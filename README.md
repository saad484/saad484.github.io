# Saad Aiddi — Portfolio

The portfolio is built with React and vinext for its primary deployment. A
static copy is generated for GitHub Pages so the same design can also be served
from `https://saad484.github.io/`.

## Development

```bash
npm install
npm run dev
```

## GitHub Pages

Generate the root `index.html` before committing a portfolio update:

```bash
npm run build:pages
```

GitHub Pages should remain configured to deploy from the `main` branch and the
repository root. The generated `index.html` takes precedence over Jekyll's
README rendering, and `.nojekyll` tells GitHub Pages to publish the static files
directly.
