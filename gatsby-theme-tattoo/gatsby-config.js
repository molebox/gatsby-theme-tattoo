const pkg = require('./package.json');
const path = require('path');

module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-emotion',
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
                `source sans pro\:300,400,400i,700` 
              ]
            }
        },
        {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
              modules: [pkg.name]
            }
        }
    ]
}