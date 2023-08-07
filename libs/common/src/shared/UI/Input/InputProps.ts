import { InputHTMLAttributes } from 'react'
import { IValidations } from '../../types'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    type?: "text" | "password" | "number" | "button" | "checkbox" | "date" | "datetime-local" | "color" | "email" | "file" | "hidden" | "image" | "month" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "time" | "url" | "week"
    placeholder: string
    validations?: IValidations
    error?: boolean
    isDirty?: boolean
    isInputtingText?: boolean
    isEmptyText?: string
    isErrorText?: string
}
