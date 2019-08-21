import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
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
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Personal website of Frontend Developer, Kyran Burraston, @kyranjamie"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <title>Kyran Jamie Burraston</title>
    </Helmet>

    <Container>
      <Header />
      <Navigation/>
      <Main>{children}</Main>
      <Footer />
    </Container>
  </>
)
