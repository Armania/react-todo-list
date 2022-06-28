import React, { Component } from 'react';

class InputToDo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    //console.log("hello");
    console.log(e.target.name + ": " + e.target.value);
    this.setState({
      //title: e.target.value
      [e.target.name]: e.target.value
    });
    };
    handleSubmit = e => {
      e.preventDefault();
      if (this.state.title.trim()) {
        //console.log(this.state.title);
        this.props.addTodoProps(this.state.title);
        this.setState({
          title: ""
        });
      } else {
        e.target.placeholder = "Error: blank todo item"
      }
    };
  render() {
    /*
      let viewMode = {}
      let editMode = {}
      if (this.state.editing) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }
      */
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="title"
          placeholder="Add new To-do item.." 
          //value={this.state.title} 
          onChange={this.onChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default InputToDo;
