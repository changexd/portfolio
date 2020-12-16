import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const headerTitle = [
  {title: 'Home', link: ''},
  {title: 'Todo List', link: 'todolist'},
  {title: 'LightsOut', link: 'lightsout'},
  {title: 'BlogPost', link: 'blogpost'},
  {title: 'Comment', link: 'Comment'},
  {title: 'MessageBox', link: 'MessageBox'},
  {title: 'LoginPage', link: 'LoginPage'},
];
const Header = ({position}) => {
  return (
    <div className={`header__container--${position}`}>
      <ul>
        {headerTitle.map((title) => {
          return (
            <NavLink exact activeClassName='activenav ' to={`/${title.link}`}>
              <li>{title.title}</li>{' '}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};
export default Header;
