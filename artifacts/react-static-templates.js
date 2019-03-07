
import universal, { setHasBabelPlugin } from '/Users/WangShuo/Documents/GitHub/semon-ui-site/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.tsx'), universalOptions)
const t_1 = universal(import('../src/pages/index.tsx'), universalOptions)


// Template Map
export default {
  '../src/pages/404.tsx': t_0,
'../src/pages/index.tsx': t_1
}

export const notFoundTemplate = "../src/pages/404.tsx"
