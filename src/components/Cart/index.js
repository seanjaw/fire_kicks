import React from 'react'
// import Grid from '@material-ui/core/Grid';
import CartItem from './CartItem'
import useStyles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import Product from '../Products/Product';

const Cart = ({ cart, onRemoveFromCart }) => {

    let total = cart.reduce((a,b) => a + b.price*b.count, 0)
    const classes = useStyles();
    const renderCart = () => (
        <>
            <TableContainer className={classes.root} component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead className={classes.head} >
                <TableRow className={classes.row}>
                    <TableCell className={classes.cell}>Product</TableCell>
                    <TableCell className={classes.cell} align="right">Size</TableCell>
                    <TableCell className={classes.cell} align="right">Quantity</TableCell>
                    <TableCell className={classes.cell} align="right">Remove</TableCell>
                    <TableCell className={classes.cell} align="right">Price</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {cart.map((item) => (
                    <CartItem item={item} key={item.id} onRemoveFromCart={onRemoveFromCart}/>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            {/* <div className={classes.total}>Total: $1000</div> */}
            <div className={classes.total}>Total ${total}</div>
            <Button variant="contained" className={classes.button}>Pay</Button>
        </>
    )

    const renderEmptyCart = () => (
        <div className={classes.empty}>Your Cart is Empty.</div>
      );

    return (
        <div>
            { !cart.length ? renderEmptyCart() : renderCart() }
        </div>


    )
}

export default Cart
