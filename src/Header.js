import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
const Header = ({position}) => {
  return (
    <div
      className={`container-fluid  position-${position}  p-0`}
      style={{top: '0', backgroundColor: 'rgba(255, 255, 255,0.5)'}}
    >
      <ul
        className=' text-center p-2 mx-auto my-0 '
        style={{listStyle: 'none'}}
      >
        <NavLink
          exact
          activeClassName='activenav '
          className='d-inline-block m-auto p-xs-1 p-3 section nav'
          to='/'
        >
          <li className=''>Home</li>{' '}
        </NavLink>{' '}
        <NavLink
          exact
          activeClassName='activenav'
          className='d-inline-block m-auto p-xs-1 p-3 section nav'
          to='/todolist'
        >
          <li>Todo List</li>{' '}
        </NavLink>
        <NavLink
          exact
          activeClassName='activenav'
          className='d-inline-block m-auto p-xs-1 p-3 section nav'
          to='/lightsout'
        >
          <li>lightsout</li>{' '}
        </NavLink>
        <NavLink
          exact
          activeClassName='activenav'
          className='d-inline-block m-auto p-xs-1 p-3 section nav'
          to='/blogpost'
        >
          <li>BlogPost</li>
        </NavLink>
        <NavLink
          exact
          activeClassName='activenav'
          className='d-inline-block m-auto p-xs-1 p-3 section nav'
          to='/Comment'
        >
          <li>Comment</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Header;
