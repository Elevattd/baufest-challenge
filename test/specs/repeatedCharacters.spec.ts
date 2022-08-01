import isValid from '@/repeatedCharacters';

describe('RepeatedCharactersTest', () => {
  test('isValidSimple', () => {
    expect(isValid('a3o1oa3')).toBeTruthy();
    expect(isValid('aa3311oo')).toBeTruthy();
  });
  test('isValidWithSpaces', () => {
    expect(isValid(' ellemmeennttaall  mmaattssssnn')).toBeTruthy();
    expect(isValid(' eelleemmeennttaall  mmii  qquueerriiddoo  wwaattssoonn')).toBeFalsy();
  });
  test('isValidWithExtraChar', () => {
    expect(isValid('aabbccc')).toBeTruthy();
    expect(isValid('aaabbc')).toBeFalsy();
  });
});
