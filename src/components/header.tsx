import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 15px;
`

const Name = styled.h1`
  font-size: 28px;
  color: #193441;
`

export default () => 
  <Link to="/">
    <StyledH1>kyranjamie.com/</StyledH1>
    <Name>Kyran Burraston</Name>
  </Link>