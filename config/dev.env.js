var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://221.226.81.54:1211"',
  API_VERSION: '"/api/v1"',
  SERVER_API: '"http://localhost:5000/api"',
  SOCKET_API: '"http://localhost:5000"'
});
