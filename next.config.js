/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM(nextConfig)
