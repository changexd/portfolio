import React, {Component} from 'react';
import ResponseForm from './ResponseForm';
import ResponseList from './ResponseList';
import UseResponseState from './hooks/UseResponseState';
//if respond is true return ResponseForm
function ResponseApp({respond, ToggleRespond}) {
  //use Hook to handle it's respond and set original state as an empty array, if have time gonna load responses from local storage
  const {AddResponse, DeleteResponse, responsesState} = UseResponseState([]);

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
