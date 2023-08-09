import { InputHTMLAttributes } from 'react'

export type InputWithPhoneMaskProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'placeholder' | 'onKeyDown' | 'onInput' | 'onPaste' | 'maxLength'>
