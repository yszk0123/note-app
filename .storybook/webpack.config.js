const path = require('path');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: require.resolve('ts-loader'),
    options: {
      transpileOnly: true,
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
