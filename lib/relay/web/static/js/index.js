import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CreatePost from './CreatePost'
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/createPost' component={CreatePost} />
  </Router>
  , document.getElementById('app')
)
