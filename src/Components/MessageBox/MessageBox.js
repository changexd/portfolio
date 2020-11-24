import React from 'react';
import MessageList from './MessageList';
import MessageText from './MessageText';
import {Route, Switch} from 'react-router-dom';
import useClickToDir from './hooks/useClickToDir';
import useMessageState from './hooks/useMessageState';
import {example} from './example';
import './App.css';

function MessageBox() {
  const [messageState, SortByRecentDate, SortByOlderDate] = useMessageState(
    example
  );
  const [message, SetMessageStateWithLink] = useClickToDir({
    message: '',
    direction: '',
  });
  const appContainer = {
    maxidth: '100vw',
    height: '100vh',
    padding: '0',
    margin: 'auto',
    maxHeight: '100vh',
    overflowY: 'scroll',
  };
  return (
    <Switch>
      <Route
        exact
        path='/MessageBox/'
        render={() => {
          return (
            <div style={appContainer}>
              <MessageList
                SortByRecentDate={SortByRecentDate}
                SortByOlderDate={SortByOlderDate}
                example={messageState}
                SetMessageStateWithLink={SetMessageStateWithLink}
                message={message}
              />
              <MessageText
                message={
                  '您可以點擊左方訊息列表，並觀察網址的變化, You may click on the messages on the right and see if the url changes'
                }
              />
            </div>
          );
        }}
      />
      {messageState.map((ele) => (
        <Route
          key={ele.direction}
          exact
          path={`/MessageBox/${ele.direction}/`}
          render={() => {
            return (
              <div style={appContainer}>
                <MessageList
                  SortByOlderDate={SortByOlderDate}
                  SortByRecentDate={SortByRecentDate}
                  SetMessageStateWithLink={SetMessageStateWithLink}
                  example={messageState}
                />
                <MessageText message={ele.message} from={ele.from} />
              </div>
            );
          }}
        />
      ))}
    </Switch>
  );
}

export default MessageBox;
