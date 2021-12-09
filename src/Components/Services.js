import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card1 from '../Components/Cards/Card1'
import services from './Static/Places';
import useWindowPosition from './Hook/useWindowPosition';

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
    const checked = useWindowPosition('header')

    return (
        <div className={classes.root} id="services">
            <Card1 place={services[0]} checked={checked}/>
            <Card1 place={services[1]} checked={checked}/>
            <Card1 place={services[2]} checked={checked}/>
            <Card1 place={services[3]} checked={checked}/>
            <Card1 place={services[4]} checked={checked}/>
            <Card1 place={services[5]} checked={checked}/>
            <Card1 place={services[6]} checked={checked}/>
            <Card1 place={services[7]} checked={checked}/>
        </div>
    )
}
