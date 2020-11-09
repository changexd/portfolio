import {useState} from 'react';
export default (initialValue) => {
  const [post, SetPostState] = useState(initialValue);
  const AddPost = (newPosts) => {
    const added = [...post, ...newPosts];
    SetPostState(added);
    console.log(added);
  };
  return [post, AddPost];
};
