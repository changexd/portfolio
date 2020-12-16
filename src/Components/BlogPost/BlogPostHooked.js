import React, {useEffect, useState} from 'react';
import useBlogPostState from './useBlogPostState';
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
    <div className='blogPostApp'>
      <div id='popup' className='popup'>
        <span onClick={handleleave}>X</span>
        This is a demonstration of how you can make a search function using
        React states. <br /> Try and search something or even click on the tag
        to see the magic!
        <br /> 這個頁面利用了Axios串接假的貼文API，而搜尋則是應用了React
        state的變更進行即時的render，你可以試著搜尋些關鍵字甚至是點擊貼文左上角的小圈圈!
        <br />
        <br />
        而搜尋方塊下方也有原始碼與medium詳解可以閱讀
      </div>
      <div className='blogPost__search__container'>
        <h1>Search For the Post!</h1>

        <label>Search:</label>
        <input
          onChange={(event) => {
            HandleAreaChange(event.target.value);
          }}
          type='text'
          placeholder='Search for the event'
          value={searchArea}
        ></input>
        <div>
          <a
            href='https://github.com/changexd/portfolio/tree/main/src/BlogPost'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button class=' section '> Click here for the source code!</button>
          </a>
          <button
            class=' section'
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
          >
            <button class='  section'> Tutorial</button>
          </a>
        </div>
      </div>
      <div className='blogPost__list__container '>
        {/* In case of loading too long, the loading section is added */}
        {post.length < 1 ? (
          <div style={{fontSize: '25px'}}>
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
      </div>
    </div>
  );
}

export default BlogPostHooked;
