import {useState} from 'react';

export default (initialValue) => {
  const [messageState, SetMessageState] = useState(initialValue);
  const SortByRecentDate = () => {
    const sorted = messageState.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    SetMessageState([...sorted]);
  };
  const SortByOlderDate = () => {
    const sorted = messageState.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    SetMessageState([...sorted]);
  };
  return [messageState, SortByRecentDate, SortByOlderDate];
};
