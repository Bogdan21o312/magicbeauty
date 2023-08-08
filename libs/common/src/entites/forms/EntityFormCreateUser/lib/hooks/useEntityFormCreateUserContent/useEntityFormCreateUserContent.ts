'use client'
import { useInput } from '../../../../../../shared'

export function useEntityFormCreateUserContent() {
  const emailInput = useInput('', { isEmpty: true, isEmail: true })
  const passwordInput = useInput('', { isEmpty: true, password: true })
  const phoneInput = useInput('', { isEmpty: true, phone: true })
  const firstNameInput = useInput('', { isEmpty: true })
  const surnameInput = useInput('', { isEmpty: true })
  const patronymicInput = useInput('', { isEmpty: true })

  const isFormValid =
    !passwordInput.formValid ||
    !emailInput.formValid ||
    !phoneInput.formValid ||
    !firstNameInput.formValid ||
    !surnameInput.formValid ||
    !patronymicInput.formValid

  return {
    isFormValid,
    firstNameInput,
    surnameInput,
    patronymicInput,
    phoneInput,
    emailInput,
    passwordInput
  }
}
