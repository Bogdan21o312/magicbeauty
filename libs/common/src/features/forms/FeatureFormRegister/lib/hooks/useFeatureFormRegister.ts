'use client'
import { useInput } from '../../../../../shared'
import { useEffect, useState } from 'react'

export function useFeatureFormRegister() {
  const emailInput = useInput('', { isEmpty: true, isEmail: true })
  const passwordInput = useInput('', { isEmpty: true, password: true })
  const passwordConfirmationInput = useInput('', { isEmpty: true, password: true })
  const phoneInput = useInput('', { isEmpty: true, phone: true })
  const firstNameInput = useInput('', { isEmpty: true })
  const surnameInput = useInput('', { isEmpty: true })
  const patronymicInput = useInput('', { isEmpty: true })
  const [isPasswordConfirmationText, setPasswordConfirmationText] = useState('')
  const [isPasswordConfirmation, setPasswordConfirmation] = useState(false)

  useEffect(() => {
    if (passwordInput.value === passwordConfirmationInput.value) {
      setPasswordConfirmation(true)
      setPasswordConfirmationText('')
    } else {
      setPasswordConfirmation(false)
      setPasswordConfirmationText('Pas')
    }
  }, [passwordConfirmationInput.value, passwordInput.value, isPasswordConfirmation])

  const isFormValid =
    !passwordInput.formValid ||
    !emailInput.formValid ||
    !phoneInput.formValid ||
    !firstNameInput.formValid ||
    !surnameInput.formValid ||
    !patronymicInput.formValid ||
    !isPasswordConfirmation

  return {
    isFormValid,
    firstNameInput,
    isPasswordConfirmationText,
    surnameInput,
    patronymicInput,
    phoneInput,
    emailInput,
    passwordInput,
    passwordConfirmationInput
  }
}
