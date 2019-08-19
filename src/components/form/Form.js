import React from 'react'
import Container from '@material-ui/core/Container'
import Login from './login/login'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    container:{
        background:'rgba(255, 255, 255, 0.85)',
        width:500,
        justifyContent:'center',
        borderRadius:20
    },
    containerFormRegister:{
        width:250
    },
    barOptions:{
        background:'red',
        height:20,
        width:'100%'
    }
}))
const Forms = props => {
    let classes = useStyles()
    return(
        <Container className={classes.container}>
            <div className={classes.barOptions}>
            </div>
            <Container className={classes.containerFormRegister}>
                <Login/>
            </Container>
        </Container>
    )
}

export default Forms
