import React from 'react';
import LoginForm from './components/LoginForm';
import AccountType from './components/AccountType';
import useSubmitState from './hooks/useSubmitState';
import useSelectState from './hooks/useSelectState';
import WelcomMessage from './components/WelcomeMessage';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [selectState, Select, SetSelectDefault] = useSelectState('');
  const [memberState, AddMember] = useSubmitState([]);
  //you can submit one account to see if it works properly
  // console.log(memberState);
  return (
    <div className='loginApp ' style={{backgroundColor: '#F2F4F4'}}>
      <div className='loginContainer'>
        <h5 className=' blueTheme my-3'>Choose Account Type</h5>
        <AccountType selectState={selectState} Select={Select} />
        <WelcomMessage selectState={selectState} />

        <LoginForm
          selectState={selectState}
          AddMember={AddMember}
          SetSelectDefault={SetSelectDefault}
        />
      </div>
    </div>
  );
}

export default LoginPage;
