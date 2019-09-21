import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Eat ASS',
        completed: false
      },
      {
        id: 2,
        title: 'Eat MORE ASS',
        completed: false
      },
      {
        id: 3,
        title: 'Eat food',
        completed: false
      }
    ]
  }

  //Todo Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  //Delete
  delTodo= (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
 
  render() {
    //console.log(this.state.todos)
     return (
    <div className="App">
      <Todos todos= {this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo}/>
    </div>
    )
  ;}
}

export default App;
