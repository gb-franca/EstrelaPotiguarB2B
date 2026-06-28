# Estrela Potiguar — Design System

> *Cada atração é uma estrela. Monte o seu céu.*

**Estrela Potiguar** ("Potiguar Star") is a tourism-discovery map for **Rio Grande do
Norte**, Brazil — Natal and its coast. The central metaphor: the map is the **night
sky** and every attraction (beach, fort, dune field, reef, viewpoint) is a **star**
you can navigate to. The default experience is a deep-indigo night map with warm
yellow star pins; a **light "daytime" map** theme is fully supported.

This project IS the design system. An automated compiler indexes the tokens and
bundles the components — consumers link one file (`styles.css`) and load `_ds_bundle.js`.

---

## Sources & provenance
- **Brand brief:** night-sky tourism map for Rio Grande do Norte; attractions as stars;
  dark blue/purple sky with yellow star highlights; optional light map theme.
- **Base color palette** (Adobe): `#F637EC` · `#96DF29` · `#E9E0D2` · `#F8DE22` · `#100F46`.
- **Fonts provided:** `NotoSerifOriya-VariableFont_wght.ttf`, `Roboto-Italic-VariableFont.ttf` (in `assets/fonts/`).
- No prior codebase, Figma, or logo was supplied — the visual identity (logo, star
  marks, map, components) was authored here from the brief. See **Caveats** below.

---

## Content fundamentals — how Estrela Potiguar writes

- **Language:** Brazilian Portuguese (pt-BR). UI strings, place names and microcopy are Portuguese.
- **Voice:** warm, place-proud, and personal — like a well-travelled local friend, never corporate.
- **Person:** speaks to **"você"** (second person). Inclusive, inviting: *"Buscar praias perto de você"*, *"Monte o seu céu"*.
- **Tone words:** acolhedor (welcoming), luminoso, orgulhoso do lugar, tranquilo. The night-sky metaphor is leaned into ("estrelas", "céu", "constelação de roteiros").
- **Casing:** sentence case for everything (buttons, labels, titles). UPPERCASE is reserved for eyebrows/overlines with wide tracking (e.g. `LITORAL · NATAL`). Never all-caps headlines.
- **Numbers:** Brazilian formatting — comma decimals and "km" (`2,4 km`), `R$ 30`, `08h – 18h`. Ratings shown to one decimal (`4,8`).
- **Emoji:** not used in product UI. The only "emoji-like" glyph is the brand **★** star, used sparingly as a featured marker.
- **Examples:**
  - Title: *Praia da Pipa* · eyebrow: *PERTO DE VOCÊ* · status: *Aberto agora* / *Fechado*
  - CTA: *Traçar rota*, *Salvar roteiro*, *Ver no mapa*
  - Empty state: *"Nenhuma estrela por aqui. Ajuste os filtros."*
  - Tagline (editorial italic): *"onde o sertão encontra o mar"*

---

## Visual foundations

**Concept.** A celestial wayfinding system. Dark is primary (the night sky); light is the daytime map.

- **Color.** Built on five brand anchors mapped to roles:
  - **Night** `#100F46` → the sky canvas + all dark surfaces (ramp 300–950).
  - **Star** `#F8DE22` → the highlight: pins, primary accent, focus, glow.
  - **Sand** `#E9E0D2` → warm light: text on night, surfaces in light mode.
  - **Aurora** `#F637EC` (magenta) → featured / special attractions, accents.
  - **Maré** `#96DF29` (lime) → nature, trails, "open/success".
  Always consume **semantic aliases** (`--surface-card`, `--accent`, `--text-primary`), never raw `--ep-*`.
  Light theme is a single `[data-theme="light"]` scope; on light maps the interactive
  accent darkens to night-indigo (yellow stays the star fill, not a UI color).
- **Type.** Display = **Noto Serif** (warm, editorial, celestial); body/UI = **Roboto**
  (clear wayfinding). An uploaded **variable Roboto Italic** is used for editorial quotes
  (`.ep-italic` / `--font-italic`). Scale is a 1.25 major third; headings are tight-tracked.
- **Spacing.** 8px base grid (`--space-*`). Generous, airy — the sky is wide.
- **Backgrounds.** The signature is `.ep-starfield` (radial-gradient stars) over a radial
  night gradient. No photography is shipped; attraction covers fall back to a starfield
  gradient (use real photos in production via the image slot). No repeating textures, no grain.
- **Corner radii.** Soft, pebble-like (`--radius-md` 12 → `--radius-lg` 18 for cards);
  chips, pins, buttons and avatars go **full-round** (`--radius-full`). Buttons are always pills.
- **Cards.** `--surface-card` fill, 1px `--border-subtle`, `--shadow-md`. Interactive cards
  lift `-3px` on hover and brighten the border; featured cards take a magenta (`--aurora`) border.
- **Elevation.** Deep, cool night shadows (`--shadow-sm → xl`, `--shadow-float` for floating
  map UI). The signature is **glow, not drop-shadow**: `--glow-sm/md/lg` (warm yellow halo)
  on stars, selected pins, focus rings, and the moon/locate control.
