import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

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
    // using react use effect property
    useEffect(() => {
        setChecked(true);
    }, []); 
    return (
        <div className={classes.root} id="header">

        {/* using material ui transitions to make animated title */}
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={30}> 
            <h1 className={classes.title}>
                Welcome to <br />
                <span className={classes.colortext}>Fashion-S</span>
            </h1>

            {/* Icon button to godown */}
            <Scroll to="services" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
            </Scroll>
        </Collapse>
        </div>
    )
}

