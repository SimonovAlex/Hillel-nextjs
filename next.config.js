/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    somekey: 'test env',
    NEXT_PUBLIC_DEVELOPMENT_ENV: 'test config'
  }
}

module.exports = nextConfig
