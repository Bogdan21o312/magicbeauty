'use client'

import { Input } from '../../UI'
import { usePhoneMask } from '../../lib'
import { InputWithPhoneMaskProps } from './InputWithPhoneMaskProps'

export function InputWithPhoneMask({ ...otherProps }: InputWithPhoneMaskProps) {
  const { onPhoneKeyDown, phone, onPhoneInput, onPhonePaste } = usePhoneMask()
  return (
    <Input
      type='tel'
      placeholder='Введіть номер телефону'
      value={phone}
      onKeyDown={onPhoneKeyDown}
      onInput={onPhoneInput}
      onPaste={onPhonePaste}
      maxLength={18}
      {...otherProps}
    />
  )
}
