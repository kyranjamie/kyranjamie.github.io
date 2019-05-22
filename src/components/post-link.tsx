import React from 'react'
import { Link } from 'gatsby'

export default ({ post }: any) => 
  <Link to={post.frontmatter.path}>
    {post.frontmatter.title} ({post.frontmatter.date})
  </Link>
