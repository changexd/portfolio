import {useState} from 'react';

export default (initialValue) => {
  const [memberState, SetMemberState] = useState(initialValue);
  const AddMember = (memberInfo) => {
    SetMemberState([...memberState, memberInfo]);
  };
  return [memberState, AddMember];
};
