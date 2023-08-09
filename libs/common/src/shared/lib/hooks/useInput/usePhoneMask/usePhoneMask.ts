'use client'
import { useState, ClipboardEvent, ChangeEvent, KeyboardEvent } from 'react'

export function usePhoneMask(phoneValue: string, setPhoneValue: (v: string) => void) {
  // const [phoneValue, setPhoneValue] = useState('+38(0')
  const getInputNumbersValue = (input: string): string => {
    return input.replace(/\D/g, '')
  }

  const onPhonePaste = (event: ClipboardEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const inputNumbersValue = getInputNumbersValue(event.clipboardData.getData('Text'))

    if (inputNumbersValue) {
      setPhoneValue(formatPhoneNumber(inputNumbersValue))
    }
  }

  const formatPhoneNumber = (inputNumbersValue: string): string => {
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

  const onPhoneInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target
    const selectionStart = input.selectionStart || 0
    const inputNumbersValue = getInputNumbersValue(input.value)

    if (input.value.length !== selectionStart) {
      setPhoneValue(input.value)
      return
    }

    const formattedPhoneNumber = formatPhoneNumber(inputNumbersValue)
    setPhoneValue(formattedPhoneNumber)
    console.log(setPhoneValue(formattedPhoneNumber))
  }

  const onPhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Backspace' && phoneValue.length <= 5) {
      setPhoneValue('')
    }
  }

  return { phoneValue, onPhoneInput, onPhonePaste, onPhoneKeyDown }
}
