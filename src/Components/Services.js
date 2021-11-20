import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card1 from '../Components/Cards/Card1'
import places from './Static/Places';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        margin: 10,
    },
}));

export default function Services() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card1 place={places[0]}/>
            <Card1 place={places[1]}/>
        </div>
    )
}
