import { GENDERS } from 'src/units/genders'
import { DECLENSIONS } from 'src/units/declensions'

type DeclensionNumbers =
  | string
  | {
      [key: string]: string
    }

export type DeclensionNumbersArray = {
  [key: string]: [
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
    DeclensionNumbers,
  ]
}

type Numbers = {
  numbers: DeclensionNumbersArray
  tenToNineteen: DeclensionNumbersArray
  tens: DeclensionNumbersArray
  hundreds: DeclensionNumbersArray
}

export const MINUS = 'минус'

export const NUMBERS: Numbers = {
  numbers: {
    [DECLENSIONS.NOMINATIVE]: [
      'ноль',
      {
        [GENDERS.MALE]: 'один',
        [GENDERS.NEUTER]: 'одно',
        [GENDERS.FEMALE]: 'одна',
      },
      {
        [GENDERS.MALE]: 'два',
        [GENDERS.NEUTER]: 'два',
        [GENDERS.FEMALE]: 'две',
      },
      'три',
      'четыре',
      'пять',
      'шесть',
      'семь',
      'восемь',
      'девять',
    ],
    [DECLENSIONS.GENITIVE]: [
      'ноля',
      {
        [GENDERS.MALE]: 'одного',
        [GENDERS.NEUTER]: 'одного',
        [GENDERS.FEMALE]: 'одной',
      },
      'двух',
      'трёх',
      'четырёх',
      'пяти',
      'шести',
      'семи',
      'восьми',
      'девяти',
    ],
    [DECLENSIONS.DATIVE]: [
      'нолю',
      {
        [GENDERS.MALE]: 'одному',
        [GENDERS.NEUTER]: 'одному',
        [GENDERS.FEMALE]: 'одной',
      },
      'двум',
      'трём',
      'четырём',
      'пяти',
      'шести',
      'семи',
      'восьми',
      'девяти',
    ],
    [DECLENSIONS.ACCUSATIVE]: [
      'ноль',
      {
        [GENDERS.MALE]: 'один',
        [GENDERS.NEUTER]: 'одно',
        [GENDERS.FEMALE]: 'одну',
      },
      {
        [GENDERS.MALE]: 'два',
        [GENDERS.NEUTER]: 'два',
        [GENDERS.FEMALE]: 'две',
      },
      'три',
      'четыре',
      'пять',
      'шесть',
      'семь',
      'восемь',
      'девять',
    ],
    [DECLENSIONS.INSTRUMENTAL]: [
      'нолём',
      {
        [GENDERS.MALE]: 'одним',
        [GENDERS.NEUTER]: 'одним',
        [GENDERS.FEMALE]: 'одной',
      },
      'двумя',
      'тремя',
      'четырьмя',
      'пятью',
      'шестью',
      'семью',
      'восемью',
      'девятью',
    ],
    [DECLENSIONS.PREPOSITIONAL]: [
      'ноле',
      {
        [GENDERS.MALE]: 'одном',
        [GENDERS.NEUTER]: 'одном',
        [GENDERS.FEMALE]: 'одной',
      },
      'двух',
      'трёх',
      'четырёх',
      'пяти',
      'шести',
      'семи',
      'восьми',
      'девяти',
    ],
  },
  tenToNineteen: {
    [DECLENSIONS.NOMINATIVE]: [
      'десять',
      'одиннадцать',
      'двенадцать',
      'тринадцать',
      'четырнадцать',
      'пятнадцать',
      'шестнадцать',
      'семнадцать',
      'восемнадцать',
      'девятнадцать',
    ],
    [DECLENSIONS.GENITIVE]: [
      'десяти',
      'одиннадцати',
      'двенадцати',
      'тринадцати',
      'четырнадцати',
      'пятнадцати',
      'шестнадцати',
      'семнадцати',
      'восемнадцати',
      'девятнадцати',
    ],
    [DECLENSIONS.DATIVE]: [
      'десяти',
      'одиннадцати',
      'двенадцати',
      'тринадцати',
      'четырнадцати',
      'пятнадцати',
      'шестнадцати',
      'семнадцати',
      'восемнадцати',
      'девятнадцати',
    ],
    [DECLENSIONS.ACCUSATIVE]: [
      'десять',
      'одиннадцать',
      'двенадцать',
      'тринадцать',
      'четырнадцать',
      'пятнадцать',
      'шестнадцать',
      'семнадцать',
      'восемнадцать',
      'девятнадцать',
    ],
    [DECLENSIONS.INSTRUMENTAL]: [
      'десятью',
      'одиннадцатью',
      'двенадцатью',
      'тринадцатью',
      'четырнадцатью',
      'пятнадцатью',
      'шестнадцатью',
      'семнадцатью',
      'восемнадцатью',
      'девятнадцатью',
    ],
    [DECLENSIONS.PREPOSITIONAL]: [
      'десяти',
      'одиннадцати',
      'двенадцати',
      'тринадцати',
      'четырнадцати',
      'пятнадцати',
      'шестнадцати',
      'семнадцати',
      'восемнадцати',
      'девятнадцати',
    ],
  },
  tens: {
    [DECLENSIONS.NOMINATIVE]: [
      '',
      '',
      'двадцать',
      'тридцать',
      'сорок',
      'пятьдесят',
      'шестьдесят',
      'семьдесят',
      'восемьдесят',
      'девяносто',
    ],
    [DECLENSIONS.GENITIVE]: [
      '',
      '',
      'двадцати',
      'тридцати',
      'сорока',
      'пятидесяти',
      'шестидесяти',
      'семидесяти',
      'восьмидесяти',
      'девяноста',
    ],
    [DECLENSIONS.DATIVE]: [
      '',
      '',
      'двадцати',
      'тридцати',
      'сорока',
      'пятидесяти',
      'шестидесяти',
      'семидесяти',
      'восьмидесяти',
      'девяноста',
    ],
    [DECLENSIONS.ACCUSATIVE]: [
      '',
      '',
      'двадцать',
      'тридцать',
      'сорок',
      'пятьдесят',
      'шестьдесят',
      'семьдесят',
      'восемьдесят',
      'девяносто',
    ],
    [DECLENSIONS.INSTRUMENTAL]: [
      '',
      '',
      'двадцатью',
      'тридцатью',
      'сорока',
      'пятьюдесятью',
      'шестьюдесятью',
      'семьюдесятью',
      'восемьюдесятью',
      'девяноста',
    ],
    [DECLENSIONS.PREPOSITIONAL]: [
      '',
      '',
      'двадцати',
      'тридцати',
      'сорока',
      'пятидесяти',
      'шестидесяти',
      'семидесяти',
      'восьмидесяти',
      'девяноста',
    ],
  },
  hundreds: {
    [DECLENSIONS.NOMINATIVE]: [
      '',
      'сто',
      'двести',
      'триста',
      'четыреста',
      'пятьсот',
      'шестьсот',
      'семьсот',
      'восемьсот',
      'девятьсот',
    ],
    [DECLENSIONS.GENITIVE]: [
      '',
      'ста',
      'двухсот',
      'трёхсот',
      'четырёхсот',
      'пятисот',
      'шестисот',
      'семисот',
      'восьмисот',
      'девятисот',
    ],
    [DECLENSIONS.DATIVE]: [
      '',
      'ста',
      'двумстам',
      'трёмстам',
      'четырёмстам',
      'пятистам',
      'шестистам',
      'семистам',
      'восьмистам',
      'девятистам',
    ],
    [DECLENSIONS.ACCUSATIVE]: [
      '',
      'сто',
      'двести',
      'триста',
      'четыреста',
      'пятьсот',
      'шестьсот',
      'семьсот',
      'восемьсот',
      'девятьсот',
    ],
    [DECLENSIONS.INSTRUMENTAL]: [
      '',
      'ста',
      'двумястами',
      'тремястами',
      'четырьмястами',
      'пятьюстами',
      'шестьюстами',
      'семьюстами',
      'восемьюстами',
      'девятьюстами',
    ],
    [DECLENSIONS.PREPOSITIONAL]: [
      '',
      'ста',
      'двухстах',
      'трёхстах',
      'четырёхстах',
      'пятистах',
      'шестистах',
      'семистах',
      'восьмистах',
      'девятистах',
    ],
  },
}
