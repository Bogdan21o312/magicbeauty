'use client'
import { Button, Input } from '../../../shared'
import classes from './EntityFormRegister.module.scss'
import { useEntityFormRegister } from './lib'

export function EntityFormRegisterContent() {

  const {
    isFormValid,
    isPasswordConfirmationText,
    firstNameInput,
    passwordConfirmationInput,
    passwordInput,
    patronymicInput,
    surnameInput,
    phoneInput,
    emailInput
  } = useEntityFormRegister()

  return (
    <form className={classes.form}>
      <Input
        placeholder="І'мя"
        name='firstName'
        onChange={e => firstNameInput.onChange(e)}
        onBlur={e => firstNameInput.onBlur(e)}
        value={firstNameInput.value}
        error
        isDirty={firstNameInput.isDirty}
        isEmptyText={firstNameInput.isEmptyText}
      />
      <Input
        placeholder='Фамілія'
        name='surname'
        onChange={e => surnameInput.onChange(e)}
        onBlur={e => surnameInput.onBlur(e)}
        value={surnameInput.value}
        error
        isDirty={surnameInput.isDirty}
        isEmptyText={surnameInput.isEmptyText}
      />
      <Input
        placeholder='По батькові'
        name='patronymic'
        onChange={e => patronymicInput.onChange(e)}
        onBlur={e => patronymicInput.onBlur(e)}
        value={patronymicInput.value}
        error
        isDirty={patronymicInput.isDirty}
        isEmptyText={patronymicInput.isEmptyText}
      />
      <Input
        placeholder='Номер телефону' name='phone'
        type='tel'
        onChange={e => phoneInput.onChange(e)}
        onBlur={e => phoneInput.onBlur(e)}
        value={phoneInput.value}
        error
        isDirty={phoneInput.isDirty}
        isEmptyText={phoneInput.isEmptyText}
        isErrorText={phoneInput.phoneTextError}
      />
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
      <Input
        placeholder='Перевірити пароль'
        onChange={e => passwordConfirmationInput.onChange(e)}
        onBlur={e => passwordConfirmationInput.onBlur(e)}
        value={passwordConfirmationInput.value}
        error
        isDirty={passwordConfirmationInput.isDirty}
        isEmptyText={passwordConfirmationInput.isEmptyText}
        isErrorText={isPasswordConfirmationText}
        hide
      />
      <Button border widthHundredPercent disabled={isFormValid}>Зереєструватись</Button>
    </form>
  )
}
