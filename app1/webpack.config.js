const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devtool: false,
  entry: "./src/main.js",
  mode: "development",
  devServer: {
    port: 3003,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)(\?.*)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new ModuleFederationPlugin({
      // 提供给其他服务加载的文件
      filename: "remoteEntry.js",
      // 唯一ID，用于标记当前服务
      name: "vueSer",
      // library: { type: "var", name: "app1" },
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        "./Header": "./src/components/Header.vue",
      },
      remotes: {
        fdTest: "fdTest@http://localhost:3004/remoteEntry.js",
        sample: "sample@http://localhost:8081/remoteEntry.js",
        // mktAntd: 'mktAntd@http://localhost:8000/remoteEntry.js',
        // nextLib: 'nextLib@http://localhost:3000/remoteEntry.js',
      },
    }),
  ],
};
