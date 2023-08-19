import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'
import { Wrapper } from '../../../shared'
import { Stebar } from './Stebar'

export async function LayoutAdminPanel({ children }: { children: ReactNode }) {

  return (
    <Wrapper>
      <Header />
      <Main>
        <Stebar />
        {children}
      </Main>
      <Footer />
    </Wrapper>
  )
}
