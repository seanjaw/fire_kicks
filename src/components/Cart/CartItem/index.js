import React from 'react'
import useStyles from './styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Delete } from '@material-ui/icons';

const CartItem = ({ item, onRemoveFromCart }) => {
    const classes = useStyles();
    const handleRemoveFromCart = () => onRemoveFromCart(item);

    return (
        <TableRow className={classes.root} >
        <TableCell component="th" scope="row">
            {item.name}
        </TableCell>
        <TableCell align="right">{item.size.replace("Size: ", "")}</TableCell>
        <TableCell align="right">{item.count}</TableCell>
        <TableCell align="right"><Delete onClick={handleRemoveFromCart}/></TableCell>
        <TableCell align="right">${item.price}</TableCell>
        </TableRow>
    )
}

export default CartItem
