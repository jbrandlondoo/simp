import React from 'react'
import Home from './screen/Home/home'
import Login from './screen/Login/Login'
import { login } from './store/action/index'
import { connect } from 'react-redux'
import AdminMenu from './components/AdminMenu/AdminMenu'
import { Route, BrowserRouter as Router } from 'react-router-dom'



function App(props) {
  
  return (
    // <div>
    //   {
    //     <Home/>
    //   }
    //   {
    //     <Login/>
    //   }
        
    // </div>
    <AdminMenu />

  );
  //   <Router>
  //       <Route exact path="/" exact component={Login} />
  //       <Route path="/Home" exact component={Home} />
  //       <Route path="/products" exact component={Home} />
  //       <Route path="/history" exact component={Home} />
  // </Router>
  // )
}

export default App;
