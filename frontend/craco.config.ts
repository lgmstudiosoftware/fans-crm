import { resolve } from 'path';

export default {
  webpack: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
    configure: (webpackConfig: any) => {
      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },
  devServer: {
    port: 3001
  },
  eslint: {
    enable: true,
    mode: 'extends',
    configure: (eslintConfig: any) => {
      return eslintConfig;
    },
  },
};