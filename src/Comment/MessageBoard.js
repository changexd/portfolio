import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AddMessage} from './redux/actions';
import Container from '@material-ui/core/Container';
import Message from './Message';
//register this child to message prop so it can change it's state using redux
const mapStateToProps = (state) => {
  return {message: state.message};
};

class MessageBoard extends Component {
  render() {
    return (
      <Container
        style={{
          height: 'inherit',
          maxHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div style={{flexGrow: '1', overflow: 'auto'}}>
          {this.props.message.map((message) => {
            return <Message message={message} key={message.id} />;
          })}
        </div>
      </Container>
    );
  }
}
export default connect(mapStateToProps)(MessageBoard);
