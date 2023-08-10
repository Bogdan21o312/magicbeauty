'use client'
import { useState, ClipboardEvent, ChangeEvent, KeyboardEvent, useEffect, FocusEvent } from 'react'
import { phoneRegex } from '../../../constants'
import { formatPhoneNumber, getInputNumbersValue } from './helpers'

export function usePhoneMask() {
  const [phoneValue, setPhoneValue] = useState('+38(0')
  const [phoneError, setPhoneError] = useState(false)
  const [phoneTextError, setPhoneTextError] = useState('')
  const [isEmpty, setEmpty] = useState(true)
  const [isDirty, setDirty] = useState(false)
  const [isEmptyText, setEmptyText] = useState('')
  const [formValid, setFormValid] = useState(false)

  function onPhonePaste(event: ClipboardEvent<HTMLInputElement>): void {
    event.preventDefault()
    const inputNumbersValue = getInputNumbersValue(event.clipboardData.getData('Text'))

    if (inputNumbersValue) {
      setPhoneValue(formatPhoneNumber(inputNumbersValue))
    }
  }


  function onPhoneInput(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target
    const selectionStart = input.selectionStart || 0
    const inputNumbersValue = getInputNumbersValue(input.value)

    if (input.value.length !== selectionStart) {
      return setPhoneValue(input.value)
    }

    const formattedPhoneNumber = formatPhoneNumber(inputNumbersValue)
    setPhoneValue(formattedPhoneNumber)
  }

  function onPhoneKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Backspace' && phoneValue.length <= 5) {
      setPhoneValue('')
    }
  }

  useEffect(() => {
    if (!phoneValue) {
      setEmptyText('Field cannot be empty')
      setEmpty(true)
    } else {
      setEmptyText('')
      setEmpty(false)
    }
    if (!phoneRegex.test(String(phoneValue))) {
      setPhoneTextError('Номер ведино не вірно')
      setPhoneError(true)
    } else {
      setPhoneTextError('')
      setPhoneError(false)
    }
    if (isEmpty || phoneTextError || phoneError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [phoneValue, phoneTextError, isEmpty, phoneError])

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setDirty(true)
  }

  function onBlur(e: FocusEvent<HTMLInputElement>) {
    setDirty(true)
  }

  return {
    phoneValue,
    onPhoneInput,
    onPhonePaste,
    onPhoneKeyDown,
    onChange,
    onBlur,
    isEmpty,
    formValid,
    isEmptyText,
    phoneTextError,
    isDirty
  }
}
