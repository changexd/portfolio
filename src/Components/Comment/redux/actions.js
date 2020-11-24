import {ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE} from './constants';

//Message part
export const AddMessage = (text) => {
  return {type: ADD_MESSAGE, payload: text};
};
export const EditMessage = (target, editedText) => {
  return {
    type: EDIT_MESSAGE,
    payload: {target: target, editedText: editedText},
  };
};
export const DeleteMessage = (target) => {
  return {type: DELETE_MESSAGE, payload: target};
};
