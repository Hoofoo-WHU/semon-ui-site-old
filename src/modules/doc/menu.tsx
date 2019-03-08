import React, { useState, ReactNode } from 'react'
import { Menu } from '@semon/semon-ui'
import { RouteComponentProps, Link } from 'react-router-dom'
import './style/menu.scss'

function Item({ path, children }: { path: string, children?: ReactNode }) {
  return (
    <Menu.Item name={path}><Link className='menu-item-link' to={path}></Link>{children}</Menu.Item>
  )
}

export default ({ location }: RouteComponentProps) => {
  const [activeName, setActiveName] = useState(location.pathname)
  const [opens, setOpens] = useState([])
  return (
    <Menu className='doc-menu' activeName={activeName}
      onChange={(name) => setActiveName(name)}
      opens={opens}
      onOpenChange={opens => setOpens(opens)}
      style={{ minWidth: 270 }}
    >
      <Item path='/introduce'>简介</Item>
      <Item path='/getting-started'>快速开始</Item>
    </Menu>
  )
}