'use client'
import classes from './TableRow.module.scss'
import { TableProps } from '../Table/TableProps'

export function TableRow({ children }: TableProps) {

  return (
    <tr className={classes.tr}>
      {children}
    </tr>
  )
}
