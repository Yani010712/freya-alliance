import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../theme/components/Typography';
import TextField from '../theme/components/TextField';
import ContactUs from './ContactUs';

const useStyles = makeStyles(theme => ({
 root: {
   display: 'flex',
   backgroundColor: theme.palette.secondary.light,
   marginTop: theme.spacing(8)
 },
 container: {
   marginTop: theme.spacing(8),
   marginBottom: theme.spacing(8),
   display: 'flex',
 },
 iconsWrapper: {
   height: 120,
 },
 icons: {
   display: 'flex',
 },
 icon: {
   width: 48,
   height: 48,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginRight: theme.spacing(1),
 },
 list: {
   margin: 0,
   listStyle: 'none',
   paddingLeft: 0,
 },
 listItem: {
   paddingTop: theme.spacing(0.5),
   paddingBottom: theme.spacing(0.5),
 },
 language: {
   marginTop: theme.spacing(1),
   width: 150,
 },
}));

const LANGUAGES = [
 {
   code: 'en-US',
   name: 'English',
 },
 {
   code: 'fr-FR',
   name: 'Français',
 },
];

export default function Footer() {
 const classes = useStyles();

 return (
   <div>

     <footer align="center" className="footer-container-1">
       <Typography component="footer" className={classes.root}>
         <Container className={classes.container} className="footer-body" >

           <div className="about-us-container">
             <p>Get to Know Our Team</p>
             <span className="Typography-markedH4Center-10" id="get-to-know-us-underline"></span>
           </div>

         </Container>
       </Typography>
     </footer>


     <footer align="center" className="footer-container-2">
       <Typography component="footer" className={classes.root}>
         <Container className={classes.container} className="footer-body" >

            <div id="email-form" align="center">

              <div>
                <h4 id="contact-header">Contact Us</h4>
                <span className="Typography-markedH4Center-10" id="contact-us-underline"></span>
              </div>

              <div>
                <form method="POST" action="https://formspree.io/aiaother@gmail.com">

                  <div align="center">
                    <div className="input-fields">
                    <label for="formName" id="footer-text"></label><br/>
                      <input type="text" className="frm-control frm-control-sm" placeholder="Name*" />
                    </div>
                    <div>
                    <label for="formEmail" id="footer-text"></label> <br/>
                      <input type="email" className="frm-control frm-control-sm" placeholder="Email Address*" />
                    </div>
                    <div>
                    <label for="formMessage" id="footer-text"></label><br/>
                      <textarea className="frm-control frm-control-sm" rows="2" placeholder="Message*"></textarea>
                    </div>
                  </div>

                  <div align="center">
                    <button type="submit" className="btn1 btn1-outline-light btn-sm">Submit</button>
                  </div>

                </form>
              </div>

            </div>

            <div>
              <p id="footer-text-end">© 2019 The Freya Alliance</p>
            </div>



         </Container>
       </Typography>
     </footer>


    </div>

 );
}
