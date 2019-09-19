import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import TableResume from './../table/TableResume';
import * as config from './../../config';

import {
  delSelectedProduct,
  cancelSell
} from './../../store/action/index'
import Axios from 'axios';

const styles ={
    main:{
        background:'#FFFFFF',
        height:'100%',
        width:500,
        margin:20,
    },
    headerSale:{
        fontFamily:'Roboto',
        fontSize:24,
        width:'100%',
        textAlign:'center',
        height:30,
        padding:5,
    }
}

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    background:'#574F7D',
    color:'#FFFFFF',
    alignSelf:'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

/**
 * 
 * @param {*} props  
 */
const SaleBoard = props => {
  const classes = useStyles();
  const [sell, setSell] = useState(false)

  const sellProducts = ()=>{
    Axios.post(config.URL_API+':'+config.PORT_API+'/api/v1/sellProducts',{store_id:props.authentication.storeId,products:props.products},{headers:{'Authorization':'Bearer ' + props.authentication.token}}).then((response)=>{
      alert("Venta Exitosa!");
  });
  }
  return (
    <Box
    boxShadow={0}
    style={styles.main}
  >
      <Box style={styles.headerSale} >{sell?`Venta ${new Date().toLocaleString().slice(0,9)}`:'Iniciar Venta'}</Box>
      <hr style={{background:'background: rgba(0, 0, 0, 0.12)'}}/>
      <Box>
        {
          sell?
        <Box>
          <TableResume/>
          <Button variant="outlined"
           onClick={props.delSelectedProduct}
           disabled={props.products.filter(item=>item.selected).length?false:true} className={classes.button}>
            Eliminar
          </Button>
          <Button onClick={sellProducts} variant="outlined" color="primary" disabled={props.products.length?false:true} className={classes.button}>
            Generar Factura
          </Button>
          <Button variant="outlined"
          onClick={props.cancelSell}
          disabled={props.products.length?false:true}
          color="secondary" className={classes.button}>
           Cancelar
          </Button>
        </Box>
          :
        <Fab aria-label="add" onClick={()=>setSell(true)} className={classes.fab}>
          <AddIcon />
        </Fab>}
      </Box>
  </Box>
  );
}

const mapStateToProps = state => ({
  products:state.products.products,
  authentication:state.authentication
})
const mapDispatchToProps = dispatch => ({
  delSelectedProduct:()=>dispatch(delSelectedProduct()),
  cancelSell:()=>dispatch(cancelSell()),
})
export default connect(mapStateToProps,mapDispatchToProps)(SaleBoard)