# Kinésithérapie Casa

Landing page du cabinet de kinésithérapie de Lechheb Walid à Casablanca.
Site statique React + Vite + Tailwind CSS v4, bilingue français / anglais, déployé sur Cloudflare Pages.

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

- Textes FR / EN : `src/i18n/translations.ts`
- Téléphone, nom du cabinet, ville : `src/lib/site.ts`
- Images : `public/images/`
