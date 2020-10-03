import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import ColorBox from './ColorBox/ColorBox';
import TodoListApp from './TodoList/TodoListApp';
import BlogPost from './BlogPost/BlogPost';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container-fluid bg-info'>
          <ul
            className=' text-center p-2 mx-auto my-0'
            style={{ listStyle: 'none' }}
          >
            {' '}
            <li
              className='d-inline-block m-auto p-3'
              style={{ fontSize: '30px' }}
            >
              Todo List
            </li>{' '}
            <li
              className='d-inline-block m-auto p-3'
              style={{ fontSize: '30px' }}
            >
              Colorbox
            </li>{' '}
            <li
              className='d-inline-block m-auto p-3'
              style={{ fontSize: '30px' }}
            >
              BlogPost
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' render={() => <Main />} />
          <Route exact path='/TodoList' render={() => <TodoListApp />} />
          <Route exact path='/ColorBox' render={() => <ColorBox />} />
          <Route exact path='/BlogPost' render={() => <BlogPost />} />
        </Switch>
      </div>
    );
  }
}

export default App;
