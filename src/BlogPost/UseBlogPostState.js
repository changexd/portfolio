import {useState} from 'react';
export default (initialValue) => {
  const [post, SetPostState] = useState(initialValue);
  const AddPost = (newPosts) => {
    SetPostState(...post, newPosts);
  };
  return [post, AddPost];
};
