import {useState} from 'react';
export default (initialValue) => {
  const [selectState, SetSelectState] = useState(initialValue);
  const Select = (event) => {
    SetSelectState(event.target.id);
  };
  const SetSelectDefault = () => {
    SetSelectState(initialValue);
  };
  return [selectState, Select, SetSelectDefault];
};
