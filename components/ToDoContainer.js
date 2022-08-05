import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputToDo from './InputToDo';
import ToDoList from './ToDoList';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'First to-do ',
        completed: true,
      },
      {
        id: 2,
        title: 'Second to-do',
        completed: false,
      },
      {
        id: 3,
        title: 'Third to-do',
        completed: false,
      },
    ],
  };
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));
  };
  delTodo = (id) => {
    console.log('deleted', id);
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };
  addTodoItem = (title) => {
    console.log(title);
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  setUpdate = (updatedTitle, id) => {
    console.log(updatedTitle, id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <>
        <Header />
        <InputToDo addTodoProps={this.addTodoItem} />
        <ToDoList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
          setUpdate={this.setUpdate}
        />
      </>
    );
  }
}
export default TodoContainer;
