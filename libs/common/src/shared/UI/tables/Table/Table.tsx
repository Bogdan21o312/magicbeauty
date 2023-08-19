'use client'
import classes from "./Table.module.scss"
import { TableProps } from './TableProps'
export function Table({children}: TableProps) {

  return (
    <table className={classes.table}>
      {children}
    </table>
  )
}
