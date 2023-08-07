'use client'
import { useFeatureFormLogin } from './lib'
import { Button, Input, Text } from '../../../shared'
import classes from "./FeatureFormLogin.module.scss"
export function FeatureFormLogin() {
  const {isFormValid, passwordInput, emailInput, handleSubmit} = useFeatureFormLogin()
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Text type={'titleBig'}>Title</Text>
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
      <Button border widthHundredPercent disabled={isFormValid}>Зереєструватись</Button>
    </form>
  )
}
