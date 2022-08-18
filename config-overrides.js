const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {

  alias({
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@styles': 'src/styles',
    '@routes': 'src/routes',
    '@constants': 'src/constants'
  })(config)
  return config
}