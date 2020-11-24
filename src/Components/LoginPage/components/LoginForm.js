import React from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import useInputChange from '../../GeneralFunction/useInputChange';
import PasswordVerfication from '../functions/PasswordVerfication';

function LoginForm({selectState, AddMember, SetSelectDefault}) {
  const [email, EmailInputChange, SetEmailDefault] = useInputChange('');
  const [password, PasswordInputChange, SetPassWordDefault] = useInputChange(
    ''
  );

  //Submits and set all type of input to default value
  const SubmitAndSetAllDefault = () => {
    if (selectState == '') {
      alert('請選擇帳號類型');
    } else {
      AddMember({type: selectState, email: email, password: password});
      SetEmailDefault();
      SetPassWordDefault();
      SetSelectDefault();
      alert(`登入成功! 您的emai為:${email} 登入類型為${selectState}`);
    }
  };
  return (
    <form
      className='p-2'
      onSubmit={(event) => {
        event.preventDefault();
        PasswordVerfication(email, password).isVerified
          ? SubmitAndSetAllDefault()
          : alert(PasswordVerfication(email, password).response);
      }}
    >
      <EmailInput email={email} EmailInputChange={EmailInputChange} />
      <PasswordInput
        password={password}
        PasswordInputChange={PasswordInputChange}
      />
      <div className='container'>
        {' '}
        <div className='d-inline-block float-left my-3'>
          <p className='d-inline loginFontWeight'>Need Source Code?</p>{' '}
          <a
            href='https://github.com/changexd/portfolio/tree/main/src/Components/LoginPage'
            className='d-inline loginFontWeight'
            target='_blank'
            rel='noopener noreferrer'
          >
            Click Me
          </a>
        </div>
        <button type='submit' className='float-right my-3 loginButton'>
          <p style={{color: 'white', margin: '0'}}>Login</p>
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
