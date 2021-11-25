import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 290,
    height: 380,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

// create static objects to store service data in a seperate file and import data from it.
export default function Card1( {place}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          // importing images from static file
          image= {place.imageUrl} 
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          {/* importing the title by {place.title} */}
            {place.title} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {place.desc}
          </Typography>
        </CardContent>
    </Card>
  );
}