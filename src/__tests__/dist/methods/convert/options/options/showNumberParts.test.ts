//@ts-expect-error
import { convert as convertNumberToWordsRu } from 'dist/index.umd.cjs'

test('showNumberParts', () => {
  expect(convertNumberToWordsRu('1234567.12345', {
    showNumberParts: {
      integer: true,
      fractional: true,
    },
  }))
    .toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей 12 копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    showNumberParts: {
      integer: true,
      fractional: false,
    },
  })).toBe('Один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь рублей');
  expect(convertNumberToWordsRu('1234567.12345', {
    showNumberParts: {
      integer: false,
      fractional: true,
    },
  }))
    .toBe('12 копеек');
  expect(convertNumberToWordsRu('1234567.12345', {
    showNumberParts: {
      integer: false,
      fractional: false,
    },
  }))
    .toBe('');
});
