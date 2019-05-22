import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: 15px;
`

const Name = styled.h1`
  font-size: 28px;
  color: #193441;
`

export default props => 
  <>
    <StyledH1>{props.name}</StyledH1>
    {/* image */}
    <p>{props.text}</p>
  </>