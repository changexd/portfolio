import React from 'react';
import UseToggleState from '../GeneralFunction/UseToggleState';

// Give different tags different color
let colors = {
  Fashion: '#81CAF4',
  LifeStyle: '#8AE17A ',
  Health: '#B5F481',
  Logic: '#F4B281',
};

//
function Post({userId, title, body, tag}) {
  const [hover, ToggleHover] = UseToggleState(false);

  return (
    <div
      className=' m-5 p-0 m-xs-1 blogpostfont PostContainer'
      onMouseEnter={() => {
        ToggleHover();
      }}
      onMouseLeave={() => {
        ToggleHover();
      }}
    >
      <div
        className='position-absolute '
        style={{
          width: ' 100%',
          height: ' 100%',
          top: '0',
          left: '0',
          border: '10px dashed #21B97B',
          opacity: `${hover === true ? '100%' : '0%'}`,
          transition: 'ease-in 0.2s',
        }}
      ></div>
      <div className='posthover' style={{width: '100%', height: '100%'}}>
        <div
          className='tag'
          data={tag}
          // onClick={this.props.searchwithtagname}
          style={{
            backgroundColor: colors[tag],
          }}
        >
          <p
            style={{
              fontSize: 'auto',
              position: 'relative',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            {tag}
          </p>
        </div>

        <div className='p-0 inner position-relative  '>
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
              src={`https://robohash.org/${userId}`}
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
            <p>{userId}</p>
            <p>{title}</p>
            <p
              style={{
                height: 'auto',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
              }}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
