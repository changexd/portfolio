import uuid from 'react-uuid';
import {ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE} from './constants';

//MessageState Here
const initialMessageState = {message: [{id: '1', text: 'Are you Happy?'}]};

export const MessageBoardReducer = (
  state = initialMessageState,
  action = {}
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const addedMessage = {id: uuid(), text: action.payload};
      return {...state, message: [...state.message, addedMessage]};
    case EDIT_MESSAGE:
      const editedMessage = action.payload.editedText;
      const editTarget = state.findIndex(
        (message) => message.id === action.payload.target
      );
      state[editTarget].text = editedMessage;
      return {...state, message: state.message};
    case DELETE_MESSAGE:
      const deletedMessage = state.message.filter(
        (message) => message.id !== action.payload
      );
      return {...state, message: deletedMessage};

    default:
      return {...state};
  }
};
