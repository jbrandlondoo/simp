import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

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
  return (
    <Box
    boxShadow={0}
    style={styles.main}
  >
      <Box style={styles.headerSale} >{sell?`Venta #{'2'}`:'Iniciar Venta'}</Box>
      <hr style={{background:'background: rgba(0, 0, 0, 0.12)'}}/>
      <Box>
        {
          sell?null:
        <Fab aria-label="add" onClick={()=>setSell(true)} className={classes.fab}>
          <AddIcon />
        </Fab>}
      </Box>
  </Box>
  );
}

export default SaleBoard;