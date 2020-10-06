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
      <div className=' m-5 p-0 m-xs-1 blogpostfont PostContainer'>
        <div
          className='tag'
          data={this.props.tag}
          onClick={this.props.searchwithtagname}
          style={{
            backgroundColor: colors[this.state.tag],
          }}
        >
          <p
            style={{
              fontSize: 'auto',
              position: 'relative',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%',
            }}
          >
            {this.state.tag}
          </p>
        </div>
        <div className='p-0 inner ' style={{}}>
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
              width='100%'
              src={`https://robohash.org/${this.state.userId}`}
              className='robots'
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
