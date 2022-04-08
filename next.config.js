const withLess = require('next-with-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.kitsu.io', 'coltivi.com']
  },
  compiler: {
    styledComponents: true
  },
  lessLoaderOptions: {
    /* ... */
  }
};

module.exports = withLess(nextConfig);
