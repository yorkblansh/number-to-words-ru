import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import set from 'lodash/set'
import defaultOptions from 'src/defaultOptions'
import stringCurrencies from 'src/units/stringCurrencies'
import declensions from 'src/units/declensions'
import updateObjectDeep from 'src/functions/updateObjectDeep'
import ConvertOptions from 'src/typeScript/interfaces/ConvertOptions'
import CustomCurrency from 'src/typeScript/interfaces/CustomCurrency'

/**
 * Создать объект валюты на основе объекта валюты пользователя.
 * @param {ConvertOptions} convertOptions - Опции конвертирования валюты.
 * @return {CustomCurrency} Готовый для использования объект валюты.
 */
const getCustomCurrency = (convertOptions: ConvertOptions): CustomCurrency => {
  const userCurrencyObject: any = cloneDeep(convertOptions.currency)
  // Название валюты по умолчанию
  const defaultCurrency: any = defaultOptions.currency
  // Объект валюты по умолчанию
  const defaultCurrencyObject = stringCurrencies[defaultCurrency]
  let editedCurrencyObject: CustomCurrency = cloneDeep(defaultCurrencyObject)
  // Обновить объект по умолчанию новыми значениями
  editedCurrencyObject = updateObjectDeep(
    editedCurrencyObject,
    userCurrencyObject
  )
  // Заменить падежи в объекте currencyNameDeclensions
  // данными из массива currencyNameCases
  // currencyNameCases[0]
  if (
    get(userCurrencyObject, [
      'currencyNameDeclensions',
      declensions.NOMINATIVE,
      0,
    ]) === undefined &&
    get(userCurrencyObject, ['currencyNameCases', 0]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['currencyNameDeclensions', declensions.NOMINATIVE, 0],
      userCurrencyObject.currencyNameCases[0]
    )
  }
  // currencyNameCases[1]
  if (
    get(userCurrencyObject, [
      'currencyNameDeclensions',
      declensions.GENITIVE,
      0,
    ]) === undefined &&
    get(userCurrencyObject, ['currencyNameCases', 1]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['currencyNameDeclensions', declensions.GENITIVE, 0],
      userCurrencyObject.currencyNameCases[1]
    )
  }
  // currencyNameCases[2]
  if (
    get(userCurrencyObject, [
      'currencyNameDeclensions',
      declensions.GENITIVE,
      1,
    ]) === undefined &&
    get(userCurrencyObject, ['currencyNameCases', 2]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['currencyNameDeclensions', declensions.GENITIVE, 1],
      userCurrencyObject.currencyNameCases[2]
    )
  }
  // Заменить падежи в объекте fractionalPartNameDeclensions
  // данными из массива fractionalPartNameCases
  // fractionalPartNameCases[0]
  if (
    get(userCurrencyObject, [
      'fractionalPartNameDeclensions',
      declensions.NOMINATIVE,
      0,
    ]) === undefined &&
    get(userCurrencyObject, ['fractionalPartNameCases', 0]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['fractionalPartNameDeclensions', declensions.NOMINATIVE, 0],
      userCurrencyObject.fractionalPartNameCases[0]
    )
  }
  // fractionalPartNameCases[1]
  if (
    get(userCurrencyObject, [
      'fractionalPartNameDeclensions',
      declensions.GENITIVE,
      0,
    ]) === undefined &&
    get(userCurrencyObject, ['fractionalPartNameCases', 1]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['fractionalPartNameDeclensions', declensions.GENITIVE, 0],
      userCurrencyObject.fractionalPartNameCases[1]
    )
  }
  // fractionalPartNameCases[2]
  if (
    get(userCurrencyObject, [
      'fractionalPartNameDeclensions',
      declensions.GENITIVE,
      1,
    ]) === undefined &&
    get(userCurrencyObject, ['fractionalPartNameCases', 2]) !== undefined
  ) {
    set(
      editedCurrencyObject,
      ['fractionalPartNameDeclensions', declensions.GENITIVE, 1],
      userCurrencyObject.fractionalPartNameCases[2]
    )
  }
  // Удалить объекты currencyNameCases и fractionalPartNameCases
  delete editedCurrencyObject.currencyNameCases
  delete editedCurrencyObject.fractionalPartNameCases
  return editedCurrencyObject
}

export default getCustomCurrency
