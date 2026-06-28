Day/night theme toggle (sun ↔ moon). Uncontrolled by default — it flips `data-theme` on `<html>`. Control it with `theme` + `onChange` to manage state yourself.

```jsx
<ThemeToggle />                                  // self-managing
<ThemeToggle theme={t} onChange={setT} />        // controlled
```
