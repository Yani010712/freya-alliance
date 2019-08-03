import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  fab: {
    marginTop: theme.spacing(1),
    backgroundColor: '#fff'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div>
      <p> Buy One Give One </p>
      <p> Learn more about our campaign</p> 
      
      
      <Button variant="extended"  className={classes.fab}>
        
        Learn More 
      </Button>
      
    </div>
  );
}