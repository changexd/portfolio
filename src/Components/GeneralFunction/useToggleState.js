import {useState} from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const ToggleState = () => setValue(!value);
  return [value, ToggleState];
};
