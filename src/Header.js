import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({ position }) => {
  return (
    <div
      className={`container-fluid  position-${position} nav p-0`}
      style={{ top: '0', backgroundColor: 'rgba(255, 255, 255,0.3)' }}
    >
      <ul
        className=' text-center p-2 mx-auto my-0 '
        style={{ listStyle: 'none' }}
      >
        <NavLink exact activeClassName='activenav' to='/'>
          <li className='d-inline-block m-auto p-xs-1 p-3 section'>Home</li>{' '}
        </NavLink>{' '}
        <NavLink exact activeClassName='activenav' to='/todolist'>
          <li className='d-inline-block m-auto  p-xs-1 p-3 section'>
            Todo List
          </li>{' '}
        </NavLink>
        <NavLink exact activeClassName='activenav' to='/lightsout'>
          <li className='d-inline-block m-auto p-xs-1 p-3 section'>
            lightsout
          </li>{' '}
        </NavLink>
        <NavLink exact activeClassName='activenav' to='/blogpost'>
          <li className='d-inline-block m-auto p-xs-1 p-3 section'>BlogPost</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Header;
