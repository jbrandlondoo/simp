import React,{ useState,useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Grid from "@material-ui/core/Grid"
import Table from './../../components/table/Table'
import SaleBoard from './../../components/saleBoard/SaleBoard'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import Axios from 'axios'
import * as config from './../../config'


const useStyles = makeStyles(theme => ({
   appBar:{
       height:50,
       minWidth:400,
       background:'#574F7D'
   },
   fill:{
       height:40,
   },
   title:{
       height:50,
       width:200,
       textAlign:'center',
        padding:10
   },
   box:{
       height:'100%',
       width:'100%',
       marginTop:10,
   },
   root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
  },
  textField: {
    width:'100%',
  },
}))


const rows = [
    {product:'kakashi',
    price:'20000',
    lot:'7',
    code:'0000077'
  },
  {product:'Nico Robbin',
  price:'20000',
  lot:'7',
  code:'0000078'
  },
  {product:'Sesshomaru',
  price:'20000',
  lot:'7',
  code:'0000079'
  },
  {product:'Gojam',
  price:'20000',
  lot:'7',
  code:'0000080'
  },
  {product:'Gojam ',
  price:'20000',
  lot:'7',
  code:'00000801'
  },
  ]

  
const Home = props => {

    let [products,setProducts] = useState([])

    useEffect(() => {
        if(products.length == 0){
            Axios.post(config.URL_API+':'+config.PORT_API+'/api/v1/storeProducts',{store_id:props.authentication.storeId},{headers:{'Authorization':'Bearer ' + props.authentication.token}}).then((response)=>{
                setProducts(response.data.success);
            });
        }
    });

    let classes = useStyles()
    let title = props.authentication.storeName?props.authentication.storeName:'SIMP'
    return(
        <div style={{display:props.authentication.token?"block":"none"}}>

        <Container >
            {/* este es el componente que hace la barra de header  */}
            <AppBar className={classes.appBar}>
                <div className={classes.title}>
                    <span>{title.toUpperCase()}</span>
                </div>
            </AppBar>

            {/* este es el componente que hace el body  */}
            <div className={classes.fill}></div>
                <Box className={classes.box}>
                    <Grid container>
                        <Box>
                            <SaleBoard/>
                        </Box>
                        <Box style={{marginTop:20}}>

                        {/* <TextField
                            id="filled-adornment-extra-dense"
                            // className={{...classes.margin, ...classes.textField}}
                            variant="filled"
                            margin="dense"
                            hiddenLabel
                            InputProps={{
                            inputProps: {
                            'aria-label': 'amount in Euro',
                            },
                            startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                        /> */}
                            <Table rows={products}/>
                        </Box>
                    </Grid>      
                </Box>
        </Container>
        </div>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)