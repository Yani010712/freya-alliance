import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../theme/components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../theme/components/Toolbar';

import { NavHashLink as NavLink } from "react-router-hash-link";

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

const AppAppBar = ({ classes, showModal }) => (
  <>
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <div className={classes.left}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            component={NavLink}
            smooth
            to="/#home"
          >
            {'freya alliance'}
          </Link>
        </div>
        
        <div className={classes.right}>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            component={NavLink}
            smooth
            to="/#home"
          >
            Home
          </Link>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            component={NavLink}
            smooth
            to="/#products"
          >
            Products
          </Link>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            component={NavLink}
            to="/news"
          >
            News
          </Link>
          {/* <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            component={NavLink}
            smooth
            to="/#news"
          >
            News
          </Link> */}
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            component={NavLink}
            onClick={showModal}
            smooth
            to="#"
          >
            Quiz
          </Link>
        </div>
      </Toolbar>
    </AppBar>
    <div className={classes.placeholder} />
  </>
);

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);






/*
import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Logo from './Logo';

const Navigation = ({ showModal }) => {
  return (
    <div>
      <nav className="navbar-pink navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/#home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#products">
              Products
            </NavLink>
            <NavLink className="nav-item nav-link" to="/news">
              News
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#reviews">
              Reviews
            </NavLink>
            <NavLink to="#" className="nav-item nav-link" onClick={showModal}>
              Quiz
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
*/