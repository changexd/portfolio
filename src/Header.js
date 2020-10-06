import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
const Header = ({ position }) => {
  return (
    <div
      className={`container-fluid  position-${position} nav`}
      style={{ top: '0', backgroundColor: 'rgba(255, 255, 255,0.3)' }}
    >
      <ul
        className=' text-center p-2 mx-auto my-0 '
        style={{ listStyle: 'none' }}
      >
        <NavLink
          exact
          activeClassName='activenav'
          to={process.env.PUBLIC_URL + '/'}
        >
          <li
            className='d-inline-block m-auto p-3 section'
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            Home
          </li>{' '}
        </NavLink>{' '}
        <NavLink
          exact
          activeClassName='activenav'
          to={process.env.PUBLIC_URL + '/todolist'}
        >
          <li
            className='d-inline-block m-auto p-3 section'
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            Todo List
          </li>{' '}
        </NavLink>
        <NavLink
          exact
          activeClassName='activenav'
          to={process.env.PUBLIC_URL + '/lightsout'}
        >
          <li
            className='d-inline-block m-auto p-3 section'
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            lightsout
          </li>{' '}
        </NavLink>
        <NavLink
          exact
          activeClassName='activenav'
          to={process.env.PUBLIC_URL + '/blogpost'}
        >
          <li
            className='d-inline-block m-auto p-3 section'
            style={{ fontSize: '30px', cursor: 'pointer' }}
          >
            BlogPost
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Header;
