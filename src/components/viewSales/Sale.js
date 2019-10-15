import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


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
    height:400,
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
 * @param {*} props  este objeto debe tener products:[{product,price,quantity,code}]
 */
const Sale = props => {
  const classes = useStyles()
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
                key={row.id}
                >
                <StyledTableCell align="right">{row.product.name}</StyledTableCell>
                <StyledTableCell align="right">{row.price},00</StyledTableCell>
                <StyledTableCell align="right">{row.product.price*row.quantity},00</StyledTableCell>
                <StyledTableCell align="right">
                    {row.quantity}
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

export default Sale