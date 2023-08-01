import classes from './Header.module.scss';
import Link from 'next/link';
import {Container, IconLogoShop, IconSearch, SHOP_HOME_PAGE_URL, useDeviceType} from "../../../../shared"
import {HeaderMenuBurgerMenu, HeaderNavigation} from "./components";
import {headers} from "next/headers";

export function Header() {

    const {isMobile, isTablet, isTouchDevice} = useDeviceType(headers)

    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <Link href={SHOP_HOME_PAGE_URL}><IconLogoShop/></Link>
                    </div>
                    <HeaderNavigation/>
                    <div className={classes.actions}>
                        <button type='button' className={classes.action}>
                            <IconSearch/>
                        </button>
                        <HeaderMenuBurgerMenu/>
                    </div>
                </div>
            </Container>
        </header>
    );
}
