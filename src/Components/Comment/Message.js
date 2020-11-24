import React, {Component} from 'react';
import ResponseApp from './ResponseApp';
import {connect} from 'react-redux';
import {DeleteMessage} from './redux/actions';
import Container from '@material-ui/core/Container';
import {styled} from '@material-ui/core/styles';

//Each Message has it's own response

//Not registered to the props because the data is passing down
const mapDispatchToProps = (dispatch) => {
  return {OnDeleteMessage: (event) => dispatch(DeleteMessage(event))};
};
//Styled Components
const replyButton = {
  color: 'white',
  position: 'absolute',
  bottom: '0',
  right: '0',
  margin: '0',
  cursor: 'pointer',
  padding: '5px',
};
const MessageContainer = styled(Container)({
  width: '100%',
  textAlign: 'left',
  position: 'relative',
  backgroundColor: '#DDDDDD',
  color: 'black',
  padding: '15px',
  borderRadius: '10px',
  margin: '15px 0px 15px 0px',
});
const ContentContainer = styled(Container)({
  width: '100%',
  maxWidth: '100%',
  minHeight: '150px',
  maxHeight: '250px',
  overflow: 'auto',
  wordRrap: 'break-word',
  position: 'relative',
  padding: '5px',
});
//TODO Message 可以用將這個props的ID傳下去然後在利用Local Storage存取與接取該ID的response
class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {respond: false};
    this.ToggleRespond = this.ToggleRespond.bind(this);
  }
  //Return a ToggleRespond State for making reply toggelable and pass it down to child
  ToggleRespond = () => {
    this.setState({respond: !this.state.respond});
  };
  HandleDelete = (event) =>
    this.props.OnDeleteMessage(event.target.parentNode.id);
  render() {
    return (
      <MessageContainer id={this.props.message.id}>
        <ContentContainer id={this.props.message.id}>
          <p
            onClick={this.HandleDelete}
            style={{
              float: 'right',
              cursor: 'pointer',
            }}
          >
            X
          </p>
          {this.props.message.text}
          <p onClick={this.ToggleRespond} style={replyButton}>
            {' '}
            {this.state.respond ? '取消' : '回覆'}
          </p>
        </ContentContainer>
        <div>
          <ResponseApp
            respond={this.state.respond}
            ToggleRespond={this.ToggleRespond}
          />
        </div>
      </MessageContainer>
    );
  }
}
export default connect(null, mapDispatchToProps)(Message);
