module.exports = {
  siteMetadata: {
    name: `Kyran Burraston`,
    tagline: `Hi there, welcome to my personal website`
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Poppins',
            subsets: [`latin`],
            variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
          }
        ]
      }
    }
  ]
}
