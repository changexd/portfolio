import React, { Component } from 'react';
import Post from './Post';
const axios = require('axios');
const faker = require('faker');

//Randomly generate Tags for each post
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

class BlogPost extends Component {
  static defaultProps = {
    numPost: 10,
  };
  constructor(props) {
    super(props);
    this.state = { post: [], searcharea: '' };
    this.getPosts = this.getPosts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchwithtagname = this.searchwithtagname.bind(this);
  }

  componentDidMount() {
    if (this.state.post.length === 0) {
      this.getPosts();
    }
  }
  // Using Axios to fetch API and join the original array in the state.post
  async getPosts() {
    let currentPostNum = this.state.post.length;
    let response = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      // A very tiny error handling here
      .catch((err) => {
        console.log(err.message);
        this.setState({ post: [] });
      });
    // This was for loading more posts
    let updatedPosts = this.state.post.concat(
      response.data.slice(currentPostNum, currentPostNum + 10)
    );
    updatedPosts.forEach((element) => {
      element.tag = faketag();
      element.userId = faker.name.findName();
    });
    this.setState({ post: updatedPosts });
    console.log(updatedPosts);
  }
  //adding more post with the button
  handleClick = () => {
    this.getPosts();
  };
  handleChange = (event) => {
    this.setState({ searcharea: event.target.value });
  };
  //This function is for click the tag and search by the tag
  searchwithtagname = (event) => {
    this.setState({ searcharea: event.target.textContent });
  };
  render() {
    // Use array.filter() to display elements that match texts in this.state.searcharea
    const filtered = this.state.post
      .filter((post) => {
        return (
          post.userId
            .toLowerCase()
            .includes(this.state.searcharea.toLocaleLowerCase()) ||
          post.title
            .toLowerCase()
            .includes(this.state.searcharea.toLocaleLowerCase()) ||
          post.tag
            .toLowerCase()
            .includes(this.state.searcharea.toLocaleLowerCase()) ||
          post.body
            .toLowerCase()
            .includes(this.state.searcharea.toLocaleLowerCase())
        );
      })
      .map((p, i) => {
        return (
          <Post
            key={p.id}
            userId={p.userId}
            title={p.title}
            body={p.body}
            tag={p.tag}
            searchwithtagname={this.searchwithtagname}
          />
        );
      });

    return (
      <div
        className='blogpostbackground'
        style={{ backgroundColor: '#88E1AB', minHeight: '1000px' }}
      >
        <div className='container text-center'>
          <h1 className=' p-3 blogpostfont'>Search For the Post!</h1>
          <h2 className=' p-3 blogpostfont'>
            {' '}
            &#40;you can try clicking on the tag!&#41;
          </h2>
          <label className=' p-3 blogpostfont' style={{ fontSize: '25px' }}>
            Search:
          </label>
          <input
            onChange={this.handleChange}
            className='m-auto p-2 blogsearch'
            type='text'
            placeholder='Search for the event'
            style={{ borderRadius: '15px', border: '3px solid #31A0C7' }}
            value={this.state.searcharea}
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
                style={{ backgroundColor: '#31A0C7' }}
              >
                {' '}
                Click here for the source code!
              </button>
            </a>
            <button
              class='btn  p-3 blogpostfont section m-3'
              style={{ backgroundColor: '#31A0C7' }}
              onClick={this.handleClick}
            >
              {' '}
              More Posts!
            </button>
          </div>
        </div>
        <div className='text-center  p-5'>
          {/* In case of loading too long, the loading section is added */}
          {this.state.post.length < 1 ? (
            <div className='blogpostfont' style={{ fontSize: '25px' }}>
              Loading...
              <div class='lds-ring' style={{ verticalAlign: 'middle' }}>
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
}
export default BlogPost;
