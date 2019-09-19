import React, { useState } from 'react'
import Home from './screen/Home/home'
import Login from './screen/Login/Login'
import { login } from './store/action/index'
import { connect } from 'react-redux'



function App(props) {
  
  return (
    <div>
      {
        <Home/>
      }
      {
        <Login/>
      }
        
    </div>
  );
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    login:payload=>dispatch(login(payload)),
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
