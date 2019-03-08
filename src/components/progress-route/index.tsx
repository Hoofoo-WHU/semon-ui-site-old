import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import nprogress from 'nprogress'
import './progress.scss'

export default class extends React.Component<RouteProps>{
  componentWillUpdate() {
    nprogress.start()
  }
  componentDidUpdate() {
    nprogress.done()
  }
  render() {
    return <Route {...this.props}></Route>
  }
}