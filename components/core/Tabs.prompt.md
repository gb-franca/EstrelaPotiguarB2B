Underline tab bar; active tab gets a glowing star-yellow indicator.

```jsx
<Tabs value={tab} onChange={setTab} items={[
  { value: 'sobre', label: 'Sobre' },
  { value: 'fotos', label: 'Fotos', count: 24 },
  { value: 'mapa', label: 'No mapa' },
]} />
```

Items may be plain strings or `{value,label,icon,count}`.
