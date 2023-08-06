import { ReactNode } from 'react'
import classes from './Main.module.scss'

export function Main({ children }: { children: ReactNode }) {
  return (
    <main className={classes.main}>
      {children}
    </main>
  )
}
