module.exports = {
  siteMetadata: {
    title: `Curriculo Gustavo Costa`,
    description: `Web and Mobile Software Engineer`,
    author: `@guhcostan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/images/avatar-draw-round.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDf8xPfbC-XdcU62XTMmurhAR9tbvYXM0Y",
          authDomain: "curriculo-e6c79.firebaseapp.com",
          databaseURL: "https://curriculo-e6c79.firebaseio.com",
          projectId: "curriculo-e6c79",
          storageBucket: "curriculo-e6c79.appspot.com",
          messagingSenderId: "326961783953",
          appId: "1:326961783953:web:a7f5ce6ad1f27662c20b30",
          measurementId: "G-9W5F11T3N5"
        }
      }
    },{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-9W5F11T3N5",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
