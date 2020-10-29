import {useState} from 'react';
import uuid from 'react-uuid';

export default (initialValue) => {
  const [responsesState, setNewResponses] = useState(initialValue);
  return {
    responsesState,
    AddResponse: (text) => {
      setNewResponses([...responsesState, {id: uuid(), text: text}]);
    },
    DeleteResponse: (target) => {
      setNewResponses(
        responsesState.filter((response) => response.id !== target)
      );
    },
  };
};
