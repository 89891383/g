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
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjI4OTAzMTYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2t5cHBkMGVpMGZnZDAxeHhnd2F3N3lody9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYzg4NWNhZWEtMjQ1Ny00ZmFjLWE4MjMtOTc4MzQxZDUxMjlhIiwianRpIjoiY2w3eDV5azVnMm9majAxcnIweG90NmxpNSJ9.BsiwefbJz-HDHVUOyCsvjur24KjUjXWwnI6_sVX17iPqtdZEGUia4FJVFfo-6JR6We5fWwhN787YxAUXdhYKP4kptx22LJScFcLQNVLY7UHYu52oPOjOXz0DmvL_PSYVkr0Xf9ajoSvmBrCEhWEPJYJNFx4Xv3V1HiycOmi1jaO9pAXo2x527yxsGt3Sg8rLQiePmMhH3g3_az0tpVihw1QsLSdHZ1X6UDZ6illGpWLBVccMHdlbk-GADXKxbNKsjFqVcCSIEq6G1uOtLan3LI9lACxv905KP0ZO2PnB8m7RHIUsfQWGsT_il0skyHg0ttBkyMi7sYJtzhhOq4B-yc9BGLfyrBmLON0IIotxqQOeuWWdCLr7Z5l7jIbrjVkWZ3YaYWAE145aQY6FNBZLQGwkuyjqodbgevQvZT49yzXB7WK6U4gZKZfxmYZ2nN6-KWSeKiyJh5bpZf8-2TbuQCpCxwzxSjmGq4wHbxx7yRbAt2ip8qc8aJWZFv8bd7a1EpxLqC4ezwx82EebetOkGKRcwnLb5KWCxSlFn4ofseAjaNm_xyTGeOGvfT5ZiOhXQ9yDatk5CtgP25NqKir5srxfRKl0KtVRkhhAZz9jTtSpYp2K-kj2lExXY3g82zcljMwrWDWF2optl8UwCfB3jDiuy5n1xRehUCF1QA-Emaw`,
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
        path: './pages/',
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
