import classes from "./Button.module.scss"
import {ButtonProps} from "./ButtonProps"

export function Button({variant, children, widthHundredPercent, border, ...otherProps}: ButtonProps) {

  const classesName = [classes.main]
  variant === "primary" && classesName.push(classes.clPrimary)
  variant === "secondary" && classesName.push(classes.clSecondary)
  widthHundredPercent && classesName.push(classes.clWidthHundredPercent)
  border && classesName.push(classes.clBorder)

  return <button className={classesName.join(' ')} {...otherProps}>{children}</button>

}
