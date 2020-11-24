import {useState} from 'react';

export default (initialValue) => {
  const [clickToMessageState, SetMessageState] = useState(initialValue);
  const ClickToMessage = (value) => {
    SetMessageState(value);
  };
  return [clickToMessageState, ClickToMessage];
};
