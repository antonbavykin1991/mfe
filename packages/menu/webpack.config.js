// remote2/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3003,
    proxy: {
      '/api': {
        target: 'https://appcms.bbserver2.com/',
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Menu",
      filename: "moduleEntry.js",
      exposes: {
        "./root": "./src/root",
      },
      shared: {
        ...dependencies,
        "react-context-slices": {},
        'react@^18.2.0': {
          singleton: true,
        },
        "react-dom@^18.2.0": {
          singleton: true,
        },
        shared_state: {
          requiredVersion: require("../shared_state/package.json").version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};