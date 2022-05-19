const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackFavicons = require("webpack-favicons");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: isDev,
    historyApiFallback: true,
  },
  mode: "development",
  entry: {
    index: "./script.js",
    about: "./script.js",
    contact: "./script.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new ESLintPlugin(),
    new WebpackFavicons({
      src: "./img/ico/favicon.ico",
      path: "img",
      icons: {
        favicons: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebpackPlugin({
      template: "./index.html",
      inject: true,
      minify: !isDev,
      collapseWhitespace: !isDev,
      favicon: "./img/ico/favicon.ico",
      filename: "./index.html",
    }),
    new HTMLWebpackPlugin({
      template: "./about.html",
      inject: true,
      minify: !isDev,
      collapseWhitespace: !isDev,
      favicon: "./img/ico/favicon.ico",
      filename: "./about.html",
    }),
    new HTMLWebpackPlugin({
      template: "./contact.html",
      inject: true,
      minify: !isDev,
      collapseWhitespace: !isDev,
      favicon: "./img/ico/favicon.ico",
      filename: "./contact.html",
    }),
  ],
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
        ],
      },
      {
        test: /\.(sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./",
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
};
