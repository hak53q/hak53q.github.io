import nextra from "nextra";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
};

export default withNextra({
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
      }]
  }
});
