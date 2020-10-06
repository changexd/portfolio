import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import LightsOut from './LightsOut/LightsOut';
import TodoListApp from './TodoList/TodoListApp';
import BlogPost from './BlogPost/BlogPost';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <Header position={'absolute'} />
              <Main />
            </div>
          )}
        />
        <Route
          exact
          path='/TodoList'
          render={() => (
            <div>
              <Header position={'relative'} />
              <TodoListApp />
            </div>
          )}
        />
        <Route
          exact
          path='/LightsOut'
          render={() => (
            <div>
              <Header position={'relative'} />
              <LightsOut />
            </div>
          )}
        />
        <Route
          exact
          path='/BlogPost'
          render={() => (
            <div>
              <Header position={'relative'} />
              <BlogPost />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
