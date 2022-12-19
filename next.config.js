/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM(nextConfig)
