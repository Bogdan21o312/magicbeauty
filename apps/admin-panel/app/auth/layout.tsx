import 'libs/common/src/shared/assets/styles/globals.scss'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Welcome to admin-panel',
  description: 'Generated by create-nx-workspace'
}

export default function AuthLayout({
                                     children
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang='en'>
    <body>
    {children}
    </body>
    </html>
  )
}