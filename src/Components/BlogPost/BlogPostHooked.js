import React, {useEffect, useState} from 'react';
import useBlogPostState from './useBlogPostState';
import useInputChange from '../GeneralFunction/useInputChange';
import Post from './Post';

const axios = require('axios');
const faker = require('faker');
function faketag() {
  const randomnumber = Math.floor(Math.random() * 4);
  switch (randomnumber) {
    case 0:
      return 'LifeStyle';
      break;
    case 1:
      return 'Fashion';
      break;
    case 2:
      return 'Health';
      break;
    case 3:
      return 'Logic';
      break;
  }
}
async function GetPosts(currentPost, AddPost) {
  let postNum = currentPost.length;
  let response = await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .catch((err) => {
      console.log(err.message);
      currentPost = currentPost;
    });
  let updatedPosts = response.data.slice(postNum, postNum + 10);
  updatedPosts.forEach((element) => {
    element.tag = faketag();
    element.userId = faker.name.findName();
  });
  AddPost(updatedPosts);
}

function FilterItems(item, ref) {
  return item.toLowerCase().includes(ref.toLocaleLowerCase());
}

function BlogPostHooked({handleleave}) {
  const [searchArea, HandleAreaChange] = useState('');
  const [post, AddPost] = useBlogPostState([]);
  useEffect(() => {
    GetPosts(post, AddPost);
  }, []);

  let filtered = [];
  if (post.length > 0) {
    console.log(post);
    filtered = post
      .filter((post) => {
        return (
          FilterItems(post.userId, searchArea) ||
          FilterItems(post.title, searchArea) ||
          FilterItems(post.tag, searchArea) ||
          FilterItems(post.body, searchArea)
        );
      })
      .map((post) => {
        return (
          <Post
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            tag={post.tag}
            HandleAreaChange={HandleAreaChange}
            // searchwithtagname={this.searchwithtagname}
          />
        );
      });
  }

  return (
    <div
      className='blogpostbackground'
      style={{backgroundColor: '#88E1AB', minHeight: '1000px'}}
    >
      {' '}
      <div
        id='popup'
        className=' p-5'
        style={{
          width: '400px',
          position: 'fixed',
          textAlign: 'center',
          top: '50%',
          left: '5%',
          transform: 'translate(0,-50%)',
          zIndex: '99',
          backgroundColor: 'rgba(255, 255, 255,.9)',
        }}
      >
        <span
          onClick={handleleave}
          className='p-2'
          style={{
            position: 'absolute',
            right: '1%',
            top: '1%',
            cursor: 'pointer',
          }}
        >
          X
        </span>
        This is a demonstration of how you can make a search function using
        React states. <br /> Try and search something or even click on the tag
        to see the magic!
        <br /> 這個頁面利用了Axios串接假的貼文API，而搜尋則是應用了React
        state的變更進行即時的render，你可以試著搜尋些關鍵字甚至是點擊貼文左上角的小圈圈!
        <br />
        <br />
        而搜尋方塊下方也有原始碼與medium詳解可以閱讀
      </div>
      <div className='container text-center'>
        <h1 className=' p-3 blogpostfont'>Search For the Post!</h1>

        <label className=' p-3 blogpostfont' style={{fontSize: '25px'}}>
          Search:
        </label>
        <input
          onChange={(event) => {
            HandleAreaChange(event.target.value);
          }}
          className='m-auto p-2 blogsearch'
          type='text'
          placeholder='Search for the event'
          style={{borderRadius: '15px', border: '3px solid #31A0C7'}}
          value={searchArea}
        ></input>
        <div className='d-block'>
          <a
            href='https://github.com/changexd/portfolio/tree/main/src/BlogPost'
            target='_blank'
            rel='noopener noreferrer'
            className=' m-auto w-auto '
          >
            <button
              class='btn  p-3 blogpostfont section m-3'
              style={{backgroundColor: '#31A0C7'}}
            >
              {' '}
              Click here for the source code!
            </button>
          </a>
          <button
            class='btn  p-3 blogpostfont section m-3'
            style={{backgroundColor: '#31A0C7'}}
            onClick={() => {
              GetPosts(post, AddPost);
              console.log(post);
            }}
          >
            {' '}
            More Posts!
          </button>
          <a
            href='https://medium.com/@darrenwang_1096/利用react-js來做具有搜尋功能的部落格吧-71aaa7b0740d'
            target='_blank'
            rel='noopener noreferrer'
            className=' m-auto w-auto '
          >
            <button
              class='btn  p-3 blogpostfont section m-3'
              style={{backgroundColor: '#31A0C7'}}
            >
              {' '}
              Tutorial
            </button>
          </a>
        </div>
      </div>
      <div className='text-center  p-5'>
        {/* In case of loading too long, the loading section is added */}
        {post.length < 1 ? (
          <div className='blogpostfont' style={{fontSize: '25px'}}>
            Loading...
            <div class='lds-ring' style={{verticalAlign: 'middle'}}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div>{filtered}</div>
        )}
        {/* <div
          // ref={(ref) => (this.scrollRef = ref)}
          style={{height: '100px', margin: '30px'}}
        >
          <span>Loading...</span>
        </div> */}
      </div>
    </div>
  );
}

export default BlogPostHooked;
