// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
//  */

// /**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

import {GatsbyNode} from 'gatsby';

import redirectData from './redirectData';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async ({
  actions,
  stage,
  loaders
}): Promise<void> => {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [
              loaders.js()
            ]
          }
        ]
      }
    });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const {createRedirect} = actions;
  redirectData.map((redirectItem) => {
    return (
      createRedirect({
        isPermanent: true,
        statusCode: 301,
        ...redirectItem,
      })
    );
  });
};