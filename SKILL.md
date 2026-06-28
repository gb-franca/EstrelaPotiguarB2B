---
name: estrela-potiguar-design
description: Use this skill to generate well-branded interfaces and assets for Estrela Potiguar, the night-sky tourism map of Rio Grande do Norte (attractions as stars), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view. If working on production code, you can copy assets
and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or
design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.

## Quick map of this design system
- `styles.css` — single CSS entry point. Link it (it `@import`s all tokens + fonts).
- `tokens/` — colors (semantic, dark default + `[data-theme="light"]`), typography, spacing, effects, base utilities (`.ep-starfield`, `.ep-twinkle`, `.ep-eyebrow`).
- `assets/` — uploaded fonts; logo / star mark / map pin SVGs.
- `components/core` + `components/brand` — React primitives (`.jsx` + `.d.ts` + `.prompt.md`). Read the `.prompt.md` for usage. Mount from the compiled `_ds_bundle.js` via `window.EstrelaPotiguarDesignSystem_69a35c`.
- `ui_kits/mapa/` — the flagship night-sky attraction-map app (reference composition).
- `guidelines/` — foundation specimen cards.

## Brand in one breath
Night sky = the map; each attraction = a **star**. Dark indigo (`#100F46`) canvas, warm yellow
(`#F8DE22`) star highlights with a glow, magenta (Aurora) for featured, lime (Maré) for nature.
Display in **Noto Serif**, UI in **Roboto**. Brazilian Portuguese, voice is warm and speaks to
"você". Buttons are pills; the signature effect is **glow, not shadow**; stars twinkle slowly.
Light "daytime" map theme via `data-theme="light"`.
