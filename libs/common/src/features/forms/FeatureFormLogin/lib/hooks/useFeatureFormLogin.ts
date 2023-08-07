'use client'
import { useInput } from '../../../../../shared'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FormEventHandler } from 'react'

export function useFeatureFormLogin() {
  const router = useRouter()
  const emailInput = useInput('', { isEmpty: true, isEmail: true })
  const passwordInput = useInput('', { isEmpty: true, password: true })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false
    })

    if (res && !res.error) {
      router.push('/')
    } else {
      console.log(res)
    }
  }

  const isFormValid =
    !passwordInput.formValid ||
    !emailInput.formValid

  return {
    isFormValid,
    emailInput,
    passwordInput,
    handleSubmit
  }
}