- **Glass / blur.** Floating UI over the map (search cluster, region label, overlay badges)
  uses `--blur-glass` over `--glass-tint-dark|light`. Reserved for elements literally over the map.
- **Borders.** Hairline, low-contrast sand at 12–34% alpha (`--border-subtle/default/strong`).
  Focus uses the star (`--border-focus`) + a soft ring (`--ring`).
- **Motion.** Calm and celestial. `--ease-standard` for UI; **no bounce** except map pins
  dropping (`--ease-spring`). Durations 120/220/360ms. Stars **twinkle** on a slow 3.5s loop
  (`.ep-twinkle`) — disabled under `prefers-reduced-motion`.
- **Hover/press.** Hover: brighten (`brightness(1.05)`) + glow on accent buttons; soft-yellow
  wash on ghost/secondary. Press: scale down (`0.97` buttons, `0.9` icon buttons) — never a color flip.
- **Imagery vibe.** When real photos are added they should read warm and luminous (golden hour,
  sea, dunes), framed to sit under a night-to-transparent protection gradient.

---

## Iconography

- **System:** **[Lucide](https://lucide.dev)** — 24px grid, ~1.9px round stroke, outline style.
  It matches the calm, modern wayfinding tone. In production, load Lucide from its package/CDN.
  The UI kit ships a small inline mirror of the needed glyphs in `ui_kits/mapa/icons.jsx`
  (`window.EPIcons`: Search, Waves, Landmark, Mountain, Trees, Compass, Locate, Layers, Route,
  Heart, Clock, Pin, Camera, Wind, Share, chevrons, Sun…). **Substitution flag:** these are
  hand-matched to Lucide geometry, not the Lucide files themselves — swap in real Lucide in production.
- **Brand glyph:** the **shooting star** (`assets/logo/estrela-mark.svg`) is the one proprietary
  icon — a bright four-point sparkle head streaking down toward the lower-left, its trail a tuft of
  fine **shrimp aesthetascs** (the chemosensory hairs on the antennule) fanning to the upper-right.
  This is a deliberate local nod: Rio Grande do Norte is Brazil's shrimp-farming capital. Used as the
  logo, lockup (`estrela-potiguar-lockup.svg`) and map pin (`estrela-pin.svg`); the featured marker
  is a simple **★**. Rating uses a filled five-point star (conventional, readable). On the live map,
  the `MapPin` component keeps a clean coordinate-anchored sparkle (no directional trail) for legibility.
- **Category color coding:** Praias → `--info` (azure), Históricos → `--aurora` (magenta),
  Dunas → `--accent` (star yellow), Natureza → `--mare` (lime), Gastronomia → `--danger` (coral).
- **Emoji:** not used. Unicode `★` only, as a brand accent.

---

## Index / manifest

**Root**
- `styles.css` — single entry point (`@import` list only).
- `readme.md` — this guide. · `SKILL.md` — portable Agent Skill wrapper.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated; do not edit.

**`tokens/`** — `fonts.css` (`@font-face` + Roboto import), `palette.css` (raw `--ep-*`),
`colors.css` (semantic, dark + light), `typography.css`, `spacing.css` (+ radii, z), `effects.css`
(shadow, glow, blur, motion), `base.css` (element defaults + `.ep-starfield`, `.ep-twinkle`, `.ep-eyebrow`, `.ep-italic`).

**`assets/`** — `fonts/` (the two uploaded TTFs); `logo/` (`estrela-mark.svg`, `estrela-pin.svg`,
`estrela-potiguar-lockup.svg`).

**`components/core/`** — `Button`, `IconButton`, `Input`, `Badge`, `Tag`, `Card`, `Switch`,
`Tabs`, `Rating`, `Avatar`. **`components/brand/`** — `MapPin`, `AttractionCard`, `ThemeToggle`.
Each: `.jsx` + `.d.ts` + `.prompt.md`; one `*.card.html` per group. Mount via
`window.EstrelaPotiguarDesignSystem_69a35c`.

**`ui_kits/mapa/`** — the flagship night-sky attraction map app (see its `README.md`).

**`guidelines/`** — 18 foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

---

## Caveats / substitutions
- **Fonts.** "Main font: Noto Serif" — the uploaded file is *Noto Serif **Oriya*** (the Odia-script
  cut). It carries a full, well-formed Latin set with a working weight axis, so it's used as the
  display serif and renders cleanly for Portuguese. If you want the exact standard *Noto Serif*
  Latin metrics, please upload that file. Only **Roboto Italic** was provided, so upright Roboto
  weights (300/400/500/700) are pulled from Google Fonts — upload Roboto upright TTFs to go fully offline.
- **Icons.** Lucide is the chosen system but the kit uses hand-matched inline copies; load real Lucide in production.
- **Identity authored here.** No logo/Figma/codebase existed, so the star logomark, map, and
  component look were created from the brief — happy to iterate toward anything you have in mind.
