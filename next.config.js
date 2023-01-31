/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    async redirects() {
        return [
          {
            source: '/bento',
            destination: '/bentobox',
            permanent: true,
          },
          {
            source: '/bentowallet',
            destination: '/bentobox',
            permanent: true,
          },
        ]
      },
  }
  
  module.exports = nextConfig