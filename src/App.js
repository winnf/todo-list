import React, { Component } from 'react';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title, //key and value is the same, can just do this instead of title: title
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
