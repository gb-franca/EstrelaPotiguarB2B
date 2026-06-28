The primary content unit — one tourism attraction. Used in result lists, the detail sheet, and favorites. Composes `Rating` and `Badge`; the cover falls back to a starfield gradient when no image is supplied.

```jsx
<AttractionCard
  name="Praia da Pipa" category="Praia" categoryColor="var(--info)"
  image={url} rating={4.8} reviews={1240}
  distance="82 km" open price="Grátis" onClick={openSheet}
/>
<AttractionCard name="Forte dos Reis Magos" category="Histórico"
  categoryColor="var(--aurora)" featured rating={4.6} open={false} />
```

Props: `name`, `category`, `categoryColor`, `image`, `rating`, `reviews`, `distance`, `open`, `featured`, `price`, `favorite`, `onFavorite`.
