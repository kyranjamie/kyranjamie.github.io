import React from 'react'
import styled from 'styled-components'

import Header from './header'
import Navigation from './navigation'
import Footer from './footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  max-width: 640px;
  height: 100%;

  @media (min-width: 1280px) {
    max-width: 960px;
    margin: 0 auto;
  }
`

const Main = styled.main`
  flex: 1 0 auto;
`

export const Layout = ({ children }: any) => (
  <Container>
    <Header />
    <Navigation/>
    <Main>{children}</Main>
    <Footer />
  </Container>
)
