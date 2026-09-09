# Centre de Kinésithérapie El Kandari

Landing page du Centre de Kinésithérapie El Kandari (Sidi Othmane, Casablanca).
Site statique React + Vite + Tailwind CSS v4, disponible en français, anglais, arabe et tamazight, déployé sur Cloudflare Pages.

Production : https://centre-de-kinesitherapie-el-kandari.pages.dev

## Développement

```bash
pnpm install
pnpm dev
```

## Build de production

```bash
pnpm build      # génère le dossier dist/
pnpm preview    # prévisualise le build
```

## Déploiement Cloudflare Pages

- Framework preset : **Vite**
- Build command : `pnpm build`
- Build output directory : `dist`

Les en-têtes de sécurité et le cache des assets sont définis dans `public/_headers`.

## Modifier le contenu

- Textes FR / EN / AR / ZGH : `src/i18n/translations.ts`
- Téléphones, adresse, lien Google Maps, réseaux sociaux : `src/lib/site.ts`
- Logo et favicons : `public/logo.png`, `public/favicon.png`, `public/apple-touch-icon.png`
- Images : `public/images/`
