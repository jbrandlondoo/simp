import React, { useState } from 'react'
import Home from './screen/Home/home'
import Login from './screen/Login/Login'
import { login } from './store/action/index'
import { connect } from 'react-redux'



function App(props) {
  const [autenticate, setAutenticate] = useState(false)
  let authentication = localStorage.getItem('authentication')
  let tem = authentication?props.login(authentication):null
  tem = props.authentication.token?setAutenticate(true):null
  console.log(tem)
  return (
    <div>
      {
      autenticate?<Home/>:<Login/>
      }
    </div>
  );
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    login:payload=>dispatch(login(payload)),
})
export default connect(mapStateToProps,mapDispatchToProps)(App)
