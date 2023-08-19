export function generateRandomNumber(digits: number) {
  const maxNumber = Math.pow(10, digits) - 1
  return Math.floor(Math.random() * maxNumber).toString().padStart(digits, '0')
}
