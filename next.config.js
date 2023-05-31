module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://hmlzaffari.vtexcommercestable.com.br/api/:path*',
          },
        ]
      },
  };