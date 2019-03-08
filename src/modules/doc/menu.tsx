import React, { useState, ReactNode } from 'react'
import { Menu } from '@semon/semon-ui'
import { RouteComponentProps, Link } from 'react-router-dom'
import './style/menu.scss'

let _props: RouteComponentProps
const genPath = (path: string) => _props.match.path + path

function Item({ path, children }: { path: string, children?: ReactNode }) {
  const realPath = genPath(path)
  return (
    <Menu.Item name={realPath}><Link className='menu-item-link' to={realPath}></Link>{children}</Menu.Item>
  )
}

export default (props: RouteComponentProps) => {
  _props = props
  const [opens, setOpens] = useState([])
  return (
    <Menu className='doc-menu' activeName={props.location.pathname}
      opens={opens}
      onOpenChange={opens => setOpens(opens)}
    >
      <Item path='/introduce'>Semon UI</Item>
      <Item path='/getting-started'>快速上手</Item>
    </Menu>
  )
}