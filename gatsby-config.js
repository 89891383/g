module.exports = {
  siteMetadata: {
    title: `Revku.dev - Official Website`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@revimeister`,
    image: `/icon.png`,
    siteUrl: `https://www.revku.dev`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@src": "src",
        "@components": "src/components",
        "@layouts": "src/layouts",
        "@images": "src/images",
        "@pages": "src/pages",
        "@styles": "src/styles",
        "@templates": "src/components/templates",
        "@atoms": "src/components/atoms",
        "@molecules": "src/components/molecules",
        "@organisms": "src/components/organisms",
        "@utils": "src/utils",
      },
      extensions: [
        "js",
      ],
    }
  }]
};