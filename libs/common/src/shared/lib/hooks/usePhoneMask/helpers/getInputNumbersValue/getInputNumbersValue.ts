export function getInputNumbersValue(input: string): string {
  return input.replace(/\D/g, '')
}
