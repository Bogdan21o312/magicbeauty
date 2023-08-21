import 'libs/common/src/shared/assets/styles/globals.scss'
import 'swiper/css'
import { LayoutShop } from '@magicbeauty/common/server'
import { ReactNode } from 'react'
import { Providers } from './Providers'

export const metadata = {
  title: 'Welcome to shop',
  description: 'Generated by create-nx-workspace'
}

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <LayoutShop>
            {children}
          </LayoutShop>
        </Providers>
      </body>
    </html>
  )
}
