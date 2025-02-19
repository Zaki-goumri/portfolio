const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/img/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'hardhat.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icon.icepanel.io',
        pathname: '/Technology/png-shadow-512/**',
      },
    ],
  },
}

module.exports = nextConfig
