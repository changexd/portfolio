import React, {Component} from 'react';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@material-ui/core/Card';
import {styled} from '@material-ui/core/styles';

//It's actually better to just use Hook or useContext, but I would like to practice Redux on this, Redux is more suitable for "Global State"
const MyCard = styled(Card)({
  background: '#FFFFFF',
  border: 0,
  borderRadius: 3,
  margin: '10px',
  color: 'white',
  padding: '15px',
  width: '60vw',
  border: 'solid 2px #DDDDDD',
  display: 'inline-block',
  position: 'relative',
  textAlign: 'center',
  height: 'auto',
  maxHeight: '80vh',
});

const mapStateToProps = (state) => {
  return {message: state.message};
};

class Comment extends Component {
  render() {
    return (
      <div className='blogpostbackground' style={{height: '100vh'}}>
        <div
          className='text-center container-fluid'
          style={{
            position: 'relative',
            transform: 'translateY(-50%)',
            top: '50%',
          }}
        >
          <MyCard>
            <MessageForm />
            <MessageBoard />
          </MyCard>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Comment);
