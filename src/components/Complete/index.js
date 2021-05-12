import React from 'react';
import useStyles from './styles';

import checkmark from '../../assets/checkmark.svg'

const Complete = () => {
    const classes = useStyles();

    return (
        <div className={classes.empty}>
            <h3>Your payment has been processed.</h3>
            <img className={classes.checkmark} src={checkmark}/>
        </div>
    )

}

export default Complete