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
    author: {
      name: `Michael Lewis`,
      summary: `Michael Lewis is an Acquia Certified, Award Winning Web Developer who has 15 years of experience in technologies such as Drupal, React, Python, and Google Cloud.`,
    },
    description: `Michael Lewis is an Acquia Certified, Award Winning Web Developer who has 15 years of experience in technologies such as Drupal, React, Python, and Google Cloud.`,
    siteUrl: `https://michaellewis.netlify.app/`,
    title: `Michael Lewis | Award Winning Certified Drupal Developer Profile`,
    social: {
      twitter: '@seismicmike'
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-minify',
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/case-studies`,
        name: `case-studies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
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
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Michael Lewis's case studies.",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Lewis`,
        short_name: `Michael Lewis`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.webp`, // This path is relative to the root of the site.
      },
    }
  ],
}
