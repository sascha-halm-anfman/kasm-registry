/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HalmLab',
    description: 'HalmLab Private Kasm Workspace Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://sascha-halm-anfman.github.io/kasm-registry/',
    contactUrl: 'https://sascha-halm-anfman.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
