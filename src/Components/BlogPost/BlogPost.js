import React, {Component} from 'react';
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
    this.state = {post: [], searcharea: '', prevY: 0};
    this.scrollRef = React.createRef();
    this.getPosts = this.getPosts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchwithtagname = this.searchwithtagname.bind(this);
  }

  componentDidMount() {
    if (this.state.post.length < 1) {
      this.getPosts();
    }
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.scrollRef);
  }
  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    console.log(y);
    if (this.state.prevY > y) {
      this.getPosts();
    }
    this.setState({prevY: y});
  }
  // Using Axios to fetch API and join the original array in the state.post
  async getPosts() {
    let currentPostNum = this.state.post.length;
    let response = await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      // A very tiny error handling here
      .catch((err) => {
        console.log(err.message);
        this.setState({post: []});
      });
    // This was for loading more posts
    let updatedPosts = this.state.post.concat(
      response.data.slice(currentPostNum, currentPostNum + 10)
    );
    updatedPosts.forEach((element) => {
      element.tag = faketag();
      element.userId = faker.name.findName();
    });
    this.setState({post: updatedPosts});
    console.log(updatedPosts);
  }
  //adding more post with the button
  handleClick = () => {
    this.getPosts();
  };
  handleChange = (event) => {
    this.setState({searcharea: event.target.value});
  };
  //This function is for click the tag and search by the tag
  searchwithtagname = (event) => {
    this.setState({searcharea: event.target.textContent});
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
            onClick={this.props.handleleave}
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
            onChange={this.handleChange}
            className='m-auto p-2 blogsearch'
            type='text'
            placeholder='Search for the event'
            style={{borderRadius: '15px', border: '3px solid #31A0C7'}}
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
                style={{backgroundColor: '#31A0C7'}}
              >
                {' '}
                Click here for the source code!
              </button>
            </a>
            <button
              class='btn  p-3 blogpostfont section m-3'
              style={{backgroundColor: '#31A0C7'}}
              onClick={this.handleClick}
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
          {this.state.post.length < 1 ? (
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
          <div
            ref={(ref) => (this.scrollRef = ref)}
            style={{height: '100px', margin: '30px'}}
          >
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }
}
export default BlogPost;
