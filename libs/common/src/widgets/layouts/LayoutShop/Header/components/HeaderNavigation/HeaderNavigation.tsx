'use client'
import {links} from "./links"
import classes from "./HeaderNavigation.module.scss"
import Link from "next/link"
import {HeaderNavigationProps} from "./HeaderNavigationProps"

export function HeaderNavigation({touchScreenOrMediaQuery, isToggleBurgerMenu, scrollHeader}: HeaderNavigationProps) {
    const classesMain = `${classes.main} ${touchScreenOrMediaQuery ? classes.touchScreenOrMediaQuery : ''} ${isToggleBurgerMenu ? classes.open : ''} ${scrollHeader ? classes.scroll : ''}`

    return (
        <div className={classesMain}>
            <nav className={classes.menu}>
                <ul className={classes.list}>
                    {links.map((link) => (
                        <li key={link.link} className={classes.item}>
                            <Link href={link.link} className={classes.link}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
