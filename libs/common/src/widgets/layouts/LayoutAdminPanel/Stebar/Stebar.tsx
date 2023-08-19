import Link from "next/link"
import { ADMIN_PANEL_BANNER_PAGE_URL, ADMIN_PANEL_GEL_POLISHES_PAGE_URL, ADMIN_PANEL_HOME_PAGE_URL, ADMIN_PANEL_PRICE_AND_SIZE, ADMIN_PANEL_BRANDS_PAGE_URL } from "../../../../shared"

const data = [
  { text: 'Головна', link: ADMIN_PANEL_HOME_PAGE_URL },
  { text: 'Банер', link: ADMIN_PANEL_BANNER_PAGE_URL },
  { text: 'Гель лаки', link: ADMIN_PANEL_GEL_POLISHES_PAGE_URL },
  { text: 'Бренди', link: ADMIN_PANEL_BRANDS_PAGE_URL },
  { text: 'Ціна + розмір', link: ADMIN_PANEL_PRICE_AND_SIZE },
]
export function Stebar() {

  return (
    <div>
      <nav>
        <ul>
          {data.map(link =>
            <li key={link.link}>
              <Link href={link.link}>{link.text}</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}
