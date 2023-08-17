'use client'
import classes from "./Icons.module.scss"
import { IconBagOFMoney, IconCircle, IconCircleFull, IconDollar, IconStar, IconStarFull } from "../../../../../shared"
import { useIcons } from "./lib"

export function Icons() {
  const { parallaxRef01, parallaxRef02, parallaxRef03, parallaxRef04, parallaxRef05, parallaxRef06 } = useIcons()

  return (
    <div className={classes.icons}>
      <div ref={parallaxRef01} className={`${classes.icon} ${classes.icon_01}`}>
        <IconDollar />
      </div>
      <div ref={parallaxRef02} className={`${classes.icon} ${classes.icon_02}`}>
        <IconStar />
      </div>
      <div ref={parallaxRef03} className={`${classes.icon} ${classes.icon_03}`}>
        <IconCircle />
      </div>
      <div ref={parallaxRef04} className={`${classes.icon} ${classes.icon_04}`}>
        <IconBagOFMoney />
      </div>
      <div ref={parallaxRef05} className={`${classes.icon} ${classes.icon_05}`}>
        <IconCircleFull />
      </div>
      <div ref={parallaxRef06} className={`${classes.icon} ${classes.icon_06}`}>
        <IconStarFull />
      </div>
    </div>
  )
}
