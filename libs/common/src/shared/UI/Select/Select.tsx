'use client'
import classes from "./Select.module.scss"
import { SelectProps } from "./SelectProps"

export function Select({ children, title, ...otherProps }: SelectProps) {

  return (
    <div className={classes.main}>
      <select {...otherProps} className={classes.select}>
        {children}
      </select>
      <span>{title}</span>
    </div>
  )

}
