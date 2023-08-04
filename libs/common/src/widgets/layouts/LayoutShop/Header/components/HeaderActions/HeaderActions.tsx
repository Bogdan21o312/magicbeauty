'use client'
import {HeaderActionsProps} from "./HeaderActionsProps";
import {BurgerMenu, IconBookmark, IconCart, IconPhone, IconSearch} from "../../../../../../shared";
import classes from "./HeaderActions.module.scss"

export function HeaderActions({isToggleBurgerMenu, toggleBurgerMenu, touchScreenOrMediaQuery, scrollHeader}: HeaderActionsProps) {
    const classesMain = `${classes.action} ${scrollHeader ? classes.scroll : ''} ${touchScreenOrMediaQuery ? classes.touchScreenOrMediaQuery : ''}`

    return (
        <div className={classesMain}>
            <button className={`${classes.icon}`}>
                <IconSearch/>
            </button>
            <button className={`${classes.icon}`}><IconPhone/></button>
            <button className={`${classes.icon}`}><IconBookmark/></button>
            <button className={`${classes.icon} ${classes.cart}`}><IconCart/></button>
            {touchScreenOrMediaQuery &&
                <div className={classes.burger}>
                    <BurgerMenu isOpen={isToggleBurgerMenu} toggleOpen={toggleBurgerMenu}/>
                </div>
            }
        </div>
    )
}
