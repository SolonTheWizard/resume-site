module.exports = {
  siteMetadata: {
    title: `Sam Suddath's Portfolio`,
    description: `This is a all in one information hub for everything you need to know about Sam Suddath `,
    author: `@SolonTheWizard`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam's Resume Site`,
        short_name: `Resume`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/wizard.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.solonthewizard.com',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
