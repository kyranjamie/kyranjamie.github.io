import React from 'react'
import styled from 'styled-components'

interface SocialItemProps {
  href: string
  children: any
}

const StyledAnchor = styled.a`
  display: block;
  font-size: 12px;
`

// const SocialItem = ({ href, children }: SocialItemProps) => (
//   <StyledAnchor href={href} target="_blank" className="social-link">{children}</StyledAnchor>
// )

export default () => (
  <footer>
    <a target="_blank" href="https://github.com/kyranjamie">Github</a>
    <a target="_blank" href="https://twitter.com/kyranjamie">Twitter</a>
    <a target="_blank" href="https://www.linkedin.com/in/kyranburraston">LinkedIn</a>
    <a target="_blank" href="https://angel.co/kyranjamie">AngelList</a>
    <a target="_blank" href="https://stackoverflow.com/users/1141891/kyranjamie">StackOverflow</a>
    <a target="_blank" href="https://keybase.io/kyranjamie">Keybase</a>
    <a target="_blank" href="https://open.spotify.com/user/kyrannn">Spotify</a>
    <a target="_blank" href="https://last.fm/user/kyrannn">Last.fm</a>
  </footer>
)
