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
        url: 'https://api-eu-central-1.hygraph.com/v2/ckyppd0ei0fgd01xxgwaw7yhw/master',
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjcyMzQyNzMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2t5cHBkMGVpMGZnZDAxeHhnd2F3N3lody9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNjgwZDIzMTAtYmZmMC00MDRlLTg1MTAtNjIyNmQwOTBhYzc2IiwianRpIjoiY2w5eDA4bjJoMGJ4ZDAxcnRmMnU0OWM2MiJ9.YZFJrtod9uM9tT65beQXZtedDujljI6aX8ee3moaIuGIF73geAd4xg6Y7x3l6Mi3S0B1gsa5FA9JT_lNbVn8esgHHUexDtb7_NEEAP6PsR3Zww7GMkoaops9JOmQfJqvuIDRKcSq6rJdzJaXKsdxhKNxAyixZCpcyTln-9EiCanPU-sWbJwwj9VG-WfzQGKnpEVfCn8O789c4Xlom2Q39O3mxwPTb3B9zYeMl4Vff3NF1jejyjnbJ01Lqqa4dKkKpruRFdCV7DWOLgczlQegTlbw_AICOQDily66lC_jx_0nAIQ7V9_ZvXEDkc0yV1ae6Co3cgM6Ht9OyH1lrgu84vG-75nRdGtlFggjX02ZFvgFKbidhu9eANuE1yqV7NDs4IN6QqYHl5NOmIVV_xYnVntp1maoh9JeNeejTmWMTVxcUvMsa1aXt_4L_eIMD4b-TbTuph7vTIC1seqM4wbwLNZiCZpKTv6nWzNPC3pgv5SaS3t97yFE3sbYz2G6gVBV3qI8rqndbExXtW6dJm4kMkS2YaRoHnmT-jXlcgzyIDElPdyjPbKIpUw4lh-DobrZVltlwpCAtdVEqA_op50oamF8LU5VkH6xDZoSFl_ASUtfQNDVN8pmEL0H4XT6ObKEpyqvn20mRGy8nrsx4-PY2NlTIcN7ag1hNiHLodnKEXo`,
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
