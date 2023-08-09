'use client'
import { useState, ClipboardEvent, ChangeEvent, KeyboardEvent } from 'react'

export function usePhoneMask() {
  const [phone, setPhone] = useState('')

  const getInputNumbersValue = (input: string): string => {
    return input.replace(/\D/g, '')
  }

  const onPhonePaste = (event: ClipboardEvent<HTMLInputElement>): void => {
    event.preventDefault()
    const inputNumbersValue = getInputNumbersValue(event.clipboardData.getData('Text'))

    if (inputNumbersValue) {
      setPhone(formatPhoneNumber(inputNumbersValue))
    }
  }

  const formatPhoneNumber = (inputNumbersValue: string): string => {
    let formattedValue = ''

    if (['3', '7', '8', '9'].includes(inputNumbersValue[0])) {
      // if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue
      // if (inputNumbersValue[0] === '8') inputNumbersValue = '3' + inputNumbersValue
      formattedValue = '+3'
      console.log(inputNumbersValue)
      if (inputNumbersValue.length > 1) {
        formattedValue += inputNumbersValue.substring(1, 2)
      }
      if (inputNumbersValue.length >= 2) {
        formattedValue += '(' + inputNumbersValue.substring(2, 5)
      }
      if (inputNumbersValue.length >= 5) {
        formattedValue += ') ' + inputNumbersValue.substring(5, 8)
      }
      if (inputNumbersValue.length >= 8) {
        formattedValue += ' ' + inputNumbersValue.substring(8, 10)
      }
      if (inputNumbersValue.length >= 10) {
        formattedValue += ' ' + inputNumbersValue.substring(10, 12)
      }
    } else {
      formattedValue = '+' + inputNumbersValue.substring(0, 16)
      console.log(inputNumbersValue)
    }

    return formattedValue
  }

  const onPhoneInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target
    const selectionStart = input.selectionStart || 0
    const inputNumbersValue = getInputNumbersValue(input.value)

    if (input.value.length !== selectionStart) {
      setPhone(input.value)
      return
    }

    const formattedPhoneNumber = formatPhoneNumber(inputNumbersValue)
    setPhone(formattedPhoneNumber)
  }

  const onPhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Backspace' && phone.length === 4) {
      setPhone('')
    }
  }

  return { phone, onPhoneInput, onPhonePaste, onPhoneKeyDown }
}
