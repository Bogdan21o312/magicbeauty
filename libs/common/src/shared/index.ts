// UI
export { Ibg, Wrapper, Button, Text, Loader, BurgerMenu, LogoShop, Input, Table, TableRow, TableCell, Select } from './UI'

// Components
export { ModalWindow, Container, Section, TitleAndLinkBlock } from './components'

// Types
export type { TypeIbg, TypeDeviceType, IValidations, TypeGelPolishesWithBrandSizePrice } from './types'

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
  ADMIN_PANEL_PRICE_AND_SIZE_PAGE_URL,
  ADMIN_PANEL_BANNER_PAGE_URL,
  ADMIN_PANEL_BRANDS_PAGE_URL,
  ADMIN_PANEL_GEL_POLISHES_PAGE_URL,
  ADMIN_PANEL_POSTS_PAGE_URL,
  SHOP_OPT_PAGE_URL,
  SHOP_HOME_PAGE_URL,
  SHOP_NEWS_PAGE_URL,
  SHOP_ABOUT_PAGE_URL,
  SHOP_CATEGORIES_PAGE_URL,
  ADMIN_PANEL_LANGUAGE_PAGE_URL
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
