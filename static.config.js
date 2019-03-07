// import axios from 'axios'
import path from 'path'

export default {
  plugins: ['react-static-plugin-typescript'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'Semon UI'
  }),
  getRoutes: async () => {
    return [
      {
        path: 'doc',
        children: [
          {
            path: 'intro',
            component: 'src/pages/index.tsx'
          }
        ]
      }
    ]
  }
}
