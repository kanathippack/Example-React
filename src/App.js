import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from 'react-router-dom'


import Pack from './Page/Pack'
import Nice from './Page/Nice'
const Home = () => <h1>Home</h1>
const About = () => <h1>Example React Baiwa Trainee. Start date 6/03/2020</h1>

class App extends Component {
  render() {
    return (
      // width="112" height="50"
      <div className="my-app">
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="http://baiwa.co.th/">
                <img src="http://baiwa.co.th/uploads/setting/baiwalogo.png" alt="BAIWA LOGO"  />
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
                <NavLink to="/pack" activeClassName="is-active" className="navbar-item">Pack</NavLink>
                <NavLink to="/nice" activeClassName="is-active" className="navbar-item">Nice</NavLink>
                <NavLink to="/about" activeClassName="is-active" className="navbar-item">About</NavLink>
                {/* <a className="navbar-item" href="https://github.com/phonbopit" target="_blank">Star on <i className="fab fa-github"></i></a> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pack" component={Pack} />
          <Route path="/nice" component={Nice} />
        </div>
      </div>
    )
  }
}
export default App
