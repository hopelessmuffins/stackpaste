import axios from 'axios';
import history from '../../../history';

export const RECEIVE_PASTE = 'RECEIVE_PASTE';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

export const receivePasteActionCreator = (paste) => {
  return {
    type: RECEIVE_PASTE,
    paste,
  };
};

export const updateTitleActionCreator = (title) => {
  return {
    type: UPDATE_TITLE,
    title,
  };
};

export const updateDescriptionActionCreator = (description) => {
  return {
    type: UPDATE_DESCRIPTION,
    description,
  };
};

export const getPasteThunk = (short) => {
  return (dispatch) => {
    axios.get(`/api/pastes/${short}`)
      .then(res => res.data)
      .then((paste) => {
        dispatch(receivePasteActionCreator(paste));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};


export const createPasteThunk = () => {
  return (dispatch, getState) => {

    const { app } = getState();
    const { title, description } = app;

    axios.post('/api/pastes', {
      title,
      description,
    })
      .then(res => res.data)
      .then((createdPaste) => {
        dispatch(receivePasteActionCreator(createdPaste));
        history.push(`/${createdPaste.short}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};