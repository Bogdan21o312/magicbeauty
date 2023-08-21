// UI
export { Ibg, Wrapper, Button, Text, Loader, BurgerMenu, LogoShop, Input, Table, TableRow, TableCell, Select } from './UI'

// Components
export { ModalWindow, Container, Section, TitleAndLinkBlock } from './components'

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
  IconHidePassword,
  IconStar,
  IconCircle,
  IconDollar,
  IconStarFull,
  IconBagOFMoney,
  IconCircleFull,
  IconLove,
  IconArrow
} from './assets'

// Constants
export {
  regexTabletType,
  regexMobileType,
  emailRegex,
  symbolRegex,
  lowercaseRegex,
  digitRegex,
  uppercaseRegex,
  minLengthRegex,
  phoneRegex,
  ADMIN_PANEL_HOME_PAGE_URL,
  ADMIN_PANEL_PRICE_AND_SIZE,
  ADMIN_PANEL_BANNER_PAGE_URL,
  ADMIN_PANEL_BRANDS_PAGE_URL,
  ADMIN_PANEL_GEL_POLISHES_PAGE_URL
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
  usePhoneMask,
  useParallaxMouseEffect
} from './lib'
