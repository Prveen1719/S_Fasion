import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import Banner from './Banner'
import { makeStyles } from '@material-ui/styles'
import Services from './Services'

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

function Home() {
    const classes = useStyles();
    return (
        <div classname={classes.root}>
            <Navbar />
            <Banner />
            <Services />
        </div>
    )
}

export default Home
