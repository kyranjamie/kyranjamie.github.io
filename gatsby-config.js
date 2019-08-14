module.exports = {
  siteMetadata: {
    name: `Kyran Burraston`,
    tagline: `Frontend developer living in Amsterdam`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/writing`,
        name: "writing",
      }
    },
    `gatsby-transformer-remark`
  ]
}
