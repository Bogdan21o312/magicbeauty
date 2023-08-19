'use client'
import { ChangeEvent, useState, FocusEvent } from 'react'
import { useValidator } from './useValidator'
import { IValidations } from '../../../types'

export const useInput = (initialValue: string, validations: IValidations) => {
  const [value, setValue] = useState(initialValue)
  const [isDirty, setDirty] = useState(false)
  const valid = useValidator(value, validations)

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    setDirty(true)
  }

  function onBlur(e: FocusEvent<HTMLInputElement>) {
    setDirty(true)
  }

  return {
    value,
    onBlur,
    onChange,
    isDirty,
    ...valid
  }

}
