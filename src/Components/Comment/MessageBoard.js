import React, {Component} from 'react';
import {connect} from 'react-redux';
import {styled} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Message from './Message';
//register this child to message prop so it can change it's state using redux
const mapStateToProps = (state) => {
  return {message: state.message};
};

const BoardContainer = styled(Container)({
  height: 'inherit',
  maxHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

class MessageBoard extends Component {
  render() {
    return (
      <BoardContainer>
        <div style={{flexGrow: '1', overflow: 'auto'}}>
          {this.props.message.map((message) => {
            return <Message message={message} key={message.id} />;
          })}
        </div>
      </BoardContainer>
    );
  }
}
export default connect(mapStateToProps)(MessageBoard);
