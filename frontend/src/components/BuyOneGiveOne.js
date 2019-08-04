
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '../theme/components/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    minWidth: 200,
    marginTop: 50,
    backgroundPosition: 'center',
  },
  input: {
    display: 'none',
  },
  
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (

    <div>
    
    <Typography color="inherit" align="center" variant="h3" marked="center">
        Buy One Give One 
      </Typography>
      <Typography color="inherit" align="center" variant="h5" marked="center"> 
        Learn more about our campaign
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        href="https://www.womenshealthmag.com/life/a19974024/periods-around-the-world/"
      >
        Learn More
      </Button> 

    
      
    </div>
  );
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';

// const useStyles = makeStyles(theme => ({
//   fab: {
//     marginTop: theme.spacing(3),
//     backgroundColor: '#fff'
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(3),
//   },
// }));

// export default function FloatingActionButtons() {
//   const classes = useStyles();

//   return (
//     <div>
//       <p> Buy One Give One </p>
//       <p> Learn more about our campaign</p> 
      
      
//       <Button variant="extended"  className={classes.fab}>
        
//         Learn More 
//       </Button>
      
//     </div>
//   );
// }





