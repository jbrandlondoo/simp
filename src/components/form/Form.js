import React,{ useState } from 'react'
import Container from '@material-ui/core/Container'
import Login from './login/login'
import UserRegister from '../../screen/UserRegister/UserRegister.js'
import { makeStyles } from '@material-ui/core/styles'
import ButtonBar from './../button/buttonBar'
import RegisterStore from './../form/registerStore/registerStore'

const useStyles = makeStyles(theme => ({
    main:{
        minWidth:300,
        width:'40%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding:0,
        borderRadius:'20px',
    },
    container:{
        background:'rgba(255, 255, 255, 0.85)',
        width:'100%',
        justifyContent:'center',
        borderRadius:'0 0 20px 20px',
        padding:30
    },
    containerFormRegister:{
        width:250
    },
    buttonsOptions:{
        height:20,
        color:'#000000',
        background:'rgba(255, 255, 255, 0)',
    },
    barOptions:{
        background: '#574F7D',
        borderRadius:'20px 20px 0 0',
        height:25,
        width:'100%',
        textAlign:'center'
    }
}));

const Forms = props => {
    let [isRegistered,setIsRegistered] = useState(true);
    let classes = useStyles();
    let isRegisterStore = props.isRegisterStore?props.isRegisterStore:null

    return(
        <Container className={classes.main}>
        <Container className={classes.barOptions}>
            {!isRegisterStore?<ButtonBar getLogin={()=>setIsRegistered(true)} getRegister={()=>setIsRegistered(false)}/>:null}
        </Container>
        <Container className={classes.container}>
            <Container className={classes.containerFormRegister}>
                {!isRegisterStore?<div><Login visible={isRegistered}/>
                <UserRegister visible={isRegistered}/></div>:
                <RegisterStore/>}
            </Container>
        </Container>
        </Container>
    );
}
export default Forms;
