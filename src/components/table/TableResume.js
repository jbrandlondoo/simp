import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import {
  changeQuantityProduct,
  selectProduct
} from './../../store/action/index'



const StyledTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.gray
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  tablescroll:{
    overflowY:'scroll',
    height:450,
  },
  root: {
    width: '100%',
  },
  table: {
  },
  inputQuantity:{
    width:50
  },
  rowSelected:{
    opacity:0.5
  }
}));

/**
 * 
 * @param {*} props  este objeto debe tener products:[{product,price,lot,code}]
 */
const TableResume = props => {
  const classes = useStyles()
  const handleOnChange = (e,code) =>{
    let temp = e.target.value >= 0?e.target.value:0
    props.changeQuantityProduct({code,quantity:temp})
  }
  return (
    <div className={classes.tablescroll}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Producto</StyledTableCell>
            <StyledTableCell align="right">Total U(COP)</StyledTableCell>
            <StyledTableCell align="right">Total N(COP)</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products?props.products.map(row => (
                <StyledTableRow 
                key={row.code}
                className={row.selected?classes.rowSelected:null}
                hover
                onClick={event => {props.selectProduct(row)}}>
                <StyledTableCell align="right">{row.product}</StyledTableCell>
                <StyledTableCell align="right">{row.price},00</StyledTableCell>
                <StyledTableCell align="right">{row.price*row.lot},00</StyledTableCell>
                <StyledTableCell align="right">
                  <input type='number' className={classes.inputQuantity} value={row.lot} onChange={e=>handleOnChange(e,row.code)}></input>
                </StyledTableCell>
                </StyledTableRow>
          )):
            null
          }
        </TableBody>
      </Table>
    </Paper>
    </div>
  );
}

const mapStateToProps = state => ({
  products:state.products.products
})
const mapDispatchToProps = dispatch => ({
  changeQuantityProduct:payload => dispatch(changeQuantityProduct(payload)),
  selectProduct:payload => dispatch(selectProduct(payload)),
})
export default connect(mapStateToProps,mapDispatchToProps)(TableResume)