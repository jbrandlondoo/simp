import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    container:{
        width:200,
        height:25,
    },
    buttonSelected:{

    },
    button:{
        background:'rgba(255, 255, 255, 0)',
        color:'white',
        height:25,
        width:100,
        fontSize:12
    }
}))


const ButtonsBar = props => {
    let classes = useStyles()
    return(
        <div className={classes.container}>
            <Button type="button" className={classes.button} >
                Entrar
            </Button >
            <Button type="button" className={classes.button} >
                Registrase
            </Button >
        </div>
        
    )

}
export default ButtonsBar