export interface SlashNumberUnitPrefixes {
  digit: string[],
  tenToNineteen: string[],
  tens: string[],
  hundreds: string[],
};

export const slashNumberUnitPrefixes: SlashNumberUnitPrefixes = {
  digit: [
    '',
    'одно',
    'двух', // "двухтысячная"
    'трёх',
    'четырёх',
    'пяти',
    'шести',
    'семи',
    'восьми',
    'девяти',
  ],
  tenToNineteen: [
    'десяти', 
    'одиннадцати', 
    'двенадцати',  // "двенадцатитысячная"
    'тринадцати', 
    'четырнадцати', 
    'пятнадцати', 
    'шестнадцати', 
    'семидесяти', 
    'восемнадцати', 
    'девятнадцати',
  ],
  tens: [
    '', 
    '', 
    'двадцати',  // "двадцатитысячная"
    'тридцати', 
    'сорока', 
    'пятидесяти', 
    'шестидесяти', 
    'семидесяти', 
    'восьмидесяти', 
    'девяносто',
  ],
  hundreds: [
    '',
    'сто',
    'двухсот', // "двухсоттысячная"
    'трёхсот',
    'четырёхсот',
    'пятисот',
    'шестисот',
    'семисот',
    'восьмисот',
    'девятисот',
  ],
};

export default slashNumberUnitPrefixes;
