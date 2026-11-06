# Help India Foundation website

A responsive institutional website for Help India Foundation, with a detailed BharatBin project showcase. The content and documentary photographs are derived from the supplied BharatBin ministry presentation, with proposed capabilities clearly separated from documented installations.

## Run locally

```bash
corepack pnpm install
corepack pnpm dev
```

Open `http://localhost:3000`.

## Production checks

```bash
corepack pnpm lint
corepack pnpm build
```

## Content updates

Shared foundation details, focus areas, contact channels and gallery captions live in `src/data/content.ts`. Page-specific copy lives alongside each route in `src/app`.
