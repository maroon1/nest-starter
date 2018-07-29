import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

import common from './webpack.config';

// "EMFILE: too many open files" or "ENFILE: file table overflow"
// import fs from 'fs';
// import gracefulFS from 'graceful-fs';
// gracefulFS.gracefulify(fs);

export default merge(common, {
  entry: './src/main.ts',
  externals: [
    // 忽略 node_modules 中的模块
    nodeExternals(),
  ],
  // 关闭默认的打包优化
  mode: 'none',
  devtool: 'source-map',
});
