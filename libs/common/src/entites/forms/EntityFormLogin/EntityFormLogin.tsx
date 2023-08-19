'use client'
import { useEntityFormLogin } from './lib'
import { Button, Input } from '../../../shared'
import classes from './EntityFormLogin.module.scss'

export function EntityFormLogin() {
  const { isFormValid, passwordInput, emailInput, handleSubmit } = useEntityFormLogin()
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        placeholder='Електрона пошта'
        name='email'
        onChange={e => emailInput.onChange(e)}
        onBlur={e => emailInput.onBlur(e)}
        value={emailInput.value}
        error
        isDirty={emailInput.isDirty}
        isEmptyText={emailInput.isEmptyText}
        isErrorText={emailInput.emailTextError}
      />
      <Input
        placeholder='Пароль'
        name='password'
        onChange={e => passwordInput.onChange(e)}
        onBlur={e => passwordInput.onBlur(e)}
        value={passwordInput.value}
        error
        isDirty={passwordInput.isDirty}
        isEmptyText={passwordInput.isEmptyText}
        isErrorText={passwordInput.passwordTextError}
        hide
      />
      <Button border widthHundredPercent disabled={!isFormValid}>Зереєструватись</Button>
    </form>
  )
}
