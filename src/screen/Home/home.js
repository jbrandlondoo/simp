import React,{ useState,useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Grid from "@material-ui/core/Grid"
import Table from './../../components/table/Table'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SaleBoard from './../../components/saleBoard/SaleBoard'
// import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import Options from './../../components/options/Options'
import * as config from './../../config'


const useStyles = makeStyles(theme => ({
   appBar:{
       height:60,
       minWidth:400,
       width:'100%',
       background:'#574F7D',
       padding:0
   },
   fill:{
       height:40,
   },
   divLine:{

   }
   ,
   title:{
    flexGrow: 1,
    //    height:50,
    //    width:200,
    //    textAlign:'center',
    //     padding:10
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
  
const Home = props => {
    let [products,setProducts] = useState([])
    useEffect(() => {
        if(products.length === 0){
            Axios.post(config.URL_API+'/api/v1/storeProducts',{store_id:props.authentication.storeId},{headers:{'Authorization':'Bearer ' + props.authentication.token}}).then((response)=>{
                setProducts(response.data.success);
            });
        }
    },[products]);
    let classes = useStyles()
    let title = props.authentication.storeName?props.authentication.storeName:'SIMP'
    let name = props.authentication.name?props.authentication.name:null
    return (
        props.authentication.token?
        <div>
        <Container >
            {/* este es el componente que hace la barra de header  */}
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {title.toUpperCase()}
                    </Typography>
                    {name?<Options styles={{}} name={name.toUpperCase()}/>:null}
                </Toolbar>
            </AppBar>

            {/* este es el componente que hace el body  */}
            <div className={classes.fill}></div>
                <Box className={classes.box}>
                    <Grid container>
                        <Box>
                        <SaleBoard/>
                        </Box>
                        <Box style={{marginTop:20}}>
                        <Table rows={products}/>
                        </Box>
                    </Grid>      
                </Box>
        </Container>
        </div>:<Redirect to={'/'}/>

    )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)