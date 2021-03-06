const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const manifest = require("../dist/ios/vendor-manifest.json");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const platform = "ios";
const glob = require('glob')
function getEntries(globPath) {
  const entries = glob.sync(globPath).reduce((result, entry) => {
    const moduleName = path.basename(path.dirname(entry)) // 获取模块名称
    result[moduleName] = entry
    return result
  }, {})
  return entries
}
const entries = getEntries('./src/pages/**/main-native.js')
module.exports = {
  mode: "production",
  bail: true,
  entry: entries,
  output: {
    filename: `[name].${platform}.js`,
    path: path.resolve(`./dist/${platform}/`),
    globalObject: '(0, eval)("this")',
    chunkFilename: `[name].${platform}.js`
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      __PLATFORM__: JSON.stringify(platform)
    }),
    new CaseSensitivePathsPlugin(),
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, ".."),
      manifest
    }),
    new SimpleProgressWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader", "unicode-loader"]
      },
      {
        test: /\.css$/,
        use: ["@hippy/vue-css-loader"]
      },
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      ios: 8
                    }
                  }
                ]
              ]
            }
          },
          "unicode-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue: "@hippy/vue",
      "@": path.resolve("./src"),
    }
  }
};
