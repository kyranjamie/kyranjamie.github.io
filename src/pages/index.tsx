import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Layout } from '../components/layout'
import PostLink from '../components/post-link'
import Project from '../components/project'
  
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
  render() {
    console.log(this.props);

    const { name, tagline }: any = this.props.data.site.siteMetadata
    const { edges }: any = this.props.data.allMarkdownRemark

    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  
          // <div>
          //   {Posts}
          // </div>
    return (
      <Layout>
        {/*<p>{tagline}</p>*/}
        <main>
          <div>
          </div>
        </main>
      </Layout>
    )
  }
}
