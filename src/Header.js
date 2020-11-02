import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const headerTitle = [
  {title: 'Home', link: ''},
  {title: 'Todo List', link: 'todolist'},
  {title: 'LightsOut', link: 'lightsout'},
  {title: 'BlogPost', link: 'blogpost'},
  {title: 'Comment', link: 'Comment'},
  {title: 'MessageBox', link: 'MessageBox'},
];
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
        {headerTitle.map((title) => {
          return (
            <NavLink
              exact
              activeClassName='activenav '
              className='d-inline-block m-auto p-xs-1 p-3 section nav'
              to={`/${title.link}`}
            >
              <li className=''>{title.title}</li>{' '}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
export default Header;
