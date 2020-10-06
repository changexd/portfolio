import React, { Component } from 'react';

// 依照tag分顯示顏色
let colors = {
  Fashion: '#81CAF4',
  LifeStyle: '#8AE17A ',
  Health: '#B5F481',
  Logic: '#F4B281',
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      title: this.props.title,
      body: this.props.body,
      tag: this.props.tag,
    };
  }
  render() {
    return (
      <div
        className='container m-5 p-0 blogpostfont'
        style={{
          width: '350px',
          height: '400px',
          display: 'inline-block',
          position: 'relative',
        }}
      >
        <div
          data={this.props.tag}
          onClick={this.props.searchwithtagname}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '100%',
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            textAlign: 'center',
            backgroundColor: colors[this.state.tag],
            border: '5px solid #31A0C7',
            zIndex: '2',
            cursor: 'pointer',
          }}
        >
          <p
            style={{
              fontSize: '20px',
              position: 'relative',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%',
            }}
          >
            {this.state.tag}
          </p>
        </div>
        <div
          className='p-0 '
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: '15px',
            border: '10px solid #31A0C7',
          }}
        >
          <div
            className='p-0'
            style={{
              height: '60%',
              overflow: 'hidden',
              backgroundColor: '#E3E8E6',
              position: 'relative',
            }}
          >
            <img
              src={`https://robohash.org/${this.state.userId}`}
              style={{ position: 'absolute', top: '-50px', left: '0' }}
            ></img>
          </div>
          <div
            className='p-0'
            style={{
              height: '40%',
              backgroundColor: '#C9CFCC',
              overflow: 'hidden',
            }}
          >
            <p>{this.state.userId}</p>
            <p>{this.state.title}</p>
            <p
              style={{
                height: 'auto',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
              }}
            >
              {this.state.body}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
