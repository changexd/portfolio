import React from 'react';
import IconCheck from './IconCheck';
import teacherIcon from './images/teacher.svg';
import studentIcon from './images/student.svg';

//IconCheck component is reusable for any type of account in the future
function AccountType({selectState, Select}) {
  return (
    <div className='container'>
      <IconCheck
        accountType={'Teacher'}
        iconSrc={teacherIcon}
        selectState={selectState}
        Select={Select}
      />
      <IconCheck
        accountType={'Student'}
        iconSrc={studentIcon}
        selectState={selectState}
        Select={Select}
      />
    </div>
  );
}
export default AccountType;
