import React from 'react'
import Home from './screen/Home/home'
import Login from './screen/Login/Login'
import { Route, BrowserRouter as Router } from 'react-router-dom'



function App(props) {
  
  return (
    <Router>
        <Route exact path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
  </Router>
  )
}

export default App;
