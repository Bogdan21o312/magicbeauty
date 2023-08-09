'use client'
import { ChangeEvent, useState, FocusEvent } from 'react'
import { useValidator } from './useValidator'
import { IValidations } from '../../../types'
import { usePhoneMask } from '../../hooks'

export const useInput = (initialValue: string, validations: IValidations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidator(value, validations)
  const { phoneValue, onPhoneInput, onPhonePaste, onPhoneKeyDown } = usePhoneMask(value, setValue)

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    setDirty(true)
  }

  function onBlur(e: FocusEvent<HTMLInputElement>) {
    setDirty(true)
  }

  return {
    value,
    phoneValue,
    onBlur,
    onChange,
    isDirty,
    onPhoneInput,
    onPhonePaste,
    onPhoneKeyDown,
    ...valid
  }

}
