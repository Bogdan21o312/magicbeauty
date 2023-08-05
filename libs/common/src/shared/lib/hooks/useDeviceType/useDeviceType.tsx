import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers"
import {regexMobileType, regexTabletType} from "../../../constants"

export const useDeviceType = (headers: () => ReadonlyHeaders) => {
    const userAgent = headers().get('user-agent')

    const isMobile: boolean = !!userAgent && regexMobileType.test(userAgent)
    const isTablet: boolean = !!userAgent && regexTabletType.test(userAgent)
    const isTouchDevice: boolean = isMobile || isTablet

    return {isMobile, isTablet, isTouchDevice}
}
