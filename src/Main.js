import React, {Component} from 'react';
import headshot from './headshot.png';

const Main = () => {
  return (
    <div className='main__container'>
      {' '}
      <div className='main__content__container'>
        <div className='main__image'>
          <img width='100%' src={headshot}></img>
        </div>
        <h1>Welcome!</h1>
        <h2> Here are some demonstrations of my projects</h2>
        <h2>Feel free to look around and click everything</h2>
        <h2>
          You can click the navigation bar up here to check it out!
          <br />
          <br />
          Everything on this site is made with <u>React.js</u> and{' '}
          <u>React Router</u>!
        </h2>
      </div>
    </div>
  );
};
export default Main;
