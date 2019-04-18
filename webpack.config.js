require('@babel/register');
const webpackMerge = require('webpack-merge');

const common = require('./config/webpack/webpack.common.babel');


const envs = {
  development: 'dev',
  production: 'prod',
}

const env = encs[process.env.NODE_ENV] || 'development';
const envConfig = require(`./config/webpack/webpack.${env}.babel`);

module.exports = webpackMerge(common, envConfig);