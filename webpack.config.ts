import path from "path"
import { Configuration as WebpackConfiguration, HotModuleReplacementPlugin } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from "html-webpack-plugin"

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // {
      //   test: /\.s[c,a]ss$/i,
      //   use: [
      //     { loader: 'style-loader' },
      //     { loader: 'css-loader', options: { modules: true } },
      //     { loader: 'sass-loader' }
      //   ]
      // }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 1226,
    open: true,
    hot: true
  },
}

export default config