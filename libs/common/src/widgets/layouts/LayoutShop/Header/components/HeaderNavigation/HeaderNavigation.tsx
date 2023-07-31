'use client'
import Link from "next/link";
import {links} from "./links"
import classes from "./HeaderNavigation.module.scss"
export function HeaderNavigation() {

    return (
        <nav className={classes.menu}>
            <ul className={classes.list}>
                {links.map((link) => (
                    <li key={link.link} className={classes.item}>
                        <Link href={link.link} className={classes.link}>
                            {link.test}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
