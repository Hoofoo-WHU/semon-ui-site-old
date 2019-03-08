import React from 'react'
import { BrowserRouter, Switch, Redirect, Link } from 'react-router-dom'
import Route from '@components/progress-route'
import { Layout } from '@semon/semon-ui'
import { withSiteData } from 'react-static'
import '@semon/semon-ui/dist/index.css'
import Home from '@modules/home'
import Doc from '@modules/doc'

const { Header, Content } = Layout

export default withSiteData(({ dev }) => {
  return (
    <BrowserRouter basename={dev ? '' : "docs"}>
      <Layout>
        <Header>
          <Link to='/index'>Home</Link>
          <Link to='/doc/introduce'>Doc</Link>
        </Header>
        <Content>
          <Switch>
            <Redirect from='/' exact to='/index' />
            <Route path='/index' component={Home} />
            <Route path='/doc' component={Doc} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  )
})