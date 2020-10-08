import React, { Component } from 'react';
import headshot from './headshot.png';

const Main = () => {
  return (
    <div className='mainfont mainbackground'>
      {' '}
      <div
        className='container text-center position-relative p-5'
        style={{
          top: '50%',
          transform: 'translate(0,-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      >
        <div className='m-auto p-0 position-relative headshot'>
          <img width='100%' src={headshot}></img>
        </div>
        <h1
          className='blogpostfont'
          style={{ color: 'white', fontSize: '60px' }}
        >
          Welcome!
        </h1>
        <h2
          className='blogpostfont'
          style={{ color: 'white', lineHeight: '2em' }}
        >
          {' '}
          Here are some demonstrations of my projects
        </h2>
        <h2 className='blogpostfont' style={{ color: 'white' }}>
          {' '}
          Feel free to look around and click everything
        </h2>
        <h2 className='m-3 blogpostfont' style={{ color: 'white' }}>
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
