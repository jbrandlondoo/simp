import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'
import * as actions from './../../store/action/index'



const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#574F7D',
    color: theme.palette.common.white,
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
    overflow:'scroll',
    height:500,
    marginTop:2,
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
}));

/**
 * 
 * @param {*} props  este objeto debe tener ROWS:[{product,price,lot,code}]
 */
const TableProduct = props => {
  const classes = useStyles()
  return (
    <div className={classes.tablescroll}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Codigo</StyledTableCell>
            <StyledTableCell align="right">Producto</StyledTableCell>
            <StyledTableCell align="right">Precio(COP)</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows?props.rows.map(row => (
                <StyledTableRow 
                key={row.code}
                hover
                onClick={event => {props.addProductToSell(row)}}>
                <StyledTableCell component="th" scope="row">
                    {row.code}
                </StyledTableCell>
                <StyledTableCell align="right">{row.product}</StyledTableCell>
                <StyledTableCell align="right">{row.price},00</StyledTableCell>
                <StyledTableCell align="right">{row.lot}</StyledTableCell>
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
})
const mapDispatchToProps = dispatch => ({
  addProductToSell: payload => dispatch(actions.addProductToSell(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(TableProduct)