import { disassembleHangulToGroups } from './disassemble';
import { canBeChosung, getChosung } from './utils';

/**
 * @description 문자열이 한글초성으로만 주어진 경우
 */
function isOnlyChoseong(str: string) {
  const groups = disassembleHangulToGroups(str);
  if (groups.length === 0) {
    return false;
  }

  return groups.every(disassembled => {
    return disassembled.length === 1 && canBeChosung(disassembled[0]);
  });
}

/**
 * @deprecated choseongIncludes 사용을 권장합니다.
 */
export function chosungIncludes(x: string, y: string) {
  const trimmedY = y.replace(/\s+/g, '');

  if (!isOnlyChoseong(trimmedY)) {
    return false;
  }

  const chosungX = getChosung(x).replace(/\s+/g, '');
  const chosungY = trimmedY;

  return chosungX.includes(chosungY);
}
