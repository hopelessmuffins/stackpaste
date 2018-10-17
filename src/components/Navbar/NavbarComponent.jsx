import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  button: {
    margin: theme.spacing.unit,
    color: '#ffffff',
  },
});


class NavbarComponent extends React.Component {
  save = () => {
    this.props.createPaste();
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Stackpaste
          </Typography>
          <Button color="primary" className={classes.button} onClick={this.save}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

NavbarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  createPaste: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavbarComponent);