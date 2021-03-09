import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const handleAddToCart = () => onAddToCart(product);
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image= {product.image} title={product.name}/>
            <CardContent className={classes.height} >
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                        {product.size}
                    </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <Button variant="contained" disableElevation onClick={handleAddToCart}>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default Product
