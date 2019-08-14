import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNav = styled.nav`
  margin-bottom: 12px;
`

const StyledLink = styled(Link)`
  margin-right: 8px;
  position: relative;
`

export default () => (
  <StyledNav>
    <div>
      {/*<StyledLink to="/">About</StyledLink>*/}
      <StyledLink to="/projects">Projects</StyledLink>
      {/*<StyledLink to="/writing">Writing</StyledLink>*/}
    </div>
  </StyledNav>
)
