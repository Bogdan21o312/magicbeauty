import {ReactNode} from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary"
  children: ReactNode
  widthHundredPercent?: boolean
  border?: boolean
}
