import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import { AvailableForWork } from '../components/available-for-work'
import { NameCard } from '../components/name-card'
import PostLink from '../components/post-link'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default class IndexPage extends React.Component<any, {}> {
  render () {
    const { name, tagline, lookingForWork }: any = this.props.data.site.siteMetadata
    const { edges }: any = this.props.data.allMarkdownRemark

    const Posts = edges
      .filter((edge: any) => !!edge.node.frontmatter.date)
      .map((edge: any) => <PostLink key={edge.node.id} post={edge.node} />)

    return (
      <Layout>
        <NameCard />
        <p>Thanks for stopping by.</p>
        <p>
          I’m a frontend developer based in Amsterdam.
          Over the last few years I’ve worked with product companies such as Usabilla, GoldRepublic,
          and Blockport, building web applications used by thousands of people.
        </p>
      </Layout>
    )
  }
}
