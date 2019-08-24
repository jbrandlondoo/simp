import React from 'react'
import Form from './../../components/form/Form'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Image from './../../img/backgroundLogin.jpg'
import { login } from './../../store/action/index'
import { connect } from 'react-redux'



const useStyles = makeStyles({
    boxMain: {
      minWidth: 275,
      maxHeight:'100%',
      width:window.innerWidth,
      height:window.innerHeight,
      backgroundImage:window.innerWidth > 400 ?`url(${Image})`:null,
      backgroundSize:'100%',
    },
    container: {
        justifyContent:'center',
        height:window.innerHeight,
        padding:'5%'
    }
  });

const Login = props =>{
    const classes = useStyles()
    return(
        <Box className={classes.boxMain}>
        <Container className={classes.container}>
            <Form/>
        </Container>
        </Box>

    )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    login:payload=>dispatch(login(payload)),
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)