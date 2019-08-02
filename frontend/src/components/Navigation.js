// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Logo from './Logo';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//
// const theme1 = createMuiTheme({
//   overrides: {
//     MuiSelect: {
//       select: {
//         "&:focus": {
//           border: "0px !important",
//           background: "$labelcolor"
//         }
//       }
//     }
//   }
// });
//
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     backgroundColor: '#565f6f',
//     // backgroundImage: 'linear-gradient(to top, #565f6f 0%, #537895 100%)',
//     border: 0,
//     borderRadius: 0,
//     boxShadow: '0 3px 30px 2px grey',
//     height: '3.5rem',
//     position: 'fixed',
//     width: '100%',
//     color: 'white',
//   },
// });
//
// export default function CenteredTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//
//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }
//
//   return (
//
// // Your Component here
//   <MuiThemeProvider theme={theme1}>
//     <Paper id="nav-tabs" className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="white"
//       >
//         <Tab className="nav-bttn" label="Home" />
//         <Tab className="nav-bttn" label="News" />
//         <Tab className="nav-bttn" label="Reviews" />
//         <Tab className="nav-bttn" label="Partnership" />
//       </Tabs>
//     </Paper>
//   </MuiThemeProvider>
//
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // ORIGINAL CODE BY YANI
// // import React from "react";
// // import { NavHashLink as NavLink } from "react-router-hash-link";
// // import Logo from './Logo';
// //
// // const Navigation = () => {
// //   return (
// //     <div>
// //       <nav className="navbar-pink navbar navbar-expand-lg navbar-light bg-dark fixed-top">
// //         <Logo />
// //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
// //           <div className="navbar-nav">
// //             <NavLink className="nav-item nav-link active" to="/#home">
// //               Home
// //             </NavLink>
// //             <NavLink className="nav-item nav-link" to="/#products">
// //               Products
// //             </NavLink>
// //             <NavLink className="nav-item nav-link" to="/news">
// //               News
// //             </NavLink>
// //             <NavLink className="nav-item nav-link" to="/#reviews">
// //               Reviews
// //             </NavLink>
// //             <NavLink className="nav-item nav-link" to="/quiz">
// //               Quiz
// //             </NavLink>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };
// //
// // export default Navigation;
