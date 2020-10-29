import React from 'react';
import useInputChange from '../GeneralFunction/useInputChange';
import UseResponseState from './hooks/UseResponseState';
//Use Hook to connect its response to its parent
function ResponseForm({AddResponse, ToggleRespond}) {
  const [response, HandleChange, ResetResponse] = useInputChange('');

  const responseInput = {
    width: '70%',
    border: '1px solid #9B9B9B',
    borderRadius: '10px',
    padding: '3px',
    textAlign: 'center',
  };
  const responseSubmission = {
    width: '10%',
    backgroundColor: '#DDDDDD',
    border: 'none',
    float: 'right',
    textAlign: 'right',
  };
  return (
    <div style={{textAlign: 'center'}}>
      <form
        style={{margin: '10px 0px 10px 0px'}}
        onSubmit={(event) => {
          if (response === '') {
            event.preventDefault();
            alert('Cannot enter empty message');
          } else {
            event.preventDefault();
            AddResponse(response);
            ResetResponse();
            ToggleRespond();
            console.log(response);
          }
        }}
      >
        <input
          style={responseInput}
          placeholder='在此輸入留言...'
          value={response}
          onChange={(event) => HandleChange(event)}
        ></input>{' '}
        <button type='submit' style={responseSubmission}>
          ▶
        </button>
      </form>
    </div>
  );
}

export default ResponseForm;
