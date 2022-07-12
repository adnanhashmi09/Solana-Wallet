/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  future: { webpack5: true }, //needed only by earlier next.js versions (<= 10)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
