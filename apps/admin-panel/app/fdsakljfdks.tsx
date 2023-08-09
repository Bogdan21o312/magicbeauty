'use client'
import { usePhoneMask } from '@magicbeauty/common'

export function Ant() {
 const {onPhoneKeyDown, phone, onPhoneInput, onPhonePaste} = usePhoneMask()

  return (
    <div>
      <label htmlFor='phone'>Введіть номер телефону:</label>
      <input
        type='text'
        placeholder='+38 (___) ___ __ __'
        value={phone}
        onKeyDown={onPhoneKeyDown}
        onInput={onPhoneInput}
        onPaste={onPhonePaste}
        maxLength={18}
      />
    </div>
  )
}
// +38(094) 324 32 42
