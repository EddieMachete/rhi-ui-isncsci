module.exports = {
  entry: './src/components/rhi-isncsci-app/rhi-isncsci-app.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, exclude: /node_modules/
      }
    ]
  }
};