import React from 'react'
import styled from 'styled-components'

const ProjectName = styled.h1`
  margin: 20px 0 0 0;
  font-size: 16px;
`

const Name = styled.h1`
  font-size: 28px;
  color: #193441;
`

const ProjectContent = styled.p`
  font-size: 14px;
`

const ProjectLink = styled.a`
  color: #666;
  font-size: 14px;
  margin-bottom: 2px;
  display: inline-block;
`

interface ProjectProps {
  title: string
  url: string
  children: React.ReactNode
}

export const Project = (props: ProjectProps) => {
  return (
    <>
      <ProjectName>{props.title}</ProjectName>
      <ProjectLink href={props.url}>{props.url}</ProjectLink>
      <ProjectContent>{props.children}</ProjectContent>
    </>
  )
}
