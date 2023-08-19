import { ReactNode, SelectHTMLAttributes } from "react"

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode
  title: string
}
