import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Table from './../../components/table/Table'
import { connect } from 'react-redux'



const useStyles = makeStyles(theme => ({
   appBar:{
       height:50,
       minWidth:400,
       background:'#574F7D'
   },
   fill:{
       height:40
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
  }
  ]

const Home = props => {
    let classes = useStyles()
    let title = props.authentication.storeName?props.authentication.storeName:'SIMP'
    return(
        <Container >
            <AppBar className={classes.appBar}>
                <div className={classes.title}>
                    <span>{title.toUpperCase()}</span>
                </div>
            </AppBar>
            <div className={classes.fill}></div>
                <Box className={classes.box}>
                    <div style={{width:500}}>
                    <Table rows={rows}/>
                    </div>
                </Box>
        </Container>
    )
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)