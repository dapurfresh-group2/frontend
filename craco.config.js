/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Api': path.resolve(__dirname, 'src/api'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
    }
  },
};