'use client'
import { SectionProps } from "./SectionProps"
import classes from "./Section.module.scss"

export function Section({ children, fullScreen, minusHeaderHeight }: SectionProps) {
  const allClasses = [classes.main]

  fullScreen ? allClasses.push(classes.fullScreen) : ''
  minusHeaderHeight ? allClasses.push(classes.minusHeaderHeight) : ''

  return (
    <section className={allClasses.join(' ')}>
      {children}
    </section>
  )
}
