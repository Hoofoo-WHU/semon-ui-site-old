import React from 'react'
import { Layout } from '@semon/semon-ui'
import Menu from './menu'
import Post from './post'
import { BrowserRouter } from 'react-router-dom'
import Route from '@components/progress-route'
import './style/doc.scss'

const { Sider, Content } = Layout

export default () => {
  return (
    <BrowserRouter basename='doc'>
      <Layout>
        <Sider className='doc-sider'>
          <Route component={Menu} />
        </Sider>
        <Content>
          <Route path='/:title' component={Post} />
        </Content>
      </Layout>
    </BrowserRouter>
  )
}