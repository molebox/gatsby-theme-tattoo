let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-tattoo',
            options: {
              title: 'Spicy Tattoo',
              description: 'Spicy jalapeno bacon ipsum dolor amet tri-tip cupidatat officia meatball hamburger flank ribeye pork chop tenderloin. Pariatur turducken shank filet mignon, sunt veniam beef ribs qui adipisicing nostrud alcatra laboris reprehenderit leberkas andouille. Shank flank in chicken shoulder, minim ex qui. Laborum brisket reprehenderit jerky ipsum.',
              SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
              SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET
            }
        }
        // {
        //     resolve: 'gatsby-plugin-compile-es6-packages',
        //     options: {
        //       modules: ['gatsby-theme-tattoo']
        //     }
        // }
    ]
}