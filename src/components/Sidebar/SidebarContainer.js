import { connect } from 'react-redux';
import SidebarComponent from './SidebarComponent';
import { createFileActionCreator, focusFileActionCreator } from '../Files/ducks/actions';

const mapStateToProps = state => ({
  files: state.files,
});

const mapDispatchToProps = dispatch => ({
  createFile: () => {
    dispatch(createFileActionCreator());
    document.getElementById('titleField').focus(); // focus the title input
  },
  focusFile: (index) => {
    dispatch(focusFileActionCreator(index));
  },
});

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);

export default SidebarContainer;
