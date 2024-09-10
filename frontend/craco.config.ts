const config = {
  webpack: (config: any, env: any, helpers: any) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    });
    return config;
  },
  devServer: (devServerConfig: any, argv: any) => {
    devServerConfig.historyApiFallback = true;
    return devServerConfig;
  }
};

export default config;
