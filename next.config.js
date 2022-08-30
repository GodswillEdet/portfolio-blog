/** @type {import('next').NextConfig} */
const withYaml = require("next-plugin-yaml");

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withYaml(nextConfig);
