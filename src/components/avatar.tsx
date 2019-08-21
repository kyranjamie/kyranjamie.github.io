import React from 'react'
import styled from 'styled-components'

const RoundedImg = styled.img`
  border-radius: 50%;
  display: block;
`

export default ({ width = '60px' }) => (
  <RoundedImg
    src="static/me.jpg"
    alt="Portrait of @kyranjamie"
    width={width}
    height={width}
  />
)
