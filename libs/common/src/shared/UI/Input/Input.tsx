'use client'
import classes from './Input.module.scss'
import { InputProps } from './InputProps'
import { useState, MouseEvent } from 'react'
import { IconHidePassword, IconShowPassword } from '../../assets'

export function Input({
                        placeholder, type, isDirty,
                        error,
                        isEmptyText,
                        isErrorText, hide, ...otherProps
                      }: InputProps) {

  const [isShowPassword, setShowPassword] = useState(false)

  const emptyError = isDirty && isEmptyText
  const errorText = isDirty && isErrorText

  const emptyErrorAndErrorText = emptyError || errorText

  const typeInput = hide ? (!isShowPassword ? 'password' : 'text') : type

  function toggleShowPassword(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    setShowPassword(!isShowPassword)
  }


  return (
    <div className={`${classes.inputWrapper} ${emptyErrorAndErrorText ? classes.errorValid : ''}'`}>
      <input type={typeInput} className={classes.formControl} placeholder={placeholder} {...otherProps} />
      <label className={classes.controlLabel}>{placeholder}</label>
      {hide && <button
        className={`${classes.showPassword} ${isShowPassword ? classes.show : ''}`}
        onClick={toggleShowPassword}
      >
        {isShowPassword ?
          <IconShowPassword />
          :
          <IconHidePassword />
        }
      </button>
      }
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
