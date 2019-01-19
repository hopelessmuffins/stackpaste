import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    backgroundColor: '#1c2128',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#cfd0d2',
  },
  titleLink: {
    color: '#cfd0d2',
    textDecoration: 'none',
  },
  buttonRoot: {
    '&:hover': {
      color: '#0084ff',
    },
    '&:focus': {
      color: '#0084ff',
    },
  },
});


function NavbarComponent(props) {
  const { classes, short, createPaste, createVersion, reset } = props;
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="inherit" noWrap>
          <Link to="/" onClick={reset} className={classes.titleLink}>stackpaste &nbsp;</Link>
        </Typography>
        {
          short ? (
            <Button
              color="inherit"
              className={classes.button}
              onClick={createVersion}
              classes={{
                root: classes.buttonRoot,
              }}
            >
              <CloudUploadIcon />
              &nbsp; Update
            </Button>
          )
            : (
              <Button
                color="inherit"
                className={classes.button}
                onClick={createPaste}
                classes={{
                  root: classes.buttonRoot,
                }}
              >
                <CloudUploadIcon />
                &nbsp; Save
              </Button>
            )
        }

      </Toolbar>
    </AppBar>
  );
}

NavbarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  createPaste: PropTypes.func.isRequired,
  createVersion: PropTypes.func.isRequired,
  short: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavbarComponent);
