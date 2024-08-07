---
title: standardizePronunciation
---

# standardizePronunciation

Change the Hangul string to standard pronunciation.

For detailed examples, see below.

```typescript
function standardizePronunciation(
  // Input a Hangul string
  hangul: string,
  options: {
    // Set whether to apply hard sounds. Default is true."
    hardConversion: boolean;
  } = { hardConversion: true }
): string;
```

## Examples

```tsx
standardizePronunciation('디귿이'); // '디그시'
standardizePronunciation('굳이'); // '구지'
standardizePronunciation('담요'); // '딤뇨'
standardizePronunciation('침략'); // '침냑'
standardizePronunciation('먹는'); // '멍는'
standardizePronunciation('신라'); // '실라'
standardizePronunciation('놓고'); // '노코'
standardizePronunciation('곧이듣다'); // '고지듣따'
standardizePronunciation('곧이듣다', { hardConversion: false }); // '고지듣다'
standardizePronunciation('닦다'); // '닥따'
standardizePronunciation('닦다', { hardConversion: false }); // '닥다'
standardizePronunciation('있다'); // '읻따'
standardizePronunciation('있다', { hardConversion: false }); // '읻다'
standardizePronunciation('핥다'); // '할따'
standardizePronunciation('핥다', { hardConversion: false }); // '할다'
standardizePronunciation('젊다'); // '점따'
standardizePronunciation('젊다', { hardConversion: false }); // '점다'
```
