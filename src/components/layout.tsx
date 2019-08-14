import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Navigation from './navigation'
import SocialLinks from './social-links'

const Container = styled.div`
  margin: 16px 24px;
`

const Main = styled.main``

export const Layout = ({ children }: any) => (
  <Container>
    <Header />
    <Navigation/>
    <Main>{children}</Main>
  </Container>
)
