import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { connect } from 'react-redux'



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
    overflow:'scroll',
    height:500,
  },
  root: {
    width: '100%',
  },
  table: {
  },
}));

/**
 * 
 * @param {*} props  este objeto debe tener products:[{product,price,lot,code}]
 */
const TableResume = props => {
  const classes = useStyles()
  return (
    <div className={classes.tablescroll}>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Producto</StyledTableCell>
            <StyledTableCell align="right">Total(COP)</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products?props.products.map(row => (
                <StyledTableRow 
                key={row.code}
                hover
                onClick={event => {console.log(row)}}>
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
  products:state.products.products
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(TableResume)