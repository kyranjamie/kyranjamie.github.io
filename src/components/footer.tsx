import React from 'react'
import styled from 'styled-components'

interface SocialItemProps {
  href: string
  children: any
}

const Footer = styled.footer`
  margin: 32px 0 8px;
`

const StyledAnchor = styled.a`
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  float: left;
  clear: left;

  &:hover {
    text-decoration: underline;
  }
`

export default () => (
  <Footer>
    <StyledAnchor target="_blank" href="https://github.com/kyranjamie">Github</StyledAnchor>
    <StyledAnchor target="_blank" href="https://stackoverflow.com/users/1141891/kyranjamie">StackOverflow</StyledAnchor>
    <StyledAnchor target="_blank" href="https://www.linkedin.com/in/kyranjamie/">LinkedIn</StyledAnchor>
    <StyledAnchor target="_blank" href="https://angel.co/kyranjamie">AngelList</StyledAnchor>
    <StyledAnchor target="_blank" href="https://keybase.io/kyranjamie">Keybase</StyledAnchor>
    <StyledAnchor target="_blank" href="https://www.instagram.com/kyranjamie/">Instagram</StyledAnchor>
    <StyledAnchor target="_blank" href="https://twitter.com/kyranjamie">Twitter</StyledAnchor>
    <StyledAnchor target="_blank" href="https://open.spotify.com/user/kyrannn">Spotify</StyledAnchor>
    <StyledAnchor target="_blank" href="https://last.fm/user/kyrannn">Last.fm</StyledAnchor>
  </Footer>
)
