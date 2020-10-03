import React, { Component } from 'react';
class TodoList extends Component {
  constructor(props) {
    super(props);
    //這裡把todo array裡個別的state繼承過來
    this.state = {
      task: this.props.task,
      date: this.props.date,
      edit: false,
      id: this.props.id,
    };
    //一定要記得bind function
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDoneSubmit = this.handleDoneSubmit.bind(this);
  }
  //利用computed property names
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  //edit的開關
  handleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };
  //將這個項目的state回傳至parent
  handleDoneSubmit = (event) => {
    const submitDate = this.state;
    this.setState({ edit: !this.state.edit });
    delete submitDate.edit;
    this.props.EditTodo(event.target.parentNode.id, submitDate);
  };
  render() {
    if (this.state.edit == false) {
      return (
        <div className='container my-3'>
          <div
            id={this.state.date}
            className='row px-3 py-2'
            style={{
              backgroundColor: 'rgba(152, 204, 242,.4)',
            }}
          >
            <div className='d-inline-block   col-5 p-2 m-auto section'>
              <p className='m-2 todofont' style={{ color: 'white' }}>
                {this.state.task}
              </p>
            </div>
            <div className='d-inline-block col-5 p-2 m-auto section'>
              <p className='m-2 todofont' style={{ color: 'white' }}>
                {this.state.date}
              </p>
            </div>
            <div
              id={this.state.id}
              className='d-inline-block   col-1 p-2 m-auto section'
            >
              <p
                className='m-2 todofont'
                style={{ color: 'white', cursor: 'pointer' }}
                onClick={this.props.DeleteTodo}
              >
                x
              </p>
            </div>
            <div className='d-inline-block col-1 p-2 m-auto section'>
              <p
                className='m-2 todofont'
                style={{ color: 'white', cursor: 'pointer' }}
                onClick={this.handleEdit}
              >
                edit
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container my-3'>
          <div id={this.state.id}>
            <form
              className='row px-3 py-2'
              style={{
                backgroundColor: 'rgba(152, 204, 242,.4)',
              }}
            >
              <div
                className='d-inline-block col-5 p-2 m-auto section'
                style={{ width: 'auto' }}
              >
                <input
                  className='todofont'
                  style={{
                    width: 'auto',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: 'none',
                  }}
                  name='task'
                  value={this.state.task}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div
                className='d-inline-block col-5 p-2 m-auto section '
                style={{ width: 'auto' }}
              >
                <input
                  className='todofont'
                  style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: 'none',
                  }}
                  name='date'
                  value={this.state.date}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div
                id={this.state.id}
                className='d-inline-block col-1 p-2 m-auto section'
              >
                <p
                  className='m-2 todofont'
                  onClick={this.props.DeleteTodo}
                  style={{ cursor: 'pointer' }}
                >
                  x
                </p>
              </div>
              <div
                id={this.state.id}
                className='d-inline-block col-1 p-2 m-auto section'
              >
                <p
                  className='m-2 todofont'
                  onClick={this.handleDoneSubmit}
                  style={{ cursor: 'pointer' }}
                >
                  done!
                </p>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
export default TodoList;
