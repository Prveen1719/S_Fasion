import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        textAlign: 'center',
        
    },
    colortext: {
        color: '#5AFF3D',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
    }
}));

export default function Banner() {

    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root}>

        {/* using material ui transitions to make animated title */}
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={40}> 
            <h1 className={classes.title}>
                Welcome to <br />
                <span className={classes.colortext}>Fashion-S</span>
            </h1>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
        </Collapse>
        </div>
    )
}

