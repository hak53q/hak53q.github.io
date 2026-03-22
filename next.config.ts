import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",

  async redirects() {
    return [
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:slug*",
        destination: "/:slug*",
        permanent: true,
      },
    ];
  },
});
