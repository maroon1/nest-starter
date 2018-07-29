import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  // 忽略 NodeJS 内置模块
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      // 用 tsconfig.json 中 paths 映射的路径替换模块中的路径
      new TSConfigPathsPlugin(),
    ],
  },
  plugins: [
    // 清理输出目录中的文件
    new CleanWebpackPlugin('dist'),
    // 将其他文件移动到输出目录
    new CopyWebpackPlugin(),
  ],
};

export default config;
