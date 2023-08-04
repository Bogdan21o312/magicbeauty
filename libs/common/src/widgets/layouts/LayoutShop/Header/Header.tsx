import classes from './Header.module.scss';
import Link from 'next/link';
import {Container, IconLogoShop, IconSearch, SHOP_HOME_PAGE_URL, useDeviceType} from "../../../../shared"
import {HeaderActions, HeaderNavigation} from "./components";
import {headers} from "next/headers";

export function Header() {

  const {isTouchDevice} = useDeviceType(headers)

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.content}>
          <div className={classes.logo}>
            <Link href={SHOP_HOME_PAGE_URL}><IconLogoShop/></Link>
          </div>
          <HeaderNavigation isTouchDevice={isTouchDevice}/>
          <div className={classes.actions}>
            <button type='button' className={classes.action}>
              <IconSearch/>
            </button>
            <HeaderActions isTouchDevice={isTouchDevice}/>
          </div>
        </div>
      </Container>
    </header>
  );
}
