import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card1 from '../Components/Cards/Card1'
import services from './Static/Places';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 250,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function Services() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card1 place={services[0]}/>
            <Card1 place={services[1]}/>
            <Card1 place={services[2]}/>
            <Card1 place={services[3]}/>
            <Card1 place={services[4]}/>
            <Card1 place={services[5]}/>
            <Card1 place={services[6]}/>
            <Card1 place={services[7]}/>
        </div>
    )
}
