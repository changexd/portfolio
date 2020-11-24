import React from 'react';
function EmailInput({email, EmailInputChange}) {
  return (
    <div id='email' className='my-4 inputContainer'>
      <div id='emailLabel' className='inputLabel'>
        {' '}
        Email{' '}
      </div>
      <div className='inputIconContainer'>
        <p className='inputText verticalCentered p-2'>✉</p>
      </div>
      <input
        value={email}
        id='emailText'
        onChange={EmailInputChange}
        className=' p-2 textArea d-inline-block'
        type='text'
        style={{
          width: '90%',
        }}
        placeholder='Email '
      ></input>
    </div>
  );
}
export default EmailInput;
