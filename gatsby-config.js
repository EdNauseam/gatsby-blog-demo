require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Cheapskate SEO",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://www.cheapskateseo.com`,
  },
  plugins: [`gatsby-plugin-sitemap`],
};
