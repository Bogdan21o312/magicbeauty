'use client'
import classes from "./LogoShop.module.scss"
import {IconBag} from "../../assets"
import {LogoShopProps} from "./LogoShopProps"

export function LogoShop({dark, text = true, small, Icon = true}: LogoShopProps) {

    const classesMain = `${classes.logo} ${dark ? classes.dark : ''} ${small ? classes.small : ''} ${!text ? classes.withoutText : ''}`

    return (
        <div className={classesMain}>
            {Icon && <IconBag/>}
            {text && <span>magicbeauty SHOP</span>}
        </div>
    )
}
