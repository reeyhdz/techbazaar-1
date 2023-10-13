/** @type {import('next').NextConfig} */

module.exports = () => {
  const nextConfig = {
    reactStrictMode: false,
    eslint: {
        dirs: ["src"],
      },
  }
  const env = {
    WEBSITE_NAME: "TechBazaar",
    FOOTER_TEXT: "© 2023 TechBazaar. All rights reserved"
  }

  return { nextConfig, env }
}
