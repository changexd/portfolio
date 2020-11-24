import React from 'react';

function IconCheck({selectState, Select, accountType, iconSrc}) {
  return (
    <div
      className=' d-inline-block m-2 p-3 imageContainer'
      style={{
        border:
          selectState == accountType
            ? ' 3px solid rgba(37, 186, 239, 0.6)'
            : '',
      }}
    >
      {selectState == accountType ? (
        <div className='position-absolute checkBox'>
          <p className='verticalCentered inputText'>✓</p>
        </div>
      ) : (
        ''
      )}
      <img
        id={accountType}
        width='100%'
        src={iconSrc}
        onClick={(event) => {
          Select(event);
        }}
      ></img>
      <p className='loginFontWeight m-0'>{accountType}</p>
    </div>
  );
}

export default IconCheck;
