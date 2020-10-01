module.exports = {
  siteMetadata: {
    title: "Snapshot Public Router",
    author: "pi0neerpat",
    description: "Forwards events from Snapshot to your app.",
    baseURL: "https://snapshot-public-router.vercel.app",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Snapshot Public Router",
        short_name: "Snapshot Public Router",
        start_url: "/",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
