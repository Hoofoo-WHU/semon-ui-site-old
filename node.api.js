import path from 'path'

export default pluginOptions => ({
  webpack: (config) => {
    config.module.rules[0].oneOf.unshift({
      test: /\.md$/,
      loader: 'raw-loader'
    })
    config.resolve.alias['@modules'] = path.join(__dirname, 'src/modules')
    config.resolve.alias['@posts'] = path.join(__dirname, 'src/posts')
    return config
  },
})