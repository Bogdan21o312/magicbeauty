export function formatPhoneNumber(inputNumbersValue: string): string {
  let formattedValue = ''

  if (['3', '8', '0'].includes(inputNumbersValue[0])) {
    if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue
    formattedValue = '+38(0'
    if (inputNumbersValue.length >= 4) {
      formattedValue += '' + inputNumbersValue.substring(3, 5)
    }
    if (inputNumbersValue.length >= 6) {
      formattedValue += ') ' + inputNumbersValue.substring(5, 8)
    }
    if (inputNumbersValue.length >= 9) {
      formattedValue += ' ' + inputNumbersValue.substring(8, 10)
    }
    if (inputNumbersValue.length >= 11) {
      formattedValue += ' ' + inputNumbersValue.substring(10, 12)
    }
  } else {
    formattedValue = '+' + inputNumbersValue.substring(0, 16)
  }

  return formattedValue
}
