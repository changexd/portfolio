import {useState} from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const HandleChange = (event) => {
    setValue(event.target.value);
  };
  const Reset = () => {
    setValue('');
  };
  return [value, HandleChange, Reset];
};
