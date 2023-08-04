'use client'
import classes from "./BurgerMenu.module.scss"
import {BurgerMenuProps} from "./BurgerMenuProps";

export function BurgerMenu({isOpen, toggleOpen}: BurgerMenuProps) {

    const classesBurger = `${classes.burger} ${isOpen ? classes.menuOpen : ''}`

    return (
        <button onClick={toggleOpen} className={classesBurger}>
            <span><span></span></span>
        </button>
    )
}
