const pkg = require('./package.json');
const path = require('path');

module.exports = (options) => {
  const {title, description, twitter, SANITY_PROJECT_ID, SANITY_PROJECT_DATASET} = options;

    return {
      siteMetadata: {
        title,
        description
      },
      
      plugins: [
      {
        resolve: "@horacioh/gatsby-theme-instagram",
        options: {
          username: twitter || "sashaunisex",
        },
      },
        'gatsby-plugin-typescript',
        'gatsby-plugin-emotion',
        {
          resolve: 'gatsby-source-sanity',
          options: {
            projectId: SANITY_PROJECT_ID,
            dataset: SANITY_PROJECT_DATASET,
            watchMode: true
            // a token with read permissions is required
            // if you have a private dataset
            // token: process.env.MY_SANITY_TOKEN
          }
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `pages`,
            path: `${__dirname}/src/pages/`,
          },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: path.join(__dirname, "src", "pages"),
            }
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                `Montserrat`,
                `Oswald`,
                `source sans pro\:300,400,400i,700` 
              ]
            }
        },
        {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
              modules: [pkg.name]
            }
        },
        'gatsby-plugin-theme-ui'
    ]
  }
}