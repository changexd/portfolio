import React, { Component } from 'react';
import headshot from './headshot.png';

const Main = () => {
  return (
    <div className='mainfont mainbackground'>
      {' '}
      <div
        className='text-center position-relative'
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <div className='m-auto p-0 position-relative headshot'>
          <img width='100%' src={headshot}></img>
        </div>
        <h1 className='m-3' style={{ color: 'white' }}>
          Welcome! Here are some of my past small projects!
          <br /> feel free to look around!
        </h1>
        <h2 className='m-3' style={{ color: 'white' }}>
          You can click the navigation bar up here to check my small projects
        </h2>
      </div>
    </div>
  );
};
export default Main;
