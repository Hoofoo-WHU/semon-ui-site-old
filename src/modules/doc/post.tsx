import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import MD from 'markdown-it'
import 'github-markdown-css'
import './style/post.scss'
import Prism from 'prismjs'
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-typescript')

const md = new MD({
  html: true
})

class Post extends React.Component<RouteComponentProps<{ title: string }>>{
  private root = React.createRef<HTMLDivElement>()
  componentDidMount() {
    Prism.highlightAllUnder(this.root.current)
  }
  componentDidUpdate() {
    Prism.highlightAllUnder(this.root.current)
  }
  render() {
    const post = require(`@posts/${this.props.match.params.title}.md`)
    return <div ref={this.root} className='markdown-body' dangerouslySetInnerHTML={{ __html: md.render(post) }}></div>
  }
}

export default Post