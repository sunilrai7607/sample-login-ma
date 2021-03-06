const path = require("path");

module.exports = {
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    // port: 9000
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
