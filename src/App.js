import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import { makeStyles } from '@material-ui/core/styles';
import backgroundpic from './Images/pexels-photo-2536009.jpeg'
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + backgroundpic})` , 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

    <Router>
        <Home />
    </Router>
    </div>
  );
}

export default App;
