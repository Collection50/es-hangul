import { combineCharacter } from './combineCharacter';
import { disassembleToGroups } from './disassemble';
import { excludeLastElement } from './_internal';
import { canBeJungseong } from './utils';

/**
 * @name removeLastHangulCharacter
 * @description
 * 인자로 주어진 한글 문자열에서 가장 마지막 문자 하나를 제거하여 반환합니다.
 * ```typescript
 * removeLastHangulCharacter(
 *   // 한글 문자열
 *   words: string
 * ): string
 * ```
 * @example
 * removeLastHangulCharacter('안녕하세요 값') // 안녕하세요 갑
 * removeLastHangulCharacter('프론트엔드') // 프론트엔ㄷ
 * removeLastHangulCharacter('일요일') // 일요이
 * removeLastHangulCharacter('전화') // 전호
 * removeLastHangulCharacter('신세계') // 신세ㄱ
 */
export function removeLastHangulCharacter(words: string) {
  const lastCharacter = words[words.length - 1];
  if (lastCharacter == null) {
    return '';
  }

  const result = (() => {
    const disassembleLastCharacter = disassembleToGroups(lastCharacter);
    const [lastCharacterWithoutLastAlphabet] = excludeLastElement(disassembleLastCharacter[0]);
    if (lastCharacterWithoutLastAlphabet.length <= 3) {
      const [first, middle, last] = lastCharacterWithoutLastAlphabet;
      if (middle != null) {
        return canBeJungseong(last)
          ? combineCharacter(first, `${middle}${last}`)
          : combineCharacter(first, middle, last);
      }

      return first;
    } else {
      const [first, firstJungsung, secondJungsung, firstJongsung] = lastCharacterWithoutLastAlphabet;

      return combineCharacter(first, `${firstJungsung}${secondJungsung}`, firstJongsung);
    }
  })();

  return [words.substring(0, words.length - 1), result].join('');
}
