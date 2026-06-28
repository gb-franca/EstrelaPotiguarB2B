Circular icon-only button for toolbars, map zoom/locate controls, and close actions. Always pass `label` for accessibility.

```jsx
<IconButton label="Aproximar" variant="floating"><PlusIcon/></IconButton>
<IconButton label="Favoritar" active><HeartIcon/></IconButton>
```

Variants: `solid`, `ghost` (default), `floating` (shadow, for over-map), `accent`. Sizes `sm | md | lg`. Use `active` for toggled state.
