'use client'
import { useInput, usePhoneMask } from '../../../../../../shared'

export function useEntityFormCreateUserContent() {
  const emailInput = useInput('', { isEmpty: true, isEmail: true })
  const passwordInput = useInput('', { isEmpty: true, password: true })
  const firstNameInput = useInput('', { isEmpty: true })
  const surnameInput = useInput('', { isEmpty: true })
  const patronymicInput = useInput('', { isEmpty: true })
  const phoneInout = usePhoneMask()

  const isFormValid =
    !phoneInout.formValid ||
    !passwordInput.formValid ||
    !emailInput.formValid ||
    !firstNameInput.formValid ||
    !surnameInput.formValid ||
    !patronymicInput.formValid

  return {
    isFormValid,
    firstNameInput,
    surnameInput,
    patronymicInput,
    emailInput,
    passwordInput,
    phoneInout
  }
}
