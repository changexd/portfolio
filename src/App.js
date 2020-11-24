import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import Header from './Header';
import Main from './Main';
import LightsOut from './Components/LightsOut/LightsOut';
import TodoListApp from './Components/TodoList/TodoListApp';
import TodoListHookedApp from './Components/TodoListHooked/TodoListHookedApp';
import BlogPostHooked from './Components/BlogPost/BlogPostHooked';
import Comment from './Components/Comment/Comment';
import MessageBox from './Components/MessageBox/MessageBox';
import LoginPage from './Components/LoginPage/LoginPage';
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {MessageBoardReducer} from './Components/Comment/redux/reducers';
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
      {
        path: '/LoginPage',
        app: <LoginPage handleleave={this.handleleave} />,
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
