import React from 'react'
import { Layout } from '@semon/semon-ui'
import Menu from './menu'
import Post from './post'
import { RouteComponentProps } from 'react-router-dom'
import Route from '@components/progress-route'
import './style/doc.scss'

const { Sider, Content, Footer } = Layout

export default (props: RouteComponentProps) => {
  const genPath = (path: string) => props.match.path + path
  return (
    <Layout>
      <Sider className='doc-sider'>
        <Route component={Menu} />
      </Sider>
      <Layout>
        <Content>
          <Route path={genPath('/:title')} component={Post} />
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  )
}