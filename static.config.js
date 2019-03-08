import path from 'path'

function resolveComponent(routes, component) {
  return routes.map(route => {
    const res = {
      component
    }
    if (typeof route === 'string') {
      res.path = route
      return res
    }
    res.path = route.path
    if (route.children) {
      res.children = resolveComponent(route.children, component)
    }
    return res
  })
}

export default {
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-sass'
  ],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  minLoadTime: 0,
  devBasepath: '/abc',
  getSiteData: () => ({
    title: 'Semon UI'
  }),
  getRoutes: () => {
    return resolveComponent([
      {
        path: '/',
        children: [
          'index',
          {
            path: 'doc',
            children: [
              'introduce',
              'getting-started'
            ]
          }
        ]
      }
    ], 'src/pages/index.tsx')
  }
}
