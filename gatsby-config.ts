/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// import {config} from 'dotenv';

// config({
//   path: `.env.${process.env.NODE_ENV}`
// });

// import path from 'path';

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Michael Lewis | Award Winning Certified Drupal Developer Profile`,
    description: `Michael Lewis is an Acquia Certified, Award Winning Web Developer who has 15 years of experience in technologies such as Drupal, React, Python, and Google Cloud.`,
    author: `@seismicmike`,
    siteUrl: `https://michaellewisdeveloper.com/`
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-minify',
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-fonts-with-attributes',
      options: {
        fonts: ['Raleway:400,600,700,900', 'Libre Franklin:400,600,700,900'],
        display: 'swap',
        attributes: {
          rel: 'stylesheet preload prefetch'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/assets/svgs`,
        }
      }
    }
  ],
}
