import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default ({ match }: RouteComponentProps<{ title: string }>) => {
  return <h1>{match.params.title}</h1>
}