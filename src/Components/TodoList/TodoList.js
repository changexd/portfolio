import React, {Component} from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    //Inherit states from parent
    this.state = {
      task: this.props.task,
      date: this.props.date,
      edit: false,
      id: this.props.id,
    };
    //Don't forget to bind function
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDoneSubmit = this.handleDoneSubmit.bind(this);
  }
  //Using computed property name so we don't have to create new functions
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };
  //switch for edit
  handleEdit = () => {
    this.setState({edit: !this.state.edit});
  };
  //send data of this child state to parent
  handleDoneSubmit = (event) => {
    const submitDate = this.state;
    this.setState({edit: !this.state.edit});
    delete submitDate.edit;
    this.props.EditTodo(event.target.parentNode.id, submitDate);
  };
  render() {
    if (this.state.edit == false) {
      return (
        <div className='todoItem'>
          <div id={this.state.date} className='todoItem__container'>
            <div className='todoItem__task section'>
              <p>{this.state.task}</p>
            </div>
            <div className='todoItem__date section'>
              <p>{this.state.date}</p>
            </div>
            <div id={this.state.id} className='todoItem__option section'>
              <p onClick={this.props.DeleteTodo}>x</p>
            </div>
            <div className='todoItem__option section'>
              <p onClick={this.handleEdit}>edit</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='todoItem '>
          <div id={this.state.id}>
            <form className='todoItem__container'>
              <div className='todoItem__task section'>
                <input
                  className='todoItem__editArea'
                  name='task'
                  value={this.state.task}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className='todoItem__date section '>
                <input
                  className='todoItem__editArea section'
                  name='date'
                  value={this.state.date}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div id={this.state.id} className='todoItem__option section'>
                <p onClick={this.props.DeleteTodo}>x</p>
              </div>
              <div id={this.state.id} className='todoItem__option section'>
                <p onClick={this.handleDoneSubmit}>done!</p>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}
export default TodoList;
