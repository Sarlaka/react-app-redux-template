/*
 * @Author: duchengdong
 * @Date: 2020-08-17 10:21:32
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-26 17:41:16
 * @Description: 
 */
import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App
