require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Revku.dev - Oficjalna strona`,
    description: `Kreatywny front-end developer i UI designer.`,
    twitterUsername: `@revimeister`,
    image: `/icon.png`,
    siteUrl: `https://www.revku.dev`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-plugin-root-import',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'REVKU',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'revku',
        // Url to query from
        url: process.env.CMS_API_URL,
        headers: {
          Authorization: `Bearer ${process.env.CMS_API_KEY}`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-THTNFQ6',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
        routeChangeEventName: 'gatsby-route-change',
        enableWebVitalsTracking: true,
      },
    },
  ],
};
