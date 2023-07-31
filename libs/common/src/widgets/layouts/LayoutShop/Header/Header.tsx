import classes from './Header.module.scss';
import Link from 'next/link';
import {Container, IconSearch, SHOP_HOME_PAGE_URL} from "../../../../shared"
import {HeaderNavigation} from "./components";

export function Header() {
    return (
        <header className={classes.header}>
            <Container>
                <div className={classes.logo}>
                    <Link href={SHOP_HOME_PAGE_URL}>LOGO</Link>
                </div>
                <HeaderNavigation/>
                <div className={classes.actions}>
                    <button type='button' className={classes.action}>
                        <IconSearch/>
                    </button>
                </div>
            </Container>
        </header>
    );
}
