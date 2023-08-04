'use client'
import {TypeDeviceType, useMediaQuery} from "../../../../../../shared";
import {HeaderMenuBurgerMenu} from "../HeaderMenuBurgerMenu";

export function HeaderActions({isTouchDevice}: TypeDeviceType) {

  const media = useMediaQuery()

  return (
    <div>
      {(media || isTouchDevice) && <HeaderMenuBurgerMenu/>}
    </div>
  )
}
