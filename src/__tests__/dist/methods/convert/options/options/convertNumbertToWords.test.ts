//@ts-expect-error
import { convert as convertNumberToWordsRu } from 'dist/index.umd.cjs'

test('convertNumberToWords', () => {
  expect(convertNumberToWordsRu('1234567.12345', {
    convertNumberToWords: {
      integer: true,
      fractional: true,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей двенадцать копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    convertNumberToWords: {
      integer: true,
      fractional: false,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    convertNumberToWords: {
      integer: false,
      fractional: true,
    },
  }))
    .toBe('1234567 рублей двенадцать копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    convertNumberToWords: {
      integer: false,
      fractional: false,
    },
  }))
    .toBe('1234567 рублей 12 копеек');
});
