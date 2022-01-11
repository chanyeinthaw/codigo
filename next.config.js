const path = require('path')

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles'),
            path.join(__dirname, 'components'),
            path.join(__dirname, 'pages')
        ],
    },
    pageExtensions: ['page.jsx', 'page.js', 'api.js'],
    async redirects() {
        return [
            {
                source: '/',
                destination: '/work',
                permanent: false,
            },
        ]
    },
}
