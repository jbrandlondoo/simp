import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Grid from "@material-ui/core/Grid"
import Table from './../../components/table/Table'
import SaleBoard from './../../components/saleBoard/SaleBoard'
import { connect } from 'react-redux'




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
   }
}))


const rows = [
    {product:'kakashi',
    price:'20000',
    lot:'7',
    code:'0000077'
  },
  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },
  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },
  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },  {product:'kakashi',
  price:'20000',
  lot:'7',
  code:'0000078'
  },
  ]

const Home = props => {
    let classes = useStyles()
    let title = props.authentication.storeName?props.authentication.storeName:'SIMP'
    return(
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
                        <Box>
                            <Table rows={rows}/>
                        </Box>
                    </Grid>      
                </Box>
        </Container>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)