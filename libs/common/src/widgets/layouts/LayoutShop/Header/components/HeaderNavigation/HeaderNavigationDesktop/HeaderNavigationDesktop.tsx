'use client'
import Link from "next/link";
import classes from "./HeaderNavigationDesktop.module.scss"
import {Links} from "../TypeLinks";

export function HeaderNavigationDesktop({links}: Links) {

    return (
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
    )
}
