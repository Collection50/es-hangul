---
title: susa
---

# susa

숫자를 순 우리말 [수사](https://ko.dict.naver.com/#/entry/koko/d0ce2b674cae4b44b9028f648dd458b0)로 변환하거나 [수 관형사](https://ko.dict.naver.com/#/entry/koko/c513782b82554ff499c80ec616c5b611)로 변환합니다. 주어진 숫자가 0보다 크고 100 이하일 때 유효합니다.

```typescript
function susa(
  // 변환할 숫자
  num: number,
  // 수 관형사를 사용할지 여부
  classifier?: boolean
): string;
```

## Examples

```typescript
susa(1); // '하나'
susa(2); // '둘'
susa(11); // '열하나'
susa(21); // '스물하나'
susa(99); // '아흔아홉'
susa(100); // '백'

susa(1, true); // '한'
susa(2, true); // '두'
susa(11, true); // '열한'
susa(20, true); // '스무'
susa(21, true); // '스물한'
```
