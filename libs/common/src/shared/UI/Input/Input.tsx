'use client'
import classes from './Input.module.scss'
import { InputProps } from './InputProps'

export function Input({
                        placeholder, type, isDirty,
                        error,
                        isEmptyText,
                        isErrorText, ...otherProps
                      }: InputProps) {

  const emptyError = isDirty && isEmptyText
  const errorText = isDirty && isErrorText

  const emptyErrorAndErrorText = emptyError || errorText

  return (
    <div className={`${classes.inputWrapper} ${emptyErrorAndErrorText && classes.errorValid}`}>
      <input type={type ? type : 'text'} className={classes.formControl} placeholder={placeholder} {...otherProps} />
      <label className={classes.controlLabel}>{placeholder}</label>
      {error &&
        <div className={classes.errors}>
          {emptyError ?
            <div className={classes.error}>{isEmptyText}</div>
            :
            errorText && <div className={classes.error}>{isErrorText}</div>
          }
        </div>
      }
    </div>
  )
}
