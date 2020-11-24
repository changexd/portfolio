import React from 'react';
function WelcomMessage({selectState}) {
  let welcomeMessage = '';
  switch (selectState) {
    case 'Teacher':
      welcomeMessage = (
        <p className='loginFontWeight greyText my-2'>
          Hello Teacher! <br />
          Please fill out the form to get started
        </p>
      );

      break;
    case 'Student':
      welcomeMessage = (
        <p className='loginFontWeight greyText my-2'>
          Hello Student! <br />
          Please fill out the form to get started
        </p>
      );

      break;
    default:
      welcomeMessage = (
        <p className='loginFontWeight greyText my-2'>
          You can click on the Account Type to see what happens
        </p>
      );
  }
  return <div className='my-3'>{welcomeMessage}</div>;
}

export default WelcomMessage;
