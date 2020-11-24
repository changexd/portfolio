import React from 'react';
import uuid from 'react-uuid';

function ResponseList({DeleteResponse, responsesState}) {
  return responsesState.map((response) => {
    return (
      <div key={response.id} style={{padding: '10px'}}>
        {response.text}{' '}
        <p
          id={response.id}
          onClick={(event) => DeleteResponse(event.target.id)}
          style={{float: 'right', cursor: 'pointer'}}
        >
          x
        </p>
      </div>
    );
  });
}

export default ResponseList;
