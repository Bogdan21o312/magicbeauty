'use client'
import {TypeDeviceType} from "../../../../../../shared/types";
import {HeaderNavigationDesktop} from "./HeaderNavigationDesktop";
import {links} from "./links";

export function HeaderNavigation({isTouchDevice}: TypeDeviceType) {

    return (
        <>
            {isTouchDevice ?
                null
                :
                <HeaderNavigationDesktop links={links}/>
            }
        </>
    )
}
