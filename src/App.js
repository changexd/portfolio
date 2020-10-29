import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
//Components
import Main from './Main';
import LightsOut from './LightsOut/LightsOut';
import TodoListApp from './TodoList/TodoListApp';
import TodoListHookedApp from './TodoListHooked/TodoListHookedApp';
import BlogPost from './BlogPost/BlogPost';
import Comment from './Comment/Comment';
import MessageBox from './MessageBox/MessageBox';
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {MessageBoardReducer} from './Comment/redux/reducers';
//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

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
          path='/TodoListHooked'
          render={() => (
            <div>
              <Header position={'relative'} />
              <TodoListHookedApp handleleave={this.handleleave} />
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
        <Route
          exact
          path='/Comment'
          render={() => (
            <div>
              <Header position={'relative'} />
              <Provider store={commentStore}>
                <Comment handleleave={this.handleleave} />
              </Provider>
            </div>
          )}
        />
        <Route
          path='/MessageBox/'
          render={() => (
            <div>
              <Header position={'relative'} />
              <MessageBox handleleave={this.handleleave} />
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
