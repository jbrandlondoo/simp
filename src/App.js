import React from 'react'
import Home from './screen/Home/home'
import Login from './screen/Login/Login'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Histogram from './components/charts/Histogram'



function App(props) {
  
  return (
  //   <Router>
  //       <Route exact path="/" exact component={Login} />
  //       <Route path="/Home" exact component={Home} />
  //       <Route path="/products" exact component={Home} />
  //       <Route path="/history" exact component={Home} />
  // </Router>
  <Histogram/>
  )
}

export default App;
