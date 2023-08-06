import { ReactNode } from 'react'
import {Footer} from './Footer'
import {Header} from './Header'
import {Main} from './Main'
import {Wrapper} from "../../../shared"
export async function LayoutAdminPanel({children}: { children: ReactNode }) {

  return (
    <Wrapper>
      <Header/>
      <Main>{children}</Main>
      <Footer/>
    </Wrapper>
  )
}
