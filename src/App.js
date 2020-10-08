import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Main from './Main';
import LightsOut from './LightsOut/LightsOut';
import TodoListApp from './TodoList/TodoListApp';
import BlogPost from './BlogPost/BlogPost';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

//Using reactrouter to route the site
class App extends Component {
  constructor(props) {
    super(props);
    this.handleleave = this.handleleave.bind(this);
  }
  handleleave = () => {
    document.querySelector('#popup').style.display = 'none';
  };
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
              <TodoListApp handleleave={this.handleleave} />
            </div>
          )}
        />
        <Route
          exact
          path='/LightsOut'
          render={() => (
            <div>
              <Header position={'relative'} />
              <LightsOut handleleave={this.handleleave} />
            </div>
          )}
        />
        <Route
          exact
          path='/BlogPost'
          render={() => (
            <div>
              <Header position={'relative'} />
              <BlogPost handleleave={this.handleleave} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
