import { addNumbers } from './fun'

describe('addNumbers', () => {
  it('should add two numbers correctly', () => {
    const result = addNumbers(5, 3)
    expect(result).toBe(8)
  })

  it('should handle negative numbers', () => {
    const result = addNumbers(-5, -3)
    expect(result).toBe(-8)
  })

  it('should add a positive and a negative number correctly', () => {
    const result = addNumbers(5, -3)
    expect(result).toBe(2)
  })
})
