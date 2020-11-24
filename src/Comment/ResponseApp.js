import React from 'react';
import ResponseForm from './ResponseForm';
import ResponseList from './ResponseList';
import useResponseState from './hooks/useResponseState';
//if respond is true return ResponseForm
function ResponseApp({respond, ToggleRespond}) {
  //use Hook to handle it's respond and set original state as an empty array, if have time gonna load responses from local storage
  const {AddResponse, DeleteResponse, responsesState} = useResponseState([]);

  return (
    <div
      style={responsesState.length < 1 ? {} : {borderTop: '3px solid black'}}
    >
      {respond ? (
        <ResponseForm AddResponse={AddResponse} ToggleRespond={ToggleRespond} />
      ) : null}
      <ResponseList
        DeleteResponse={DeleteResponse}
        responsesState={responsesState}
      />
    </div>
  );
}
export default ResponseApp;
