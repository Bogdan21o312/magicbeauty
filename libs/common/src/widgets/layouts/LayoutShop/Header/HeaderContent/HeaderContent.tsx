'use client'
import classes from "./HeaderContent.module.scss";
import Link from "next/link";
import {bodyToggleLock, SHOP_HOME_PAGE_URL, useMediaQuery} from "@magicbeauty/common";
import {Container, LogoShop, TypeDeviceType, useScrollLessThanY} from "../../../../../shared";
import {useState} from "react";
import {HeaderActions, HeaderNavigation} from "../components";

export function HeaderContent({isTouchDevice}: TypeDeviceType) {
    const [isToggleBurgerMenu, setToggleBurgerMenu] = useState(false)
    const media = useMediaQuery()
    const mediaSmall = useMediaQuery(600)
    const scrollHeader = useScrollLessThanY(80)
    const touchScreenOrMediaQuery = media || isTouchDevice
    const classesMain = `${classes.header} ${scrollHeader ? classes.scroll : ''} ${touchScreenOrMediaQuery ? classes.touchScreenOrMediaQuery : ''}`

    function toggleBurgerMenu() {
        bodyToggleLock()
        setToggleBurgerMenu(!isToggleBurgerMenu)
    }


    return (
        <header className={classesMain}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <Link href={SHOP_HOME_PAGE_URL}>
                            <LogoShop small={scrollHeader} text={!touchScreenOrMediaQuery && !mediaSmall}/>
                        </Link>
                    </div>
                    <HeaderNavigation
                        touchScreenOrMediaQuery={touchScreenOrMediaQuery!}
                        isToggleBurgerMenu={isToggleBurgerMenu}
                        scrollHeader={scrollHeader}
                    />
                    <HeaderActions
                        touchScreenOrMediaQuery={touchScreenOrMediaQuery!}
                        isToggleBurgerMenu={isToggleBurgerMenu}
                        toggleBurgerMenu={toggleBurgerMenu}
                        scrollHeader={scrollHeader}
                    />
                </div>
            </Container>
        </header>
    )
}
