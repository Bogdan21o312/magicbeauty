'use client'
import classes from './TableCell.module.scss'
import { TableCellProps } from './TableCellProps'

export function TableCell({ children }: TableCellProps) {

  return (
    <td className={classes.td}>
      {children}
    </td>
  )
}
