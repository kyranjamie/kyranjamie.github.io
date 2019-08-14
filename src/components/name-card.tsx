import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Avatar from './avatar'
import { AvailableForWork } from './available-for-work'

const Name = styled.h1`
  font-size: 16px;
  margin: 8px 0 12px 0;
  font-weight: normal;
`

const StyledAvatar = styled(Avatar)`
  display: flex;
`

const Media = styled.div`
  display: flex;
  align-items: flex-start;
`

const MediaBody = styled.div`
  flex: 1;
`

const MediaImage = styled.div`
  margin-right: 20px;
`

export const NameCard = () => (
  <Media>
    <MediaImage>
      <StyledAvatar />
    </MediaImage>
    <MediaBody>
      <Name>Kyran Jamie Burraston</Name>
      <AvailableForWork />
    </MediaBody>
  </Media>
)
