module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ["@babel/preset-env", { targets: { browsers: ['last 2 versions'] } }]
          ],
          plugins: [
            '@babel/plugin-proposal-nullish-coalescing-operator'
          ]
        }
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json', '.css']
  }
}
