import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledHeader = styled.header`
  margin-bottom: 12px;
`

const StyledLink = styled(Link)`
  display: inline-block;
`

export default () => (
  <StyledHeader>
    <StyledLink to="/">kyranjamie.com</StyledLink>
  </StyledHeader>
)
