import { HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import common from './webpack.config';

export default merge(common, {
  entry: ['webpack/hot/poll?1000', './src/main.ts'],
  externals: [
    // 忽略 node_modules 中的模块
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  plugins: [new HotModuleReplacementPlugin()],
  watch: true,
  mode: 'development',
  devtool: 'eval-source-map',
});
