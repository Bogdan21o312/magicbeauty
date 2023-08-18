import 'libs/common/src/shared/assets/styles/globals.scss'
import { ReactNode } from 'react'
import { LayoutAdminPanel } from '@magicbeauty/common/server'
import { AuthProvider } from '@magicbeauty/common'
import Link from 'next/link'

export const metadata = {
  title: 'Welcome to admin-panel',
  description: 'Generated by create-nx-workspace'
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <LayoutAdminPanel>
            <Link href='/'>home</Link><Link href='/users'>users</Link><Link href='/gel-polishes'>gel</Link>
            {children}
          </LayoutAdminPanel>
        </AuthProvider>
      </body>
    </html>
  )
}
