import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import useStyles from './styles';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';



const NavBar = ({ totalItems }) =>{
    // console.log('total items', totalItems)
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header} elevation={0}>
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            🔥 Fire Kicks 🔥
            </Typography>
            <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default NavBar


