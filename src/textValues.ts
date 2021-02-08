import genders from 'units/genders';
import {declensions} from "units/declensions";
import {stringCurrencies} from 'units/stringCurrencies';
import getSlashNumberUnitName from 'units/functions/getSlashNumberUnitName';
import {CurrencyStringValues} from 'typeScript/interfaces/CurrencyStringValues';

type DeclensionNumberName = string | {
  [key: string]: string,
};

export interface DeclensionNumberNames {
  [key: string]: [
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
    DeclensionNumberName,
  ];
};

interface NumberNames {
  numbers: DeclensionNumberNames,
  tenToNineteen: DeclensionNumberNames,
  tens: DeclensionNumberNames,
  hundreds: DeclensionNumberNames,
};

interface TextValues {
  minus: string,
  numberNames: NumberNames,
  currency: CurrencyStringValues,
  getSlashNumberUnitsNames: Function,
};

// Правила взяты отсюда http://www.fio.ru/pravila/grammatika/sklonenie-imen-chislitelnykh/
export const numberNames: NumberNames = {
  numbers: {
    [declensions.NOMINATIVE]: [
      'ноль',
      {
        [genders.MALE]: 'один',
        [genders.NEUTER]: 'одно',
        [genders.FEMALE]: 'одна',
      },
      {
        [genders.MALE]:'два',
        [genders.NEUTER]:'два',
        [genders.FEMALE]:'две',
      }, 
      'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
    ],
    [declensions.GENITIVE]: [
      'ноля',
      {
        [genders.MALE]: 'одного',
        [genders.NEUTER]: 'одного',
        [genders.FEMALE]: 'одной',
      },
      'двух', 'трёх', 'четырёх', 'пяти', 'шести', 'семи', 'восьми', 'девяти',
    ],
    [declensions.DATIVE]: [
      'нолю',
      {
        [genders.MALE]: 'одному',
        [genders.NEUTER]: 'одному',
        [genders.FEMALE]: 'одной',
      },
      'двум', 'трём', 'четырём', 'пяти', 'шести', 'семи', 'восьми', 'девяти',
    ],
    [declensions.ACCUSATIVE]: [
      'ноль',
      {
        [genders.MALE]: 'один',
        [genders.NEUTER]: 'одно',
        [genders.FEMALE]: 'одну',
      },
      {
        [genders.MALE]:'два',
        [genders.NEUTER]:'два',
        [genders.FEMALE]:'две',
      },
      'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять',
    ],
    [declensions.INSTRUMENTAL]: [
      'нолём',
      {
        [genders.MALE]: 'одним',
        [genders.NEUTER]: 'одним',
        [genders.FEMALE]: 'одной',
      },
      'двумя', 'тремя', 'четырьмя', 'пятью', 'шестью', 'семью', 'восемью', 'девятью',
    ],
    [declensions.PREPOSITIONAL]: [
      'ноле',
      {
        [genders.MALE]: 'одном',
        [genders.NEUTER]: 'одном',
        [genders.FEMALE]: 'одной',
      },
      'двух', 'трёх', 'четырёх', 'пяти', 'шести', 'семи', 'восьми', 'девяти',
    ],
  },
  tenToNineteen: {
    [declensions.NOMINATIVE]: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    [declensions.GENITIVE]: ['десяти', 'одиннадцати', 'двенадцати', 'тринадцати', 'четырнадцати', 'пятнадцати', 'шестнадцати', 'семнадцати', 'восемнадцати', 'девятнадцати'],
    [declensions.DATIVE]: ['десяти', 'одиннадцати', 'двенадцати', 'тринадцати', 'четырнадцати', 'пятнадцати', 'шестнадцати', 'семнадцати', 'восемнадцати', 'девятнадцати'],
    [declensions.ACCUSATIVE]: ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    [declensions.INSTRUMENTAL]: ['десятью', 'одиннадцатью', 'двенадцатью', 'тринадцатью', 'четырнадцатью', 'пятнадцатью', 'шестнадцатью', 'семнадцатью', 'восемнадцатью', 'девятнадцатью'],
    [declensions.PREPOSITIONAL]: ['десяти', 'одиннадцати', 'двенадцати', 'тринадцати', 'четырнадцати', 'пятнадцати', 'шестнадцати', 'семнадцати', 'восемнадцати', 'девятнадцати'],
  },
  tens: {
    [declensions.NOMINATIVE]: ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    [declensions.GENITIVE]: ['', '', 'двадцати', 'тридцати', 'сорока', 'пятидесяти', 'шестидесяти', 'семидесяти', 'восьмидесяти', 'девяноста'],
    [declensions.DATIVE]: ['', '', 'двадцати', 'тридцати', 'сорока', 'пятидесяти', 'шестидесяти', 'семидесяти', 'восьмидесяти', 'девяноста'],
    [declensions.ACCUSATIVE]: ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
    [declensions.INSTRUMENTAL]: ['', '', 'двадцатью', 'тридцатью', 'сорока', 'пятьюдесятью', 'шестьюдесятью', 'семьюдесятью', 'восемьюдесятью', 'девяноста'],
    [declensions.PREPOSITIONAL]: ['', '', 'двадцати', 'тридцати', 'сорока', 'пятидесяти', 'шестидесяти', 'семидесяти', 'восьмидесяти', 'девяноста'],
  },
  hundreds: {
    [declensions.NOMINATIVE]: ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    [declensions.GENITIVE]: ['', 'ста', 'двухсот', 'трёхсот', 'четырёхсот', 'пятисот', 'шестисот', 'семисот', 'восьмисот', 'девятисот'],
    [declensions.DATIVE]: ['', 'ста', 'двумстам', 'трёмстам', 'четырёмстам', 'пятистам', 'шестистам', 'семистам', 'восьмистам', 'девятистам'],
    [declensions.ACCUSATIVE]: ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    [declensions.INSTRUMENTAL]: ['', 'ста', 'двумястами', 'тремястами', 'четырьмястами', 'пятьюстами', 'шестьюстами', 'семьюстами', 'восемьюстами', 'девятьюстами'],
    [declensions.PREPOSITIONAL]: ['', 'ста', 'двухстах', 'трёхстах', 'четырёхстах', 'пятистах', 'шестистах', 'семистах', 'восьмистах', 'девятистах']
  },
};

const textValues: TextValues = {
  minus: 'минус',
  numberNames,
  currency: stringCurrencies,
  getSlashNumberUnitsNames: getSlashNumberUnitName,
};

export default textValues;
