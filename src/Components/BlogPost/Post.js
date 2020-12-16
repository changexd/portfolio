import React from 'react';
import useToggleState from '../GeneralFunction/useToggleState';

// Give different tags different color
let colors = {
  Fashion: '#81CAF4',
  LifeStyle: '#8AE17A ',
  Health: '#B5F481',
  Logic: '#F4B281',
};

//
function Post({userId, title, body, tag, HandleAreaChange}) {
  const [hover, ToggleHover] = useToggleState(false);

  return (
    <div
      className='blogPost__post__container'
      onMouseEnter={() => {
        ToggleHover();
      }}
      onMouseLeave={() => {
        ToggleHover();
      }}
    >
      <div className='blogPost__post__line'></div>
      <div className='blogPost__post__item__container'>
        <div
          className='blogPost__post__tag'
          data={tag}
          // onClick={this.props.searchwithtagname}
          style={{
            backgroundColor: colors[tag],
          }}
          onClick={(evt) => {
            HandleAreaChange(evt.target.innerText);
          }}
        >
          <p>{tag}</p>
        </div>

        <div className='blogPost__post__content '>
          <div className='blogPost__post__image'>
            <img width='100%' src={`https://robohash.org/${userId}`}></img>
          </div>
          <div className='blogPost__post__text'>
            <h1>{userId}</h1>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
