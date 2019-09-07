import React from 'react'
import Box from '@material-ui/core/Box'


const styles ={
    main:{
        background:'#FFFFFF',
        height:'100%',
        width:500,
        margin:20
    },
    headerSale:{
        fontFamily:'Roboto',
        fontSize:24,
        width:'100%',
        textAlign:'center',
        height:30,
        padding:5
    }
};

/**
 * 
 * @param {*} props  
 */
const SaleBoard = props => {
  return (
    <Box
    boxShadow={0}
    style={styles.main}
  >
      <Box style={styles.headerSale} >Venta #{'2'}</Box>
      <hr style={{background:'background: rgba(0, 0, 0, 0.12)'}}/>
  </Box>
  );
};

export default SaleBoard;