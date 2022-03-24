module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/skulls/:skull",
        destination: "https://graveyard.skeledao.com/skulls/:skull",
        permanent: false,
      },
    ];
  },
};
