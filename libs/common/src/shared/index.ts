// UI
export { Ibg, Wrapper, Button, Text, Loader, BurgerMenu, LogoShop, Input } from './UI'

// Components
export { ModalWindow, Container } from './components'

// Types
export { TypeIbg, TypeDeviceType, IValidations } from './types'

// Icons
export {
  IconSearch,
  IconCart,
  IconPhone,
  IconBookmark,
  IconClose,
  IconPlus,
  IconLogoShop,
  IconBag,
  IconShowPassword,
  IconHidePassword
} from './assets'

// Constants
export {
  SHOP_OPT_PAGE_URL,
  SHOP_NEWS_PAGE_URL,
  SHOP_HOME_PAGE_URL,
  SHOP_CATEGORIES_PAGE_URL,
  SHOP_ABOUT_PAGE_URL,
  regexTabletType,
  regexMobileType,
  emailRegex,
  symbolRegex,
  lowercaseRegex,
  digitRegex,
  uppercaseRegex,
  minLengthRegex, phoneRegex
} from './constants'

// Lib
export {
  useDeviceType,
  bodyLock,
  bodyToggleLock,
  bodyUnlock,
  useMediaQuery,
  useScrollLessThanY,
  useInput,
  generateRandomNumber,
  usePhoneMask
} from './lib'
