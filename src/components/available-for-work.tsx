import React from 'react'
import styled from 'styled-components'

const StyledMessage = styled.h3`
  font-weight: normal;
  font-size: 14px;
  position: relative;
  padding-left: 18px;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
    top: 3px;
    background-color: #1ccd1d;
    border-radius: 50%;
  }
`

export const AvailableForWork = () => (
  <StyledMessage>
    Available for new opportunities
  </StyledMessage>
)
