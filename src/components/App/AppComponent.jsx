import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar/NavbarContainer';
import Workspace from '../Workspace/WorkspaceContainer';
import Sidebar from '../Sidebar/SidebarContainer';
import ErrorPage from '../ErrorPage/ErrorPageComponent';
import Tutorial from '../Tutorial/TutorialContainer';

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: '#20262e',
  },
  circular: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
  },
  toolbar: theme.mixins.toolbar,
});

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.getPaste();
  }

  render() {
    const { classes, searching, notFound, serverError } = this.props;

    if (serverError) {
      return <ErrorPage message="Something funky is going on with our servers. Please try again later." />;
    }

    if (notFound) {
      return <ErrorPage message="This page does not exist." />;
    }

    return (
      <div className={classes.root}>
        <Navbar />
        {
          searching ? (
            <div className={classes.circular}>
              <div className={classes.toolbar} />
              <CircularProgress className={classes.progress} size={100} thickness={6} />
            </div>
          ) : (
            <div className={classes.root}>
              <Sidebar />
              <Workspace />
            </div>
          )
        }
        <Tutorial />
      </div>
    );
  }
}

AppComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  getPaste: PropTypes.func.isRequired,
  searching: PropTypes.bool.isRequired,
  notFound: PropTypes.bool.isRequired,
  serverError: PropTypes.bool.isRequired,
};


export default withStyles(styles)(AppComponent);
