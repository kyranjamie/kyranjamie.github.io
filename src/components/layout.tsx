import React from 'react'
import styled from 'styled-components'

import Navigation from './navigation'
import SocialLinks from './social-links'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 44px;
  width: 20%;
`

const Main = styled.main`
  margin-top: 44px;
`

export function Layout ({ children }: any) {
  return (
    <Container>
      <Header>
        <Navigation/>
        <SocialLinks/>
      </Header>
      <Main>{children}</Main>
    </Container>
  )
}
