import React from 'react'
import Form from './../../components/form/Form'
// import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Image from './../../img/backgroundLogin.jpg'
import Container from '@material-ui/core/Container'


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
    console.log(window.height)
    const classes = useStyles();
    return(
        <Box className={classes.boxMain}>
        <Container className={classes.container}>
            <Form/>
        </Container>
        </Box>

    )
}
export default Login