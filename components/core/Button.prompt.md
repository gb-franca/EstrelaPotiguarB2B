Pill-shaped action button — use for any primary or secondary action; `primary` and `aurora` variants glow warmly on hover.

```jsx
<Button variant="primary" size="md" onClick={save}>Salvar roteiro</Button>
<Button variant="aurora" leadingIcon={<StarIcon/>}>Destaque</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="ghost" size="sm">Ver mais</Button>
```

Variants: `primary` (star yellow / navy text), `aurora` (magenta, for featured), `secondary` (outlined), `ghost` (text-only), `subtle` (soft-yellow tint). Sizes `sm | md | lg`. Props: `leadingIcon`, `trailingIcon`, `fullWidth`, `loading`, `disabled`. Always pill (`--radius-full`); never square the corners.
