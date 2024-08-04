import { defined } from '../../_internal';
import { disassembleCompleteHangulCharacter } from '../../disassembleCompleteHangulCharacter';
import { transform18th } from './transform18th';

describe('transform18th', () => {
  it('받침 "ㄱ, ㄲ, ㅋ, ㄳ, ㄺ"일 경우', () => {
    const current = defined(disassembleCompleteHangulCharacter('먹'));
    const next = defined(disassembleCompleteHangulCharacter('는'));

    expect(transform18th(current, next)).toEqual({
      current: {
        choseong: 'ㅁ',
        jungseong: 'ㅓ',
        jongseong: 'ㅇ',
      },
    });
  });

  it('받침 "ㄷ, ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ"일 경우', () => {
    const current = defined(disassembleCompleteHangulCharacter('닫'));
    const next = defined(disassembleCompleteHangulCharacter('는'));

    expect(transform18th(current, next)).toEqual({
      current: {
        choseong: 'ㄷ',
        jungseong: 'ㅏ',
        jongseong: 'ㄴ',
      },
    });
  });

  it('받침 "ㅂ, ㅍ, ㄼ, ㄿ, ㅄ"일 경우', () => {
    const current = defined(disassembleCompleteHangulCharacter('잡'));
    const next = defined(disassembleCompleteHangulCharacter('는'));

    expect(transform18th(current, next)).toEqual({
      current: {
        choseong: 'ㅈ',
        jungseong: 'ㅏ',
        jongseong: 'ㅁ',
      },
    });
  });
});
