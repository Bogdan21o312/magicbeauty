'use client'
import {bodyToggleLock, BurgerMenu} from "../../../../../../shared";
import {useState} from "react";

export function HeaderMenuBurgerMenu() {
    const [isToggleMenu, setToggleMenu] = useState(false)

    function toggleMenu() {
        setToggleMenu(!isToggleMenu)
        bodyToggleLock()
    }

    return <BurgerMenu isOpen={isToggleMenu} toggleOpen={toggleMenu}/>
}
