'use client'
import { useEffect, useState } from 'react'
import {
  digitRegex,
  emailRegex,
  lowercaseRegex,
  minLengthRegex,
  phoneRegex,
  symbolRegex,
  uppercaseRegex
} from '../../../constants'
import { IValidations } from '../../../types'

export const useValidator = (value: string, validations: IValidations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [isEmptyText, setEmptyText] = useState('')
  const [minLengthError, setMinLengthError] = useState(false)
  const [minLengthTextError, setMinLengthTextError] = useState('')
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [maxLengthTextError, setMaxLengthTextError] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailTextError, setEmailTextError] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordTextError, setPasswordTextError] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  const [phoneTextError, setPhoneTextError] = useState('')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations[validation]!) {
            setMinLengthTextError(`Field cannot contain less ${validations[validation]} characters`)
            setMinLengthError(true)
          } else {
            setMinLengthTextError('')
            setMinLengthError(false)
          }
          break
        case 'maxLength':
          if (value.length > validations[validation]!) {
            setMaxLengthTextError(`Field cannot contain more ${validations[validation]} characters`)
            setMaxLengthError(true)
          } else {
            setMaxLengthTextError('')
            setMaxLengthError(false)
          }
          break
        case 'isEmpty':
          if (!value) {
            setEmptyText('Field cannot be empty')
            setEmpty(true)
          } else {
            setEmptyText('')
            setEmpty(false)
          }
          break
        case 'isEmail':
          if (!emailRegex.test(String(value).toLowerCase())) {
            setEmailTextError('Invalid email')
            setEmailError(true)
          } else {
            setEmailTextError('')
            setEmailError(false)
          }
          break
        case 'password':
          if (!uppercaseRegex.test(String(value))) {
            setPasswordTextError('uppercaseRegex')
            setPasswordError(true)
          } else if (!lowercaseRegex.test(String(value))) {
            setPasswordTextError('lowercaseRegex')
            setPasswordError(true)
          } else if (!symbolRegex.test(String(value))) {
            setPasswordTextError('symbolRegex')
            setPasswordError(true)
          } else if (!digitRegex.test(String(value))) {
            setPasswordTextError('digitRegex')
            setPasswordError(true)
          } else if (!minLengthRegex.test(String(value))) {
            setPasswordTextError('minLengthRegex')
            setPasswordError(true)
          } else {
            setPasswordTextError('')
            setPasswordError(false)
          }
          break
        case 'phone':
          if (!phoneRegex.test(String(value))) {
            setPhoneTextError('Номер ведино не вірно')
            setPhoneError(true)
          } else {
            setPhoneTextError('')
            setPhoneError(false)
          }
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError || passwordError || phoneError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError, passwordError, phoneError])

  return {
    isEmpty,
    minLengthTextError,
    maxLengthTextError,
    formValid,
    isEmptyText,
    emailTextError,
    passwordTextError,
    phoneTextError
  }
}
