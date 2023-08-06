import { signIn } from 'next-auth/react'
import { UseSesion } from './a'
import { SignInForm } from './SignInForm'

async function login(data: FormData) {
  'use server'
  const res = await signIn('credentials', {
    email: data.get('email')
  })
  if (res) console.log(res)
}

export default async function Auth() {

  return (
    <div>
      {/*<form onSubmit={login}>*/}
      {/*  <input name="email"/>*/}
      {/*  <button>Submit</button>*/}
      {/*</form>*/}
      <SignInForm/>
      <UseSesion/>
    </div>
  )
}
