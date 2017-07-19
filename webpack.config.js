const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
    // Entries have to resolve to files! They rely on Node
    // convention by default so if a directory contains *index.js*,
    // it resolves to that.
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack starter',
      })
    ]
  },
  parts.lintJavaScript({ include: PATHS.app })
])

const productionConfig = merge([
]);

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT // Defaults to 8080
  })
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};