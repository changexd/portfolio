import React, {useEffect} from 'react';
import UseBlogPostState from './UseBlogPostState';
import UseInputChange from '../GeneralFunction/UseInputChange';
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

function BlogPostHooked() {
  const [searchArea, HandleAreaChange] = UseInputChange('');
  const [post, AddPost] = UseBlogPostState([]);
  useEffect(() => {
    GetPosts(post, AddPost);
  }, []);
  console.log(post);

  let filtered = [];
  if (post.length > 0) {
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
            // searchwithtagname={this.searchwithtagname}
          />
        );
      });
  }

  return <div>{filtered}</div>;
}

export default BlogPostHooked;
