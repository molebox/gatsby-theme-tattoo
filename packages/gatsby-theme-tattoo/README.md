# gatsby-theme-tattoo

This is a minimalist gatsby theme for stores that operate in the tattoo beauty sector. Tattoo, Hair Salons and Beauty Care websites are the target users though the theme can be adapted to be used with other industries too.

The theme is fully responsive and includes sections for home page, artists and the stores Instagram gallery.

WIP: A booking form section will be added so users can make appointments.

The theme uses [Theme-Ui](https://theme-ui.com/) for styling so is customizable. It also uses [Sanity.io](https://www.sanity.io/) as its backend.

# Backend Installation

From the command line run:

- `git clone https://github.com/molebox/gatsby-theme-tattoo-sanity.git`
- `cd gatsby-theme-tattoo-sanity` and run `yarn` to install the dependancies
- run `sanity init`. It will ask if you want to reconfigure the studio, choose YES.
- choose create a new project and follow the instructions to set up your new sanity studio backend!

# Theme Setup

Add to your Gatsby sites gatsby-config.js just like you would with a plugin. The `SANITY_PROJECT_ID`, `SANITY_PROJECT_DATASET` are passed in as options from the consuming theme or site. You can get these values from your sanity studio.

---

It is recommended that you use environment variables to store your keys. You can store them in the root of your project in env.development or env.production files.

You can access these file in your gatsby-config.js like so:

```
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

```

---

```
module.exports = {

    plugins: [
      {
            resolve: 'gatsby-theme-tattoo',
            options: {
              title: 'Oh Deer Tattoo',
              description: 'Spicy jalapeno bacon ipsum dolor amet tri-tip cupidatat officia meatball hamburger flank ribeye pork chop tenderloin. Pariatur turducken shank filet mignon, sunt veniam beef ribs qui adipisicing nostrud alcatra laboris reprehenderit leberkas andouille. Shank flank in chicken shoulder, minim ex qui.',
              SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
              SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET
            }
        }
  ],
}
```

DEMO: [https://gatsby-theme-tattoo.netlify.com/](https://gatsby-theme-tattoo.netlify.com/)

## Built With

- [Gatbsy](https://www.gatsbyjs.org/)
- [Theme-Ui](https://theme-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sanity.io](https://www.sanity.io/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License
