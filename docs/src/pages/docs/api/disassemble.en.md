---
title: disassemble
---

# disassemble

Completely separates a Hangul string into its individual characters by initial consonants, medial vowels, and final consonants, creating a single string.

For detailed examples, see below.

```typescript
function disassemble(
  // The Korean string to be disassembled
  str: string
): string;
```

## Examples

```tsx
disassemble('값'); // 'ㄱㅏㅂㅅ'
disassemble('값이 비싸다'); // 'ㄱㅏㅂㅅㅇㅣ ㅂㅣㅆㅏㄷㅏ'
disassemble('ㅘ'); // 'ㅗㅏ'
disassemble('ㄵ'); // 'ㄴㅈ'
```
