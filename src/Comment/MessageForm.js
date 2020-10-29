import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import {AddMessage} from './redux/actions';
import {connect} from 'react-redux';
import {styled} from '@material-ui/core/styles';

//again, it's easier to just use Hook, or at least use hooks with redux, due to the time limit, this is gonna be it
const mapStateToProps = (state) => {
  return {message: state.message};
};
const mapDispatchToProps = (dispatch) => {
  return {OnSubmit: (text) => dispatch(AddMessage(text))};
};
const MessageTextField = styled(TextField)({
  width: '100%',
  maxHeight: '200px',
  padding: '5px',
  borderRadius: '10px',
});
const MessageButton = styled(Button)({margin: '10px', display: 'inline-block'});
const MessageFormContainer = styled(Container)({
  borderBottomStyle: 'solid ',
  border: '3px black',
});
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {textArea: ''};
    this.HandleChange = this.HandleChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }
  HandleChange = (event) => {
    this.setState({textArea: event.target.value});
  };
  HandleSubmit = (event) => {
    if (this.state.textArea == '') {
      event.preventDefault();
      alert('留言不可為空白');
    } else {
      event.preventDefault();
      this.props.OnSubmit(this.state.textArea);
      this.setState({textArea: ''});
    }
  };
  render() {
    return (
      <div>
        <Container
          style={
            this.props.message.length < 1
              ? {borderBottom: '3px solid black'}
              : {}
          }
        >
          <form onSubmit={this.HandleSubmit}>
            <MessageTextField
              variant='outlined'
              rows='5'
              multiline='true'
              id='standard-basic'
              label='請在此輸入留言...'
              value={this.state.textArea}
              type='text'
              onChange={this.HandleChange}
            />

            <div style={{textAlign: 'right'}}>
              <MessageButton variant='contained' color='primary' type='submit'>
                留言
              </MessageButton>
            </div>
          </form>
        </Container>
        {this.props.message.length < 1 ? (
          <p style={{color: 'black', padding: '10px'}}> 目前沒有訊息</p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
