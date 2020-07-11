import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title); //Need to pass this back up
    this.setState({title:''}); //Clear the field after it's submitted
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value = {this.state.title}
          onChange = {this.onChange}
          style={{ flex: '10', padding: '5px' }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

export default AddTodo
