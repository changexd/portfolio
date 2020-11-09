import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import Header from './Header';
import Main from './Main';
import LightsOut from './LightsOut/LightsOut';
import TodoListApp from './TodoList/TodoListApp';
import TodoListHookedApp from './TodoListHooked/TodoListHookedApp';
import BlogPostHooked from './BlogPost/BlogPostHooked';
import Comment from './Comment/Comment';
import MessageBox from './MessageBox/MessageBox';
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {MessageBoardReducer} from './Comment/redux/reducers';
//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//store
const commentStore = createStore(MessageBoardReducer);

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
    const routes = [
      {path: '/', app: <Main />, absoluteHeader: true, store: '', exact: true},
      {
        path: '/TodoList',
        app: <TodoListApp handleleave={this.handleleave} />,
        absoluteHeader: false,
        store: '',
        exact: true,
      },
      {
        path: '/TodoListHooked',
        app: <TodoListHookedApp handleleave={this.handleleave} />,
        absoluteHeader: false,
        store: '',
        exact: true,
      },
      {
        path: '/LightsOut',
        app: <LightsOut handleleave={this.handleleave} />,
        absoluteHeader: false,
        store: '',
        exact: true,
      },
      {
        path: '/BlogPost',
        app: <BlogPostHooked handleleave={this.handleleave} />,
        absoluteHeader: false,
        store: '',
        exact: true,
      },
      {
        path: '/Comment',
        app: <Comment handleleave={this.handleleave} />,
        absoluteHeader: false,
        store: commentStore,
        exact: true,
      },
      {
        path: '/MessageBox/',
        app: <MessageBox handleleave={this.handleleave} />,
        absoluteHeader: false,
        store: '',
        exact: false,
      },
    ];

    return (
      <Switch>
        {routes.map((route) => {
          if (route.exact) {
            return (
              <Route
                exact
                path={route.path}
                render={() => (
                  <div>
                    <Header
                      position={route.absoluteHeader ? 'absolute' : 'relative'}
                    />
                    {route.store ? (
                      <Provider store={route.store}>{route.app}</Provider>
                    ) : (
                      route.app
                    )}
                  </div>
                )}
              />
            );
          } else {
            return (
              <Route
                path={route.path}
                render={() => (
                  <div>
                    <Header position={'relative'} />
                    {route.app}
                  </div>
                )}
              />
            );
          }
        })}
      </Switch>
    );
  }
}

export default App;
