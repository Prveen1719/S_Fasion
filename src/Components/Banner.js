import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        
    },
    colortext: {
        color: '#5AFF3D',
    },
}));

export default function Banner() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>
                Welcome to <br />
                <span className={classes.colortext}>Fashion-S</span>
            </h1>
        </div>
    )
}

