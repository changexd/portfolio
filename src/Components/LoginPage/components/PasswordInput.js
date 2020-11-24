import React from 'react';
function PasswordInput({password, PasswordInputChange}) {
  return (
    <div id='password' className='my-4 inputContainer'>
      <div id='passwordLabel' className='inputLabel'>
        {' '}
        Password{' '}
      </div>
      <div className='inputIconContainer'>
        <p className='inputText verticalCentered p-2'>🔒</p>
      </div>
      <input
        value={password}
        id='passwordText'
        onChange={PasswordInputChange}
        className=' p-2 textArea d-inline-block'
        type='password'
        style={{
          width: '70%',
        }}
        placeholder='Password'
      ></input>
      <div
        className='textArea d-inline-block'
        style={{
          width: '20%',
          verticalAlign: 'top',
        }}
      >
        <p
          className='verticalCentered loginFontWeight forgot'
          style={{
            borderLeft: '1px solid  rgba(174, 174, 174, 1)',
            color: ' rgba(37, 186, 239, 1)',
          }}
        >
          Forgot?
        </p>
      </div>
    </div>
  );
}
export default PasswordInput;
